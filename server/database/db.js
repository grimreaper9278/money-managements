const { Client } = require("pg");

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});
client
  .connect()
  .then(() => {
    console.log(`Connected to database Successfully ... !`.cyan.underline.bold);
  })
  .catch((err) => {
    console.log(
      `We have some problem to conncet to database ... ! ${err}`.red.underline
        .bold
    );
  });

module.exports = client;
