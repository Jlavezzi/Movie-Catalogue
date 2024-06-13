//index.js
//import the app
const connectDB = require('./config/mongoose.config');
const app = require('./app');

//define the port
const PORT = process.env.port || 5000



// Function to start the server
const startServer = async () => {
    try {
      // Start the server
      app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
      });
      // Connect to MongoDB
      await connectDB();
  
      
    } catch (error) {
      console.error('Failed to connect to MongoDB', error);
      process.exit(1); // Exit process with failure
    }
  };
  
  // Start the server
  startServer();