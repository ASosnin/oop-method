import { Undead } from '../Undead';

test('Создание персонажа Undead', () => {
  const persona = new Undead('Some Name');
  const expected = {
    name: 'Some Name', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25,
  };
  expect(persona).toEqual(expected);
});
