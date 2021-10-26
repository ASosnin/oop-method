import { Swordsman } from '../Swordsman';

test('Создание персонажа Swordsman', () => {
  const persona = new Swordsman('Some Name');
  const expected = {
    name: 'Some Name', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
  };
  expect(persona).toEqual(expected);
});
