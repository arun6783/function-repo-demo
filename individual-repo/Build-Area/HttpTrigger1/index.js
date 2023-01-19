export default async function (context, req) {
  const name = req.query.name || (req.body && req.body.name)
  let jsonSecret = process.env.jsonitem
  if (jsonSecret) {
    if(typeof(jsonSecret) === typeof('')){
      jsonSecret = JSON.parse(jsonSecret)
    }
    Object.keys(jsonSecret).map((i) => {
      process.env[i] = jsonSecret[i]
    })
  }
  const responseMessage = `Hello!! this is individual repos demo Httptrigger1, ${name}. 
  env variable 'single item' = ${process.env.singleitem}. 
  env variable json item = ${process.env.jsonitem}. env variable apiKey = ${process.env.apikey} , productsToDisplay = ${process.env.productsToDisplay}`

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: responseMessage,
  }
}
