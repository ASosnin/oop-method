import { Bowman } from '../Bowman';

test('Создание персонажа Bowman', () => {
  const persona = new Bowman('Some Name');
  const expected = {
    name: 'Some Name', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
  };
  expect(persona).toEqual(expected);
});
