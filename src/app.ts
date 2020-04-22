import * as express from "express";
import api from "./routes/api";
const app = express();
app.use(express.json())
app.use("/api", api);
const port: number | string = process.env.PORT || 5000;
app.set("port", port);
export default app;
