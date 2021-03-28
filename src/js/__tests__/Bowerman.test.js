import Character from '../Bowerman';

test('Cheking Bowerman', () => {
    const hero = new Character('Pit', 'Bowerman');
    const result = {
        name: 'Pit',
        type: 'Bowerman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    }

    expect(hero).toMatchObject(result);
});