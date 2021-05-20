import Note from '../models/Note'
const MongoClient = require("mongodb").MongoClient;

const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = '1992shisha';

let cachedDb = null;


const connectToDatabase = async (uri) => {
  // we can cache the access to our database to speed things up a bit
  // (this is the only thing that is safe to cache here)
  if (cachedDb) return cachedDb;

  const client = await MongoClient.connect(uri, {
    useUnifiedTopology: true,
  });

  cachedDb = client.db(DB_NAME);

  return cachedDb;
};

const queryDatabase = async (ss,db) => {
  const data = await 
        db.collection("notes")
        .findOne({_id:ss})

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
};
module.exports.handler=async (req,res,event,context)=>{
  const db =await connectToDatabase(MONGODB_URI)
  const ss = req.params.id
  switch(event.httpMethod){
      case "GET":
          return queryDatabase(db,ss);
     default:
          return{statusCode:400}
  }
}
