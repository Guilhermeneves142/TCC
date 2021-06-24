import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "./database"
import { router } from "./routes";
import "express-async-errors"

const app = express();

app.use(express.json());

app.use(router);

app.use((err: Error,request: Request,response: Response,next: NextFunction) => {
  if(err instanceof Error){
    return response.status(400).json({
      error: err.message,
      status: 400
    })
  }
  
  return response.status(500).json({
    error: "Internal Server Error",
    status: 500
  })
  
})

app.listen(3000,() => console.log("server is running"))