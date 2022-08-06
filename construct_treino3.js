class Novice {
    constructor(pname, hp, mp, job, exp, level) {
        this.pname = pname
        this.hp = hp
        this.mp = mp
        this.job = job
        this.exp = exp 
        this.level = level
    }

    firstAid(rest) {
        console.log('Você usou primeiros socorros!')
        return this.hp += rest 
    }

    playDead() {
       console.log('Você está se figindo de morto!')
    }

};

class Highnovice extends Novice {
    constructor(pname, hp, mp, job, exp, level) {
        super(pname, hp, mp, job, exp, level)
        this.pname = pname
        this.hp += 300
        this.mp += 250
        this.job += 250 
        this.exp += 700
        this.level += 500

    }
}

class Swordsman extends Novice {
    constructor(pname, hp, mp, job, exp, level) {
        super(pname, hp, mp, job, exp, level)
        this.pname = pname
        this.hp += 300
        this.mp += 250
        this.job += 250 
        this.exp += 700
        this.level += 500
    }
}



let Player = new Highnovice('Kazbonfim', 300, 150, 1, 0, 1);
console.log(Player)

let Player2 = new Swordsman('Kazbonfim', 300, 150, 1, 0, 1)
console.log(Player2)