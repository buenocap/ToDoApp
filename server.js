import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

let tList = [];
let wList= [];

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("index.ejs",{
        todayList: tList
    });
})

app.post("/",(req,res)=>{
    tList.push(req.body);
    res.render("index.ejs",{
        todayList: tList
    });
})

app.get("/week",(req,res)=>{
    res.render("week.ejs",{
        weekList: wList
    });
})

app.post("/week",(req,res)=>{
    let data = {tInput:req.body.tInput,dueInput:req.body.dueInput,dueDayWeek:parseInt(req.body.dueDayWeek)};
    wList.push(data);
    console.log(wList);
    res.render("week.ejs",{
        weekList: wList
    });
})

app.listen(PORT,()=>{
    console.log(`Listening on port: ${PORT}`);
});