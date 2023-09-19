import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

let tList = [];

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("index.ejs",{
        todayList: tList
    });
})

app.post("/",(req,res)=>{
    tList.push(req.body);
    console.log(tList);
    res.render("index.ejs",{
        todayList: tList
    });
})

app.get("/week",(req,res)=>{
    res.render("week.ejs");
})

app.get("/month",(req,res)=>{
    res.render("month.ejs");
})

app.listen(PORT,()=>{
    console.log(`Listening on port: ${PORT}`);
});