import express from "express";
let congigViewEngine = (app) => {
    app.use(express.static('./src/public')); // chỉ được lấy ảnh trong file public
    app.set("view engine", "ejs");//cho phép gõ được logic như if else 
    app.set("views", "./src/views");// mặc định lấy file html ở thưc mục views

}
module.exports=congigViewEngine;