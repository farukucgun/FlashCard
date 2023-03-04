import express from 'express';
import flashCardModel from '../models/flashCard.js';

const router = express.Router();

// Get all flash cards
router.get('/', async (req, res) => {
    flashCardModel.find( {} ).sort({date: -1})
    .then((flashCards) => {
        res.status(200).json(flashCards);
    })
    .catch((err) => {
        res.status(404).json({message: err.message});
    }
    )
});

// Get a flash card by id
router.get('/:id', async (req, res) => {
    flashCardModel.findById(req.params.id)
    .then((flashCard) => {
        res.status(200).json(flashCard);
    })
    .catch((err) => {
        res.status(404).json({message: err.message});
    }
    )
});

// Create a flash card
router.post('/', async (req, res) => {
    const flashCard = req.body;
    const newFlashCard = new flashCardModel(flashCard);
    newFlashCard.save()
    .then(() => {
        res.status(201).json(newFlashCard);
    })
    .catch((err) => {
        res.status(409).json({message: err.message});
    })
});

// Update a flash card
router.patch('/:id', async (req, res) => {
    const flashCard = req.body;
    const id = req.params.id;
    flashCardModel.findByIdAndUpdate(id, flashCard, {new: true})
    .then((updatedFlashCard) => {
        res.status(200).json(updatedFlashCard);
    })
    .catch((err) => {
        res.status(409).json({message: err.message});
    })
});

// Delete a flash card
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    flashCardModel.findByIdAndDelete(id)
    .then(() => {
        res.status(200).json({message: "Flash card deleted"});
    })
    .catch((err) => {
        res.status(409).json({message: err.message});
    })
});

export default router;