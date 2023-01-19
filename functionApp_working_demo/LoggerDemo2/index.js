export default async function (context, req) {
  const url = process.env.KeyVault_URL;
    const name = req.query.name || (req.body && req.body.name);
    const responseMessage = `Hello!!!!!!! this is mono repo no webpack demo Httptrigger2, ${name || ''}. 
    keyvault url = ${url}. Env object  ${JSON.stringify(process.env)}`
    context.res = {
      // status: 200, /* Defaults to 200 */
      body: responseMessage,
    };
  }
  
