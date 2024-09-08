import express from "express";
import { configuration } from "./config.js";
import { operar } from "./calculadora.js";
import fs from "fs";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`Hola mundo al usuario ${configuration.username}`);

  fs.appendFile("/tmp/test", "Hey there!\n", function(err:any) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 

});

app.get("/operar", (req, res) => {
  
  const a = parseInt(req.query.a as string);
  const b = parseInt(req.query.b as string);
  
  const oper = req.query.oper as string;

  const resultado = operar(oper, a, b);

  res.send(`el resultado de la operacion ${oper} de ${a} y ${b} es ${resultado}`);
});

export default app;