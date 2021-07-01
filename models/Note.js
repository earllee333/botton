import mongoose from 'mongoose';

const NoteSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{type:String,
    required:true},
    phone:{
        type:String,
        require:true
    },
    number:{type:String,
    require:true},
    date:{type:String,
    require:true},
},{
    timestamps:true
})

module.exports= mongoose.models.Note || mongoose.model('notes',NoteSchema)