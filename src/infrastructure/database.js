const mongoose = require('mongoose');

const uri = `mongodb+srv://admin:admin@cluster0.ywb4y.mongodb.net/Lab-C214?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const { Schema } = mongoose;

const UsersSchema = new Schema({
    id: {
        type: String,
        index: true,
        unique: true,
    },
    nome: {
        type: String,
        unique: true,
    },
    origem: {
        type: String,
        unique: true,
    },
    forca: String,
    poder: String,
});

const UsersModel = mongoose.model('UsersModel', UsersSchema);

module.exports = {
    UsersModel,
};