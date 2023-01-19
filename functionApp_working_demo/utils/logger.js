import  { createLogger, format, transports, addColors } from "winston";

const { combine, timestamp, printf, colorize, splat, label } = format;


const level = process.env.LOG_LEVEL || 'info';


addColors({
  error: 'red',
  warn: 'yellow',
  info: 'cyan',
  debug: 'green'
});



const defaultFormat = printf(
  ({
    level: logLevel,
    message: logMessage,
    label: logLabel,
    timestamp: logTimestamp,
    ...metadata
  }) => {
    const loggerLabel = logLabel ? ` [${logLabel}]` : "";
    let logString = `${logTimestamp}${loggerLabel} ${logLevel}: ${logMessage}`;

    const durationMs = metadata?.durationMs;
    if (durationMs) {
      logString += `, durationMS: ${durationMs}`;
    }

    return logString;
  }
);



const logger = createLogger({
  transports: [
      new transports.Console({
          level: level,
          colorize: true,
                timestamp: function () {
                    return (new Date()).toLocaleTimeString();
                },
                prettyPrint: true,
                format: combine(
                  colorize(),
                  splat(),
                  timestamp(),
                  label({ label: 'simplewinstonlogger' }),
                  defaultFormat
                ),
          debugStdout: true,
      })
  ]
});


export default  logger;