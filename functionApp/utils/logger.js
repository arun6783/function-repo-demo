import { AzureFunctions } from 'winston-azure-functions'

import { createLogger, format, transports, addColors }  from "winston";
import Context from './context.js';

const { combine, timestamp, printf, colorize, splat, label } = format;

const logLevels = {
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    verbose: 3,
    debug: 4,
  },
  colors: {
    error: "red",
    warn: "yellow",
    info: "green",
    debug: "blue",
  },
};

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

addColors(logLevels.colors);

const createLoggerConfig = (context, level, myLabel, myFormat) => {
  return {
    levels: logLevels.levels,
    format: combine(
      colorize(),
      splat(),
      timestamp(),
      label({ label: myLabel }),
      myFormat
    ),
    transports: [
      new transports.Console({
        level,
      }),
      new Context({ context })
    ],
  };
};

const byEnv = {
  develop: "info",
  qa: "warn",
  production: "error",
};

const defaultLogLevel =
  process.env.LOG_LEVEL || byEnv[process.env.NODE_ENV] || "info";

const logger = (context, logLevel, logLabel, logFormat) => {
  const loggerConfig = createLoggerConfig(context, 
    logLevel || defaultLogLevel,
    logLabel,
    logFormat || defaultFormat
  );
  const appLogger = createLogger(loggerConfig);
  appLogger.debug(`Logging at ${logLevel}`);
  return appLogger;
};



export {  logger as createLogger };
