const faunadb = require("faunadb");
const { FAUNADB_SERVER_SECRET } = process.env;

const client = new faunadb.Client({ secret: FAUNADB_SERVER_SECRET });
const { Create, Collection } = faunadb.query;

exports.handler = async function (event, context) {
  client
    .query(
      Create(Collection("myThoughts"), {
        data: { thought: "I think therefore I am." },
      })
    )
    .then((response) => {
      return { statusCode: 200, body: response };
    });
};
