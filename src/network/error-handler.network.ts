import response from './response.network';
import express from 'express';

const errorHandler = (err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  // TODO: Implement a log file creator
  // TODO: Set error message config for english and spanish
  const error = { message: "Ha ocurrido un error. Por favor intenta de nuevo" };
  // TODO: Get the real HTTP Status code
  const code = 500;
  response.create(res, error, code, "error")
};

export default errorHandler;