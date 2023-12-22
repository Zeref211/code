const express = require("express");
const bodyparser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { default: axios } = require("axios");

const jwt = require("jsonwebtoken");
const app = express();
// const cookieParser = require("cookie-parser");
// const config = "Driver={ODBC Driver 17 for SQL Server};Server=DESKTOP-SMHT39M;Database=ShopBearBia;Trusted_Connection=yes;"
// app.use(cookieParser());
app.use(cors(
    {
        origin: ["http://localhost:3000"],
        methods: ["POST", "GET"],
        credentials: true
    }
));
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }))
app.use(express.static("public"))
app.use(cookieParser())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "dongho"
})
const verifyUser =(req,res,next)=>{
    const token = req.cookies.token;
    if(!token){
        return res.json({Message:"Bạn đã sai"});
    }
    else{
        jwt.verify(token,"jwt-secret-key",(err,decoded)=>{
            if(err){
                return res.json({Message:"Bạn đã sai"})
            }
            else{
                req.name=decoded.name;
                next();
            }
        })
    }
}
app.get('/auth',verifyUser,(req,res)=>{
    return res.json({ Status:"Success", name: req.name});
})
app.post('/Login',function(req,res){
    const sql='SELECT * FROM khachhang where taikhoan =? AND matkhau=?';
    db.query(sql,[req.body.taikhoan, req.body.matkhau],function(err,data){
    
        if (err){
            return res.json('tài khoản hoặc mật khẩu đã sai'); 
           
        }
        if(data.length>0){
            const name = data[0].tenkh;
            console.log(name);
            const token = jwt.sign({name},"jwt-secret-key",{expiresIn:'1d'});
            res.cookie('token',token);
            return res.json({Status:"Success"})
                
        }else{return res.json("not Success");}

            
        
    })
})
app.get('/sanpham',function(req,res){
    db.connect(function(err){
        const sql ="SELECT * FROM sanpham" 
        db.query(sql,function(err,data){
            if (err){
                return res.json('ban da sai roi')
            }
            else{
                return res.json(data)
            }
        }) 
    })
})

app.get('/:id',function(req,res){
    db.connect(function(err){
        const sql ="SELECT * FROM sanpham where masp = ? " 
        db.query(sql,req.params.id,function(err,data){
            if (err){
                return res.json('ban da sai roi')
            }
            else{
                return res.json(data)
            }
        }) 
    })
})
// create
app.post('/create',function(req,res){
    const sql ="INSERT INTO sanpham(`masp`,`tensp`,`gia`,`hinh`,`soluong`)VALUES(?)";
    const values=[
        req.body.masp,
        req.body.tensp,
        req.body.gia,
        req.body.hinh,
        req.body.soluong
    ]
    db.query(sql,[values],function(err,data){
        if (err){
            return res.json('ban da sai roi')
        }
        else{
            return res.json(data);
        }
    })
})
// update
app.put('/update/:id',function(req,res){
    const sql ="update sanpham set  tensp=?, gia=?, hinh=?, soluong=? where masp=?";
    const id =req.params.id;
    db.query(sql,[req.body.masp,
        req.body.tensp,
        req.body.gia,
        req.body.hinh,
        req.body.soluong, id],function(err,data){
        if (err){
            return res.json('ban da sai roi')
        }
        else{
            return res.json(data);
        }
    })
})
// register
app.post('/Register',function(req,res){
    db.connect(function(err){
        const sql ="INSERT INTO khachhang (`makh`,`tenkh`,`sdt`,`email`,`diachi`,`taikhoan`,`matkhau`)VALUES(?) ";    
        const values =[
            req.body.makh,
            req.body.tenkh,
            req.body.sdt,
            req.body.email,
            req.body.diachi,
            req.body.taikhoan,
            req.body.matkhau,
        ]
        db.query(sql, [values],function(err,data){
            if (err){
                return res.json('ban da sai roi')
            }
            else{
                return res.json(data);
            }
        }) 
    })
})
//login

//lưu tài khoản lại cookie

app.listen(8081,function(){
    console.log('bat dau');
})