import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());



app.get("/message", function (request, response) {
    responce.json({message: "i am the message"});
});


app.listen(8080, function () {
    console.log("server is listening to port 8080")
});
