import { app } from "./app.js";
import connectDB from "./db/connect.db.js";
import { PORT } from "./utils/envHandler.js";

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT || 5000, () => {
      console.log(` ⚙️  Server is running http://localhost:${PORT}`);
    });
  } catch (err) {
    console.log("MONGO db connection failed !!! ", err);
  }
};

startServer();
