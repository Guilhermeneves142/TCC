import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;

}

export function ensureAuthenticate(request: Request, response: Response, next: NextFunction){

  //receive token
  const authToken = request.headers.authorization;
  //validar se o token esta preenchido
  if(!authToken) return response.status(401).end();

  const [,token] = authToken.split(" ");

  try {
    const {sub} = verify(token,"69a80d081c6b251a81dab43a2bae95ee") as IPayload;

    request.user_id = sub;

    return next();
  } catch (error) {
    return response.status(401).end();
  }
}