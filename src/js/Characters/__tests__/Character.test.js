import { Character } from '../Character';

test('Валидация имени персонажа меньше 2 символов', () => {
  function createCharacter() {
    return new Character('A', 'Character');
  }

  expect(createCharacter).toThrowError('name должна быть в диапазоне от 2 до 10 символов');
});

test('Валидация имени персонажа больше 10 символов', () => {
  function createCharacter() {
    return new Character('Очень длинное имя персонажа', 'Character');
  }

  expect(createCharacter).toThrowError('name должна быть в диапазоне от 2 до 10 символов');
});

test('Создание персонажа', () => {
  const persona = new Character('Some Name', 'Character');
  const expected = {
    name: 'Some Name', type: 'Character', health: 100, level: 1, attack: 0, defence: 0,
  };
  expect(persona).toEqual(expected);
});

test('Повышение уровня персонажа', () => {
  const persona = new Character('Some Name', 'Character');
  persona.levelUp();
  const expected = {
    name: 'Some Name', type: 'Character', health: 100, level: 2, attack: 0, defence: 0,
  };
  expect(persona).toEqual(expected);
});

test('Повышение уровня мёртвого персонажа', () => {
  const persona = new Character('Some Name', 'Character');
  persona.damage(100);

  expect(() => {
    persona.levelUp();
  }).toThrowError('Нельзя повысить уровень умершего');
});

test('Проверка нанесения урона по живому персонажу', () => {
  const persona = new Character('Some Name', 'Character');
  persona.damage(50);
  const expected = {
    name: 'Some Name', type: 'Character', health: 50, level: 1, attack: 0, defence: 0,
  };
  expect(persona).toEqual(expected);
});

test('Проверка нанесения урона по мёртвому персонажу', () => {
  const persona = new Character('Some Name', 'Character');
  persona.damage(150);
  persona.damage(150);
  const expected = {
    name: 'Some Name', type: 'Character', health: -50, level: 1, attack: 0, defence: 0,
  };
  expect(persona).toEqual(expected);
});
