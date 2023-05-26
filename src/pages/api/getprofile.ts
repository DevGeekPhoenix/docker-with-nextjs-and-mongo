// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

type Data = {
  data: {
    name: string;
    lastName: string;
    job: string;
    userId: number;
  } | null;
  status: number;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const mongoUrlLocal = "mongodb://frontphoenix:frontphoenix@mongodb:27017";
  const databaseName = "my-db";

  // Connect to the db
  const client = new MongoClient(mongoUrlLocal);

  client.on("commandStarted", (started) => console.log(started));
  const db = client.db(databaseName);
  const myQuery = { userId: 1 };

  const user = (await db.collection("users").findOne(myQuery)) as Data["data"];

  if (user !== null) {
    res.status(200).json({ data: user, status: 200, message: "Succeeded" });
    client.close();
  } else {
    res
      .status(500)
      .json({ data: null, status: 500, message: "Could not find user" });
    client.close();
  }
}
