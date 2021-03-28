import Character from '../Daemon';

test ('create Daemon', () => {
    const hero = new Character('Dementer', 'Daemon');
    const result = {
        name: 'Dementer',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    }

    expect(hero).toMatchObject(result);
})