import express from 'express';
import dotenv from 'dotenv';

dotenv.config();


const app = express();


const PORT =process.env.PORT || 3000;


// Middleware to parse incoming JSON payloads
app.use(express.json())

app.get("/", (req, res) => {
  res.send("backend is running succesfully");
});



// Start server and listen on defined port
app.listen(PORT,()=>{
    console.log(`server is running successfully on ${PORT}`)
    
})

 