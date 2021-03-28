import Character from '../Swordsman';

test('Cheking Swordsman', () => {
    const hero = new Character('Pit', 'Swordsman');
    const result = {
        name: 'Pit',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    }

    expect(hero).toMatchObject(result);
});