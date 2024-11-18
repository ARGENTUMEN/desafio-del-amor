const express = require('express');
const Card = require('../models/Card');

const router = express.Router();

// Obtener todas las tarjetas
router.get('/', async (req, res) => {
    try {
        const cards = await Card.find();
        res.json(cards);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Obtener una tarjeta por día
router.get('/:day', async (req, res) => {
    try {
        const card = await Card.findOne({ day: req.params.day });
        if (!card) return res.status(404).json({ message: 'Tarjeta no encontrada' });
        res.json(card);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Crear una nueva tarjeta
router.post('/', async (req, res) => {
    try {
        const { title, summary, content, image, day } = req.body;
        const newCard = new Card({ title, summary, content, image, day });
        await newCard.save();
        res.status(201).json(newCard);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
