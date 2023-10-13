module.exports.payRequest = (request, response) => {
  const body = JSON.parse(request.body);
  console.log(body.token, body.amount, body.name);
  response.send("success");
};
