import { createLogger } from "../utils/logger.js";

export default async function(context, mySbMsg) {

    const logger = createLogger(context, process.env.LOG_LEVEL||'debug', 'SERVICEBUSQUEUE')
    logger.info('JavaScript ServiceBus queue info');
    logger.warn('JavaScript ServiceBus queue warn');
    logger.debug('JavaScript ServiceBus queue warn');
    logger.error('JavaScript ServiceBus queue warn');

    context.log('JavaScript ServiceBus queue trigger function processed message', mySbMsg);
};