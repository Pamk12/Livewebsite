// index.jsx
import * as functions from 'firebase-functions';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const mongoURI = 'mongodb://localhost:27017/contactdb';  // Update with your MongoDB URI
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB connected');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
});

const Contact = mongoose.model('Contact', contactSchema);

const feedbackSchema = new mongoose.Schema({
    feedback: { type: String, required: true },
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

// Routes
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;
    try {
        const newContact = new Contact({ name, email, message });
        await newContact.save();
        res.status(200).send('Contact added successfully!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

app.post('/api/feedback', async (req, res) => {
    const { feedback } = req.body;
    const newFeedback = new Feedback({ feedback });
    try {
        await newFeedback.save();
        res.status(200).send('Feedback submitted successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error saving feedback');
    }
});

// Export the express app as a Cloud Function
export const api = functions.https.onRequest(app);

