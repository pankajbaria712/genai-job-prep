require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/config/database");

const port = Number(process.env.PORT) || 3000;

async function startServer() {
  try {
    await connectDB();

    app.listen(port, "0.0.0.0", () => {
      console.log(`Server is running on port ${port} 🎉`);
    });
  } catch (err) {
    console.error("Unable to start the server.", err);
    process.exitCode = 1;
  }
}

startServer();
