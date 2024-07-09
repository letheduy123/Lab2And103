//inport thu vien
const express =require('express');
const mongoose=require('mongoose');
const sinhvien=require('./sinhvienModel');

//tao  doi tuong express
const app=express();
app.set('view engine','ejs');
//ket noi voi csdl
mongoose.connect('mongodb://localhost:27017/AND103',{
    useNewUrlParser:true,
    useUnifiedTopology:true,

}).then(()=>{
    console.log("Ket noi thanh cong mongoodb");
}).catch((err)=>{
    console.error(err);//in loi ra
    
});
//khi nguooidung goi cai sinh vien locahot:300//sinhvien doc co so du lieu
app.get('/sinhvien',async(req,res)=>{
    try{
        const sinhviens=await sinhvien.find();//doc du lieu tu co so du lieu
        // res.json(sinhviens);//chuyen du lieu sang json
        res.render('students',{sinhviens: sinhviens});
        console.log(sinhviens);//in ket qua ra log

    }catch(err){
        console.error(err);//in ra loi
        res.status(500).json({error:'loi khong in ra'})//khong ket noi duoc server
        

    }
});
//tao cong dich vu
const PORT=process.env.PORT||3000;
///server lang nghe
app.listen(PORT),()=>{
    console.log("dang chay cong 300");


}


