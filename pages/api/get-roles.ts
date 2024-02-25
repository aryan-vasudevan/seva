import clientPromise from "../../lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

// Define the handler function
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "GET") {
        try {
            const client = await clientPromise;
            const db = client.db("seva");
            const collection = db.collection("opportunities");

            // Retrieve cursor object from MongoDB collection
            const responseData = collection.find();
            let returnArray = []

            // Check if cursor object is truthy (not null or undefined)
            if (responseData) {
                // Assuming you have async iteration support
                for await (const document of responseData) {
                    // Process each document as needed
                    returnArray.push(document)
                }

                // Respond with success status
                return res.status(200).json(returnArray);
            } else {
                // Respond with error status if no documents found
                return res.status(404).json({ error: "No documents found." });
            }
        } catch (error) {
            // Respond with error status for internal server error
            console.error("Internal server error:", error);
            return res.status(500).json({ error: "Internal server error." });
        }
    } else {
        // Respond with error status for method not allowed
        return res.status(405).json({ error: "Method not allowed." });
    }
}

// Export the handler function
export default handler;
