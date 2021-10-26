import { Daemon } from '../Daemon';

test('Создание персонажа Daemon', () => {
  const persona = new Daemon('Some Name');
  const expected = {
    name: 'Some Name', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40,
  };
  expect(persona).toEqual(expected);
});
