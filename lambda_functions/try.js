const { connectToDatabase } = require("../util/mongodb");

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

    switch(event.httpMethod){
        case "GET":
            return queryDatabase(db);
        case "POST":
            return pushToDatabase(db,JSON.parse(event.body))
        default:
            return{statusCode:400}
    }
}
