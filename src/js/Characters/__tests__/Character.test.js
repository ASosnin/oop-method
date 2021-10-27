import { Character } from '../Character';
import { Bowman } from '../Bowman';

test('Валидация имени персонажа меньше 2 символов', () => {
  function createCharacter() {
    return new Bowman('A');
  }

  expect(createCharacter).toThrowError('name должна быть в диапазоне от 2 до 10 символов');
});

test('Валидация имени персонажа больше 10 символов', () => {
  function createCharacter() {
    return new Bowman('Очень длинное имя персонажа');
  }

  expect(createCharacter).toThrowError('name должна быть в диапазоне от 2 до 10 символов');
});

test('Создание персонажа базового класса', () => {
  function createCharacter() {
    return new Character('Some Name', 'Character');
  }

  expect(createCharacter).toThrowError('Абстрактный класс не может быть создан');
});

test('Повышение уровня персонажа', () => {
  const persona = new Bowman('Some Name');
  persona.levelUp();
  const expected = {
    name: 'Some Name', type: 'Bowman', health: 100, level: 2, attack: 30, defence: 30,
  };
  expect(persona).toEqual(expected);
});

test('Повышение уровня мёртвого персонажа', () => {
  const persona = new Bowman('Some Name');
  persona.damage(1000);

  expect(() => {
    persona.levelUp();
  }).toThrowError('Нельзя повысить уровень умершего');
});

test('Проверка нанесения урона по живому персонажу', () => {
  const persona = new Bowman('Some Name');
  persona.damage(50);
  const expected = {
    name: 'Some Name', type: 'Bowman', health: 62.5, level: 1, attack: 25, defence: 25,
  };
  expect(persona).toEqual(expected);
});

test('Проверка нанесения урона по мёртвому Bowman', () => {
  const persona = new Bowman('Some Name');
  persona.health = -1;
  persona.damage(10);
  const expected = {
    name: 'Some Name', type: 'Bowman', health: -1, level: 1, attack: 25, defence: 25,
  };
  expect(persona).toEqual(expected);
});
