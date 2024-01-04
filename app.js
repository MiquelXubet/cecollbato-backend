const cors = require("cors")
const express = require('express')
const app = express()
const port = 8000

app.use(express.json())
app.use(cors({
  origin:"http://localhost:5173",
  credentials: true
}))
require('dotenv').config();

const mongoose = require("mongoose");
const mongoDB = "mongodb+srv://"+process.env.DB_USER+":"+process.env.DB_PASSWORD+"@"+process.env.DB_SERVER+"/"+process.env.DB_NAME+"?retryWrites=true&w=majority";
async function main() {
  await mongoose.connect(mongoDB);
}
main().catch(err => console.log(err));

var jugadors = require('./routes/jugadors.js')
app.use('/jugadors', jugadors)

app.get('/', (req, res) => {
  console.log(process.env.DB_USER)
  res.send('Hello CE Collbató!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})