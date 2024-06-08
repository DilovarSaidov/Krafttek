import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import TaskRoutes from "./routes/TaskRoutes";
const app = express();
const port = 5555;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(TaskRoutes);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
