import clientPromise from "../../lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method == "POST") {
        const data = req.body;

        const organization = req.body.organization;
        const roleName = req.body.roleName;
        const description = req.body.description;

        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const email = req.body.email;
        const phone = req.body.phone;
        const city = req.body.city;

        if (!organization || !roleName || !description || !firstName || !lastName || !email || !phone || !city) {
            return res.status(400).json({ error: "Please fill in all required fields." });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: "Please use a valid email." })
        }

        try {
            const client = await clientPromise;
            const db = client.db();
            const collection = db.collection("opportunities");

            collection.insertOne(data);

        } catch (error) {
            return res.status(500).json({ error: "Internal server error." })
        }
    } else {
        return res.status(405).json({ error: "Method not allowed." });
    }
}

export default handler;