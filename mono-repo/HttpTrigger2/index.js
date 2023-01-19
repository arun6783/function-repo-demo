export default async function (context, req) {
  const name = req.query.name || (req.body && req.body.name)
  const responseMessage = name
    ? `Hello, ${name}. This HTTP2 triggered mono-repo function executed successfully.`
    : 'This HTTP2 triggered mono-repo function executed successfully. Pass a name in the query string or in the request body for a personalized response.'

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: responseMessage,
  }
}

