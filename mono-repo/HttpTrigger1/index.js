import logger from './utils/logger'

export default async function (context, req) {
  logger.debug('in httptrigger1')
  const name = req.query.name || (req.body && req.body.name)
  const responseMessage = name
    ? `Hello, ${name}. This HTTP1 triggered mono-repo function executed successfully.`
    : 'This HTTP1 triggered mono-repo function executed successfully. Pass a name in the query string or in the request body for a personalized response.'

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: responseMessage,
  }
}

