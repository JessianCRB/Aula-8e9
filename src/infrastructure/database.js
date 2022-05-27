const mongoose = require('mongoose');

const uri = `mongodb+srv://admin:admin@cluster0.ywb4y.mongodb.net/Lab-C214?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const { Schema } = mongoose;

const UsersSchema = new Schema({
    id: {
        type: Number,
        index: true,
        unique: true,
    },
    nome: {
        type: String,
        required: true,
    },
    ano: Number,
    NomeBanda: String,
    genero: String,
});

const UsersModel = mongoose.model('UsersModel', UsersSchema);

module.exports = {
    UsersModel,
};