const playerBag = Array() // Where you gonna store your mons
const enemyBag = Array() // Same, but for the opponent 

// The Pokemon Template
class createPokemon {
    constructor(nome, type, attack1, attack2, level, exp, nextLevel ) {
        this.nome = nome
        this.type = type
        this.attack1 = attack1
        this.attack2 = attack2
        this.level = level
        this.exp = exp
        this.nextLevel = nextLevel
    }
    onCreateLevelUp(){
        if(this.level >= 1){
            console.log(`Your ${this.nome} leveled up!`)
            this.level += 1
            this.nextLevel = 255
            return 
        } else {
            // Does Nothing 
        }
    }
}

// Generating Pokemon
const Raichu = new createPokemon('Raichu', 'Electric', 'Thuderbold', 'Tackle', 1, 0, 150)
const Pikachu = new createPokemon('Pikachu', 'Electric', 'Thunderstroke', 'Quick Attack', 1, 0, 150)
const Greninja = new createPokemon('Greninja', 'Water', 'Hydropump', 'Rain Dance', 1, 0, 150)
const Primeape = new createPokemon('Primeape', 'Fighting', 'Focus Punch', 'Low Kick', 1, 0, 150)

// Adding to your bag, and bonus level-up
Raichu.onCreateLevelUp(playerBag.push(Raichu))
Pikachu.onCreateLevelUp(playerBag.push(Pikachu))
// Adding to enemy bag
enemyBag.push(Greninja)
enemyBag.push(Primeape)


console.table(playerBag) //VS.
console.table(enemyBag)

