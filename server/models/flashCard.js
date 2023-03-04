import mongoose from 'mongoose';

const flashCardSchema = new mongoose.Schema({
    question: String,
    answer: String,
    category: String,
    difficulty: String,
    date: {
        type: Date,
        default: new Date()
    }
}, 
{collection: 'flashCards'});

const FlashCard = mongoose.model('FlashCard', flashCardSchema);

export default FlashCard;
