const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static("public"))

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(require("./routes/htmlroute"))
app.use(require("./routes/apiroute"))



app.listen(PORT, function(){
    console.log("App is listening on PORT:", PORT)
})