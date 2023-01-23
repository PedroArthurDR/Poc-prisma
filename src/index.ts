import  express  from "express";
import router from "./routes/router.js";
const app = express()
app.use(express.json());
app.use(router)
const port = process.env.PORT || 5000;
app.listen(port,()=> console.log(`Running in port ${port}`));

app .get("/health", (_req, res) => res.send("OK!"))