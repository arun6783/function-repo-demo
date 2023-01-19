export default async function (context, req) {
  
    const name = req.query.name || (req.body && req.body.name);
    const responseMessage = `Hello!! this is individual repos demo Httptrigger2, ${name || 'no name present'}.`
  
    context.res = {
      // status: 200, /* Defaults to 200 */
      body: responseMessage,
    };
  }
  
