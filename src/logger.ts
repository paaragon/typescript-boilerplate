/* eslint-disable prefer-template */
import * as winston from 'winston';
import 'winston-daily-rotate-file';
import 'colors';

const rotateTransport = new winston.transports.DailyRotateFile({
  filename: `${__dirname}/../logs/dialog-test-daemon-%DATE%.log`,
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d',
});


export default winston.createLogger({
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss.SSS',
    }),
    winston.format.simple(),
    winston.format
      .printf(info => `${info.timestamp} [${info.namespace || 'default'}]`.grey + ` ${info.level}: ${info.message}`),
  ),
  transports: [
    new winston.transports.Console(),
    rotateTransport,
  ],
});
