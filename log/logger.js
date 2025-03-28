import winston from "winston";
import path from "path";

const logFormat = winston.format.combine(
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  winston.format.printf(({ level, message, timestamp }) => {
    return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
  })
);

const logger = winston.createLogger({
  level: "info",
  format: logFormat,
  transports: [
    new winston.transports.Console({
      format: winston.format.colorize({ all: true }),
    }),
    new winston.transports.File({
      filename: path.join("logs", "error.log"),
      level: "error",
    }),
    new winston.transports.File({ filename: path.join("logs", "app.log") }),
  ],
});

export default logger;
