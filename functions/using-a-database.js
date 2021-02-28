const faunadb = require("faunadb");

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: "Hello World",
  };
};
