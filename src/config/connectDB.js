const Sequelize = require('sequelize');
const sequelize = new Sequelize("devtest","root",null,{
    host:"localhost",
    dialect:"mysql",
    logging:false
});
let connectDB =async()=>{
    try{
        await sequelize.authenticate();
        console.log("kết nối DB thành công ");
    }catch(error){
        console.log("kết nối DB thất bại ",error);
    }

}
module.exports = connectDB;
