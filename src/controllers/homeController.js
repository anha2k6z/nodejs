//điều hướng lấy dữ liệu (nv của file controller)
import db from '../models/index';
import CRUDservice from '../services/CRUDservice';
let getHomePage = async(req,res) =>{
    try{
        let data = await db.User.findAll();
        return res.render('homePage.ejs',{
            data: JSON.stringify(data)
        });
    } catch (e){
        console.log(e);
    }
    
}
let getCRUD = (req,res) =>{
    return res.render("crud.ejs");
}
let postCRUD = async(req,res) =>{
    let message  = await CRUDservice.createNewUser(req.body);
    console.log(message)
    return res.send("post crud fomt server");
}
let displayGetCRUD = async(req,res) =>{
    let data = await CRUDservice.getAllUser();
    console.log("==============")
    console.log(data)
    console.log("===============")
    return res.render('displayCRUD.ejs',{
        dataTable:data
    })
}
let getEditCRUD = async (req,res) =>{
    let userId= req.query.id;
    if(userId){
        let userData= await CRUDservice.getUserInFoById(userId);
        //check user data not found 
        return res.render("editCRUD.ejs",{
            user:userData
        });
        
    }
    else{
        return res.send("User not error !!!");
    } 
}
let putCRUD = async(req,res) =>{
    let data = req.body;
    let allUsers = await CRUDservice.updateUserData(data);
    return res.render("displayCRUD.ejs",{
        dataTable :allUsers
    })
}
let  deleteCRUD = async (req,res)=>{
    let userId = req.query.id
    if(userId){
        await CRUDservice.deleteUserById(userId)
        return res.send("delete success")
    }
    else{
        return res.send("delete unsuccess")
    }
   
}
module.exports = {
    getHomePage: getHomePage,
    getCRUD:getCRUD,
    postCRUD:postCRUD,
    displayGetCRUD:displayGetCRUD,
    getEditCRUD:getEditCRUD,
    putCRUD:putCRUD,
    deleteCRUD:deleteCRUD

    
    // duoc goi la key va value của hàm có nghĩa được định gọi nhiều hàm thông qua obj {}
}