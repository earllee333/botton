const MongoClient = require("mongodb").MongoClient;
const ObjectId = require('mongodb').ObjectId
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

const queryDatabase = async (db,id) => {
  const o_id = new ObjectId(id)
  const data = await 
        db.collection('notes')
        //.findOne({'name':'33Q'})
        .findOne({_id:o_id})
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
};
module.exports.handler=async (event,context)=>{
  const db =await connectToDatabase(MONGODB_URI)
  const id = '60a4be28a27d180009c5d72d'

  switch(event.httpMethod){
      case "GET":
          return queryDatabase(db,id);
     default:
          return{statusCode:400}
  }
}