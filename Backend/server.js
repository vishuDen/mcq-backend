const express = require('express');
const dotenv = require('dotenv')
const connectDB = require('./config/db')
var cors = require("cors");
const path = require('path')

const userRoutes = require('./routes/userRoutes');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');

dotenv.config();
connectDB();


const app = express();
app.use(express.json());

app.use(cors());

app.use("/api/user",userRoutes)

// --- deployment

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')))
    app.get('*', (req,res) => {
        console.log("yes")
        res.sendFile(path.resolve(__dirname, "frontend", "build" , "index.html"))
    })
}

//

app.use(notFound)
app.use(errorHandler)
const PORT = process.env.PORT ||  5000
app.listen(PORT)