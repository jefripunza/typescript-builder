import * as http from "http";
import { Request, Response } from "express";

import "./lib/environment";
import { app } from "./lib/app";

app.get("*", (req: Request, res: Response) => {
  return res.send("yess");
});

const server = http.createServer(app);
server.listen(process.env.PORT, () => {
  console.log("Listen at " + process.env.PORT);
});
