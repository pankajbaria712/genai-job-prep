require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/config/database");
const invokeGeminiAi = require("./src/services/ai.service");

async function startServer() {
  try {
    await connectDB();
    await invokeGeminiAi();
    app.listen(3000, () => {
      console.log("server is running on port number 3000 🎉");
    });
  } catch (err) {
    console.error("Unable to connect to MongoDB. Server not started.", err);
    process.exitCode = 1;
  }
}

startServer();
