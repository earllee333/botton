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

const queryDatabase = async ((db,id)) => {
    const{query:{id}}
    const data = await 
        db.collection("notes")
        .findById(id)

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
};
const pushToDatabase = async(db,data)=>{
    const MyData = {
        name:data.name,
        email:data.email,
        phone:data.phone,
        number:data.number,
    };
    if(MyData.name && MyData.email){
        await db.collection('notes').insertMany([data]);
        return{statusCode:201};

    }   else{
        return{statusCode:422}
    }
};
module.exports.handler=async (event,context)=>{
  const db =await connectToDatabase(MONGODB_URI)
    const id = event.path
    console.log(id)
  switch(event.httpMethod,method){
      case "GET":
          return queryDatabase(db);
      case "POST":
          return pushToDatabase(db,JSON.parse(event.body))
      default:
          return{statusCode:400}
  }
}
