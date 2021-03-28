import Character from '../Magician';
test ('create Magician', () => {
    const hero = new Character('Bob', 'Magician');
    const result = {
        name: 'Bob',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    }

    expect(hero).toMatchObject(result);
})