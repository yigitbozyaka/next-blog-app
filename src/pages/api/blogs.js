import Mongoose from "mongoose";

export default async function handler(req, res)
{
    try {
        await Mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        const db = Mongoose.connection;

        const response = await db.collection('posts').find({}).toArray();

        res.status(200).json({ data: response });
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
}