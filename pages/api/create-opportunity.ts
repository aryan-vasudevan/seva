import clientPromise from "../../lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method == "POST") {
        const data = req.body;

        const organization = req.body.organization;
        const roleName = req.body.roleName;
        const description = req.body.description;

        const email = req.body.email;
        const phoneNumber = req.body.phoneNumber;
        const city = req.body.city;

        console.log(data);

        // if (!organization || !roleName || !description || !email || !phoneNumber || !city) {
        //     return res.status(400).json({ error: "Please fill in all required fields." });
        // }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: "Please use a valid email." })
        }

        try {
            const client = await clientPromise;
            const db = client.db("seva");
            const collection = db.collection("opportunities");

            collection.insertOne(data);
            return res.status(201).json({ message: "Successfully created opportunity." })

        } catch (error) {
            return res.status(500).json({ error: "Internal server error." })
        }
    } else {
        return res.status(405).json({ error: "Method not allowed." });
    }
}

export default handler;