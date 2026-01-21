// using uuid version 7 for making requestId
import { v7 as uuidv7 } from "uuid";

// error handler
export default function errorHandler(err, req, res, next) {
  console.log(err);
  const statusCode = err.statusCode || 500;
  const requestId = uuidv7();
  const requestTime = new Date().toISOString();

  return res.status(statusCode).json({
    status: "Failed",
    statusCode: statusCode,
    message: err.message,
    timeStamp: requestTime,
    requestId: requestId,
  });
}
