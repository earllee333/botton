import mongoose from 'mongoose';
const connection = {};

async function dbConnect(){
    if(connection.isConnected){
        return;
    }
    const db = await mongoose.connect('mongodb+srv://test:2234@earllee333.qx4rs.mongodb.net/1992shisha?retryWrites=true&w=majority'
        ,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
    connection.isConnected = db.connections[0].readyState;
    console.log(connection.isConnected)
}
export default dbConnect;