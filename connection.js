/* file: connection.js */
const MongoClient = require("mongodb").MongoClient
const connectionString =
"mongodb+srv://yuukiasuna:yuukiasuna@wpu.wdikh.mongodb.net/wpu?retryWrites=true&w=majority";
const client = new MongoClient(connectionString, { 
 useUnifiedTopology: true
});
(async () => {
 try {
 await client.connect();
 } catch (error) {
 console.error(error);
}
})();

module.exports = client

