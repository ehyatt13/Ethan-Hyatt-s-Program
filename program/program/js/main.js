// Your code here!
function fighter() {
    this.speed = 3;
    this.exp = 0;
    this.nextLevel = 10;
    this.hp = 10;
    this.special = 10;
    this.level = 1;
    this.levelup = function () {
        if (this.exp >= this.nextLevel) {
            this.level += 1;
            this.exp -= this.nextLevel;
            this.nextLevel *= 1.5;
            this.strength += Math.ceil(Math.random() * 5);
            this.magic += Math.ceil(Math.random() * 5);
            this.defense += Math.ceil(Math.random() * 5);
            this.magicdefense += Math.ceil(Math.random() * 5);
            this.speed += Math.ceil(Math.random() * 5);
            this.hp += Math.ceil(Math.random() * 5);
        };
        if (this.level % 5 === 0) {
            this.special += 5;
        };
    };
    this.attack = function () {
        var damage = Math.floor(this.strength / bug.defense);
        console.log("You did " + damage + " damage!");
        bug.hp -= damage;
        if (bug.hp <= 0) {
            console.log("You won the battle! You gained " + bug.exp + " EXP!");
            this.exp += bug.exp;
            levelup()
            battle = false;
        };
    };
    this.spell = function () {
        var damage = Math.floor(this.magic / bug.magicdefense);
        console.log("You did " + damage + " damage!");
        bug.hp -= damage;
        if (bug.hp <= 0) {
            console.log("You won the battle! You gained " + bug.exp + " EXP!");
            this.exp += bug.exp;
            levelup()
            battle = false;
        };
    };
};

function melee() {
    this.strength = 6;
    this.magic = 2;
    this.defense = 3;
    this.magicdefense = 1;
}
melee.prototype = new fighter()
function mage() {
    this.strength = 2;
    this.magic = 6;
    this.defense = 1;
    this.magicdefense = 3;
}
mage.prototype = new fighter()

function tank() {
    this.strength = 2;
    this.magic = 2;
    this.defense = 4;
    this.magicdefense = 4;
}
tank.prototype = new fighter()
function enemy(hp, strength, magic, defense, magicdefense, speed, special, exp, level) {
    this.hp = hp;
    this.strength = strength;
    this.magic = magic;
    this.defense = defense;
    this.magicdefense = magicdefense;
    this.speed = speed;
    this.special = special;
    this.exp = exp;
    this.level = level;
    this.attack = function () {
        var hit = Math.floor(this.strength / player1.defense);
        console.log("You took " + hit + " damage!");
        player1.hp -= hit;
        if (player1.hp <= 0) {
            console.log("You have been defeated!");
            battle = false
        };
    };
    this.spell = function () {
        var hit = Math.floor(this.magic / player1.magicdefense);
        console.log("You took " + hit + " damage!");
        player1.hp -= hit;
        if (player1.hp <= 0) {
            console.log("You have been defeated!");
            battle = false;
        };
    }
};

var bug = new enemy(6, 3, 3, 1, 1.2, 1.5, 5, 5, 1)

var choice = prompt("What is most important to you and suits your playstyle: strength, magic, or defense?")

    switch (choice) {
        case "STRENGTH":
            var player1 = new melee();
            break;

        case "MAGIC":
            var player1 = new mage();
            break;

        case "DEFENSE":
            var player1 = new tank();
            break;

        default:
            console.log("I get you are nervious but take some time to calm yourself and spell it correctly.")
    }


var battle = true

/*while (battle) {
    if (player1.speed > bug.speed) {
        command = prompt("Select a command (attack or magic).")
        switch (command) {
            case "ATTACK":
                player1.attack()
                break;

            case "MAGIC":
                player1.spell()
                break;
        };
        enemyCommand = Math.random()
        if (enemyCommand <= .5) {
            bug.attack();
        }
        else {
            bug.spell();
        };
    }
    else {
        enemyCommand = Math.random()
        if (enemyCommand <= .5) {
            bug.attack();
        }
        else {
            bug.spell();
        };

        command = prompt("Select a command (attack or magic).")

        switch (command) {
            case "ATTACK":
                player1.attack();
                break;

            case "MAGIC":
                player1.spell();
                break;
        };
    };
};
*/