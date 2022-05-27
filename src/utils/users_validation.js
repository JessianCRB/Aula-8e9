const create = {
    nome: { presence: { allowEmpty: false, type: "string" } },
    ano: { presence: false, type: "number" },
    NomeBanda: { presence: false, type: "string" },
    genero: { presence: false, type: "string" },
};

const update = {
    nome: { presence: false, type: "string" },
    ano: { presence: false, type: "number" },
    NomeBanda: { presence: false, type: "string" },
    genero: { presence: false, type: "string" },
};

const get = {
    nome: {presence: {allowEmpty: false,}, type: 'string',},
};

const deleteBy = {
    nome: {
        presence: {allowEmpty: false,}, type: 'string',},
};

module.exports = {
    update,
    create,
    get,
    deleteBy,
};