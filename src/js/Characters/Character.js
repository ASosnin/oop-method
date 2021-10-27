export class Character {
  constructor(name, type) {
    if (this.constructor === Character) {
      throw new Error('Абстрактный класс не может быть создан');
    }
    if (name.length < 2 || name.length > 10) {
      throw new Error('name должна быть в диапазоне от 2 до 10 символов');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Нельзя повысить уровень умершего');
    }
    this.level += 1;
    this.health = 100;
    this.attack += this.attack * 0.20;
    this.defence += this.defence * 0.20;
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}
