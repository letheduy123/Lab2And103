const mongoose=require('mongoose');//inport thu vien
const sinhvienSchema=new mongoose.Schema({
    id:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
});
const sinhvien =mongoose.model('student',sinhvienSchema);
module.exports=sinhvien;
