import Character from '../Undead';

test ('create Undead', () => {
    const hero = new Character('Zac', 'Undead');
    const result = {
        name: 'Zac',
        type: 'Undead',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    }

    expect(hero).toMatchObject(result);
})