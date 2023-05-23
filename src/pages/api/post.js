import Mongoose from 'mongoose';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { title, description, slug, content } = req.body;

        if (!title || !description || !slug || !content) {
            return res.status(422).json({ error: 'Missing at least 1 Input!' });
        }

        const newPost = {
            title,
            description,
            slug,
            content,
            date: new Date().toLocaleDateString('tr-TR').replace('.', '/').replace('.', '/')
        };

        try {
            await Mongoose.connect(process.env.MONGODB_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });

            const db = Mongoose.connection;

            const response = await db.collection('posts').insertOne(newPost);
            res.status(200).json({ message: 'Post created successfully'});
        } catch (error) {
            res.status(500).json({ error: 'Something went wrong' });
        }
    }
}