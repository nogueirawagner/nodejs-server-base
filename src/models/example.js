'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    titulo:{
        type: String,
        required: true, 
        trim: true 
    },
    codigo: {
        type: String,
        required: [true, 'O codigo é obrigatorio'],
        trim: true,
        index: true,
        unique: true
    },
    descricao: {
        type: String,
        required: [true, 'A descrição é obrigatório'],
        trim: true
    },
    preco: {
        type: Number,
        required: [true, 'Preco é obrigatório'],
    },
    ativo: {
        type: Boolean,
        required: true,
        default: true
    },
    marca: [{
        type: String,
        required: [true, 'A marca é obrigatório']
    }]
});

module.exports = mongoose.model('Example', schema);