const Constants = require('../src/utils/Constants');
const validation = require('../src/utils/validation');

test('Caso Válido', () => {
      const result = validation.create({
        nome: "Steve Rogers",
        origem: "Soro",
        forca: "Forte",
        poder: "Super Humano"
      });
      expect(result).toEqual(undefined);
});

test('Caso Inválido - Sem o nome', () => {
  const result = validation.create({
    origem: "Soro",
    forca: "Forte",
    poder: "Super Humano"
  });
  expect(result.name).toEqual(Constants.ErrorValidation.name);
});