const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/contactdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
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
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
