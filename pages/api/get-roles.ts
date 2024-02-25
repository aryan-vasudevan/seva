import clientPromise from "../../lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method == "POST") {
        const data = req.body;

        try {
            const client = await clientPromise;
            const db = client.db();
            const collection = db.collection("opportunities");

            collection.find({  })
        } catch (error) {
            res.status(504).json({ error: "Internal server error." })
        }
    } else {
        res.status(405).json({ error: "Method not allowed." })
    }
}

export default handler;