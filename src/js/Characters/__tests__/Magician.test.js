import { Magician } from '../Magician';

test('Создание персонажа Magician', () => {
  const persona = new Magician('Some Name');
  const expected = {
    name: 'Some Name', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
  };
  expect(persona).toEqual(expected);
});
