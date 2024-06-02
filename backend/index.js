//index.js
//import the app
const app = require('./app');

//define the port
const PORT = process.env.port || 5000


//start the server
app.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`);
});