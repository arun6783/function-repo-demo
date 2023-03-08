import { createLogger } from "../utils/logger.js";

export default async function (context, req) {
    const logger = createLogger(context, process.env.LOG_LEVEL||'debug', 'HTTPTRIGGER1')
    logger.info('JavaScript HTTP trigger1 info');
    logger.warn('JavaScript HTTP trigger1 warn');
    logger.debug('JavaScript HTTP trigger1 warn');
    logger.error('JavaScript HTTP trigger1 warn');


    // context.log.error('JavaScriptContext HTTP trigger1 error')
    // context.log.warn('JavaScriptContext HTTP trigger1 warn')
    // context.log.info('JavaScriptContext HTTP trigger1 info')
    // context.log.verbose('JavaScriptContext HTTP trigger1 verbose')	
    
    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello, " + name + ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}