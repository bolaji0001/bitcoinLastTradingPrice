import express from "express";
import bodyParser from "body-parser"
import axios from "axios";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;


app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", async (req,res)=>{
    try{
    const result = await axios.get("https://api.blockchain.com/v3/exchange/tickers/BTC-USD");
    res.render("index.ejs", {symbol: result.data.symbol, content: result.data.last_trade_price});
    }catch(error){
        console.log(error);
    }
})


app.listen(3000, (req,res)=>{
    console.log("App is listening on port 3000")
})