const app = require('./src/routes/index');
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT;
// app.get("/", (req: Request, res: Response) => {
//   res.send("Express + TypeScript Server");
// });

// app.post("/test/:id", (req:Request, res:Response) => {
//   res.send({ data: req.params.id });
// });

app.listen(port, (): void => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
