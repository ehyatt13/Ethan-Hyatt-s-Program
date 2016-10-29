function fighter() {
    this.speed = 3;
    this.exp = 0;
    this.nextLevel = 5;
    this.hp = 10;
    this.maxHp = 10;
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
            this.maxHp += Math.ceil(Math.random() * 5);
            console.log("Congratulations you reached Level " + this.level + "!");
        };
        if (this.level % 5 === 0) {
            this.special += 5;
        };
    };
    this.isAlive = function () {
        if (this.hp > 0) {
            this.isAlive = true;
        }
        else {
            this.isAlive = false;
        };
    };
    this.attack = function () {
        if (player1.isAlive = true) {
            if (player1.speed >= currentenemy.speed) {
                var damage = Math.floor(this.strength / currentenemy.defense);
                console.log("You did " + damage + " damage!");
                currentenemy.hp -= damage;
                updateenemyhealth(currentenemy.hp / currentenemy.maxHp * 200)
                var enemyCommand = Math.random()
                if (enemyCommand <= .5) {
                    currentenemy.attack();
                }
                else {
                    currentenemy.spell();
                };
                if (player1.isAlive = false) {
                    console.log("You have been defeated!");
                };
            }
            else {
                var enemyCommand = Math.random()
                if (enemyCommand <= .5) {
                    currentenemy.attack();
                }
                else {
                    currentenemy.spell();
                };
                if (player1.isAlive = false) {
                    console.log("You have been defeated!");
                }
                else {
                    var damage = Math.floor(this.strength / currentenemy.defense);
                    console.log("You did " + damage + " damage!");
                    currentenemy.hp -= damage;
                    updateenemyhealth(currentenemy.hp / currentenemy.maxHp * 200)
                }
            }
            if (currentenemy.hp <= 0) {
                console.log("You won the battle! You gained " + currentenemy.exp + " EXP!");
                this.exp += currentenemy.exp;
                this.levelup()
                battle = false;
            };
        }
        else {
            console.log("You cannot attack beyond the grave...");
        };
    };
    this.spell = function () {
        if (player1.isAlive = true) {
            if (player1.speed >= currentenemy.speed) {
                var damage = Math.floor(this.magic / currentenemy.magicdefense);
                console.log("You did " + damage + " damage!");
                currentenemy.hp -= damage;
                updateenemyhealth(currentenemy.hp / currentenemy.maxHp * 200)
                var enemyCommand = Math.random()
                if (enemyCommand <= .5) {
                    currentenemy.attack();
                }
                else {
                    currentenemy.spell();
                };
                if (player1.isAlive = false) {
                    console.log("You have been defeated!");
                };
            }
            else {
                var enemyCommand = Math.random()
                if (enemyCommand <= .5) {
                    currentenemy.attack();
                }
                else {
                    currentenemy.spell();
                };
                if (player1.isAlive = false) {
                    console.log("You have been defeated!");
                }
                else {
                    var damage = Math.floor(this.magic / currentenemy.magicdefense);
                    console.log("You did " + damage + " damage!");
                    currentenemy.hp -= damage;
                    updateenemyhealth(currentenemy.hp / currentenemy.maxHp * 200)
                };
            }
            if (currentenemy.hp <= 0) {
                console.log("You won the battle! You gained " + currentenemy.exp + " EXP!");
                this.exp += currentenemy.exp;
                this.levelup()
                battle = false;
            };
        }
        else {
            console.log("You cannot attack beyond the grave...");
        };
    };
    this.inventory = function (){
        inBattle: new Array(player1.potion(5))
        keyItems: new Array() }
    this.run = function () {
    if (Math.random() > .45) {
        console.log("You managed to escape!")
        battle = false;
    }
    else {
        console.log("You can't escape!")
        var enemyCommand = Math.random()
        if (enemyCommand <= .5) {
            currentenemy.attack();
        }
        else {
            currentenemy.spell();
        };
    }
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
function enemy(hp, maxHp, strength, magic, defense, magicdefense, speed, special, exp, level) {
    this.hp = hp;
    this.maxHp = maxHp
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
        updatehealth(player1.hp / player1.maxHp * 200)
    };
    this.spell = function () {
        var hit = Math.floor(this.magic / player1.magicdefense);
        console.log("You took " + hit + " damage!");
        player1.hp -= hit;
        updatehealth(player1.hp / player1.maxHp * 200)
    }
};

var bug = new enemy(10, 10, 2, 4, 2, 2, 1, 5, 5, 1)

//var rogue = new enemy(20, 20, 3, 2, 2, 1, 10, 5, 10, 3)

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
        console.log("The undecisive will fail against even the weakest of enemies.")
}

var battle = true

var currentenemy = bug

/*if (bug.hp <= 0) {
    var currentenemy = rogue;
    updateenemyhealth(currentenemy.hp / currentenemy.maxHp * 200);
};*/

/*while (battle) {
    if (player1.speed > currentenemy.speed) {
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
            currentenemy.attack();
        }
        else {
            currentenemy.spell();
        };
    }
    else {
        enemyCommand = Math.random()
        if (enemyCommand <= .5) {
            currentenemy.attack();
        }
        else {
            currentenemy.spell();
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

function updatehealth(health) {
    $('#health').animate({
        width: health
    }, 'slow')
};
function updateenemyhealth(enemyhealth) {
    $('#enemyhealth').animate({
        width: enemyhealth
    }, 'slow')
};
if (player1.hp / player1.maxHp <= 0.5) {
    document.getElementById(health).background-color === 'yellow';
}
else if (player1.hp / player1.maxHp <= 0.3) {
    document.getElementById(health).background-color === 'red';
};

/*fighter.inventory.inBattle[0] = function (amount) {
    if (amount > 0) {
        amount -= 1;
        var using = true;
        while (using = true) {
            fighter.hp += 20;
            using = false;
        };
    }
    else {
        console.log("You do not have any of this item!")
    };
};*/

