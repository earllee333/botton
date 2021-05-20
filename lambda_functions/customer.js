const ObjectId = require('mongodb').ObjectId;

const MongoClient = require("mongodb").MongoClient;

const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = '1992shisha';

let cachedDb = null;
const getId = (urlPath) => urlPath.match(/([^/]*)\/*$/)[0];


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

const queryDatabase = async (db,queryId) => {
  const o_id = new ObjectId(queryId)
  const data = await 
        db.collection("notes")
        //.findOne({"_id":`ObjectId(${id})`})
        //.find({"_id" :ObjectId("5e07158c25ddae1f53b621fd")})
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
  const query  = event.queryStringParameters;
  const queryId = query.id || query._id
  switch(event.httpMethod){
      case "GET":
          return queryDatabase(db,queryId);
     default:
          return{statusCode:400}
  }
}
