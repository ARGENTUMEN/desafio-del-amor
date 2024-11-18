const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    title: { type: String, required: true },
    summary: { type: String, required: true },
    content: { type: String, required: true }, // Texto del modal
    image: { type: String, required: true }, // Ruta o URL de la imagen
    day: { type: Number, required: true, unique: true }, // Día único del desafío
    examples: { type: String, required: false }, // Ejemplos prácticos
    verseLink: { type: String, required: false } // Link al versículo principal
});

module.exports = mongoose.model('Card', cardSchema);
