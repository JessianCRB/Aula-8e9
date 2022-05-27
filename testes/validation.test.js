const Constants = require('../src/utils/constants');
const validation = require('../src/utils/validation');

test('Caso Válido', () => {
      const result = validation.create({
        nome: "everything i wanted",
        ano: 2019,
        nomeBanda: "Billie Eilish",
        genero: "Pop"
      });
      expect(result).toEqual(undefined);
});

test('Caso Inválido - Sem o nome', () => {
  const result = validation.create({
    ano: 2019,
    nomeBanda: "Billie Eilish",
    genero: "Pop"
  });
  expect(result.name).toEqual(Constants.ErrorValidation.name);
});