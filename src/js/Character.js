export default class Character {
    constructor (name, type) {
        if (name.length < 2 || name.length > 10) {
            throw new Error('Имя должно быть не менее 2 символов и не более 10 символов');
        } else {
            this.name = name;
        }

        const types = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
        if (types.indexOf(type) === -1){
            throw new Error('Нет такого персонажа');
        } else {
            this.type = type;
        }
        this.health = 100;
        this.level = 1;

    }

    levelUp() {
        if (this.health === 0) throw new Error('Нельзя повысить уровень умершего)');
        this.level += 1;
        this.attack += (this.attack * 20) / 100;
        this.defence += (this.defence * 20) / 100;
        this.health = 100; 
        
    }

    damage(points){
        if (this.health >= 0){
            this.health -= points * (1 - this.defence / 100);
        }
    }
}