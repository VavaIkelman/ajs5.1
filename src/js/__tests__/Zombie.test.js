import Character from '../Zombie';

test('Cheking Zombie', () => {
    const hero = new Character('Pit', 'Zombie');
    const result = {
        name: 'Pit',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    }

    expect(hero).toMatchObject(result);
});