const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({extended: false}))
const mySqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "cars",
    multipleStatements: true
})
cors.origin

mySqlConnection.connect((err)=> {
    if(!err)
    {
        console.log("DB is connected");

    }
    else
        console.log("DB ERROR")
})



app.listen(8080,() =>
    console.log("Server running on PORT 8080")
)

app.get("/", (req,res)=> {
res.send("Hello world");
})

app.get("/cars", (req,res)=> {
    mySqlConnection.query("SELECT * FROM cars", (err,rows, fields) => {
        if(!err)
        {
            res.send(rows);
        }
        else
            console.log(err);
    })
})
app.get("/cars/:id", (req,res)=> {
    mySqlConnection.query("SELECT * FROM cars WHERE id = ?", [req.params.id], (err,rows, fields) => {
        if(!err)
        {
            res.send(rows);
        }
        else
            console.log(err);
    })
})

//Delete
app.delete("/cars/:id", (req,res)=> {
    mySqlConnection.query("DELETE FROM cars WHERE id = ?", [req.params.id], (err,rows, fields) => {
        if(!err)
        {
            res.send("Car with id: " + [req.params.id] + "Deleted Successfully");
        }
        else
            console.log(err);
    })
})

//Create and Update
app.post("/cars", (req,res)=> {
    let emp = req.body;

    let sql = "SET @id = ?; SET @name = ?; SET @model = ?; SET @year = ?; SET @color = ?; SET @user_id = ?; CALL CarsAddOrEdit(@id,@name,@model,@year,@color,@user_id)";

    mySqlConnection.query(sql,[emp.id, emp.name, emp.model, emp.year, emp.color, emp.user_id], (err,rows, fields) => {
        if (!err)
            rows.forEach(element => {
                if(element.constructor === Array)
                    res.send('New Car ID1 : ' + emp.name);
            });
        else
            console.log(err);
    })
})