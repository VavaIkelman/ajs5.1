import Character from '../Character';

test ('Creat with error', () => {
    expect(() => new Character('a')).toThrow();
    expect(() => new Character('awertyujhgfsas')).toThrow();
});

test('Check type', () => {
    expect(() => new Character('Batman', 'Businessman')).toThrow();
});

test('create character type done', () => {
    const hero = new Character ('Ron', 'Swordsman');
    expect(hero.type).toBe('Swordsman')
});

test('create name', () => {
    const hero = new Character('Marlin', 'Magician');
    expect(hero.name).toBe('Marlin');
});

test('create full character', () => {
    const hero = new Character('Bob', 'Zombie');
    const result = {
        name: 'Bob',
        type: 'Zombie',
        health: 100,
        level: 1,

    }

    expect(hero).toMatchObject(result);
});

test('check levelUp for level', () => {
    const hero = new Character('Bob', 'Zombie');
    const currentLevel = hero.level;
    hero.levelUp();
    const result = currentLevel + 1;
    
    expect(hero.level).toEqual(result);
});
test('check levelUp for attack', () => {
    const hero = new Character('Bob', 'Zombie');
    hero.levelUp();
    const result = hero.attack * 1.2;
    
    expect(hero.attack).toEqual(result);
    
});

test('check levelUp for defence', () => {
    const hero = new Character('Bob', 'Zombie');
    hero.levelUp();
    const result = hero.defence * 1.2;
    
    expect(hero.defence).toEqual(result);
});

test('check damage points', () => {
    const hero = new Character('Bob', 'Zombie');
    hero.damage(25);
    const result = hero.health - (25 * (1 - hero.defence / 100));

    expect(hero.health).toEqual(result);
});