import math from './math.js'
import logger from '../utils/logger.js'
//following code

//connect to keyvalut and get secret

export default async function (context, req) {
  try {
    const name = req.query.name || (req.body && req.body.name)

    logger.info('arun test log info')
    logger.warn('arun test log warn')
    logger.error('arun test log error')
    

    context.log.info('contextlog test log info')
    context.log.warn('contextlog test log warn')
    context.log.error('contextlog test log error')
    

    const randomAdd = math.add(Math.random(), Math.random())

    const responseMessage = `Hello!! this is mono repo no webpack demo Httptrigger1, 
    ${name || ''}. Random Number is ${randomAdd}.`

    context.res = {
      body: responseMessage,
    }
  } catch (err) {
    context.log('error occured', err)
  }
}
