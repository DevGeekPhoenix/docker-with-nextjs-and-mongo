// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  let mongoUrlLocal = "mongodb://frontphoenix:frontphoenix@mongodb:27017";
  let mongoUrlDocker = "mongodb://frontphoenix:frontphoenix@mongodb";
  let databaseName = "my-db";
  let userObj = req.body;

  const client = new MongoClient(mongoUrlLocal);

  client.on("commandStarted", (started) => console.log(started));
  let db = client.db(databaseName);

  userObj["userid"] = 1;

  let myQuery = { userId: 1 };
  let newValues = { $set: userObj };

  db.collection("users").updateOne(myQuery, newValues, { upsert: true });

  res.send(userObj);
}
