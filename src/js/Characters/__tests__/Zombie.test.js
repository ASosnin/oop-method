import { Zombie } from '../Zombie';

test('Создание персонажа Zombie', () => {
  const persona = new Zombie('Some Name');
  const expected = {
    name: 'Some Name', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10,
  };
  expect(persona).toEqual(expected);
});
