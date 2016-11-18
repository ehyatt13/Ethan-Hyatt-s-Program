phase = 'explore';

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
        }
        ;
        if (this.level % 5 === 0) {
            this.special += 5;
        }
        ;
    };
    this.isAlive = function () {
        if (this.hp > 0) {
            this.isAlive = true;
        }
        else {
            this.isAlive = false;
        }
        ;
    };
    this.attack = function () {
        if (player1.isAlive = true) {
            if (player1.speed >= currentenemy.speed) {
                var damage = Math.floor(this.strength / currentenemy.defense);
                console.log("You did " + damage + " damage!");
                currentenemy.hp -= damage;
                updateenemyhealth(currentenemy.hp / currentenemy.maxHp * 500);
                var enemyCommand = Math.random();
                if (enemyCommand <= .5) {
                    currentenemy.attack();
                }
                else {
                    currentenemy.spell();
                }
                ;
                if (player1.isAlive = false) {
                    console.log("You have been defeated!");
                }
                ;
            }
            else {
                var enemyCommand = Math.random();
                if (enemyCommand <= .5) {
                    currentenemy.attack();
                }
                else {
                    currentenemy.spell();
                }
                ;
                if (player1.isAlive = false) {
                    console.log("You have been defeated!");
                }
                else {
                    var damage = Math.floor(this.strength / currentenemy.defense);
                    console.log("You did " + damage + " damage!");
                    currentenemy.hp -= damage;
                    updateenemyhealth(currentenemy.hp / currentenemy.maxHp * 500)
                }
            }
            if (currentenemy.hp <= 0) {
                console.log("You won the battle! You gained " + currentenemy.exp + " EXP!");
                this.exp += currentenemy.exp;
                this.levelup();
                bug = false;
                $('#bug').remove();
                currentenemy.hp = currentenemy.maxHp;
                updateenemyhealth(currentenemy.hp / currentenemy.maxHp * 500);
                phase = 'explore';
                updatescreen();
            }
            ;
        }
        else {
            console.log("You cannot attack beyond the grave...");
        }
        ;
    };
    this.spell = function () {
        if (player1.isAlive = true) {
            if (player1.speed >= currentenemy.speed) {
                var damage = Math.floor(this.magic / currentenemy.magicdefense);
                console.log("You did " + damage + " damage!");
                currentenemy.hp -= damage;
                updateenemyhealth(currentenemy.hp / currentenemy.maxHp * 500);
                var enemyCommand = Math.random();
                if (enemyCommand <= .5) {
                    currentenemy.attack();
                }
                else {
                    currentenemy.spell();
                }
                ;
                if (player1.isAlive = false) {
                    console.log("You have been defeated!");
                }
                ;
            }
            else {
                var enemyCommand = Math.random()
                if (enemyCommand <= .5) {
                    currentenemy.attack();
                }
                else {
                    currentenemy.spell();
                }
                ;
                if (player1.isAlive = false) {
                    console.log("You have been defeated!");
                }
                else {
                    var damage = Math.floor(this.magic / currentenemy.magicdefense);
                    console.log("You did " + damage + " damage!");
                    currentenemy.hp -= damage;
                    updateenemyhealth(currentenemy.hp / currentenemy.maxHp * 500)
                }
                ;
            }
            if (currentenemy.hp <= 0) {
                console.log("You won the battle! You gained " + currentenemy.exp + " EXP!");
                this.exp += currentenemy.exp;
                this.levelup();
                bug = false;
                $('#bug').remove();
                currentenemy.hp = currentenemy.maxHp;
                updateenemyhealth(currentenemy.hp / currentenemy.maxHp * 500);
                phase = 'explore';
                updatescreen();
            }
            ;
        }
        else {
            console.log("You cannot attack beyond the grave...");
        }
        ;
    };
    this.inventory = function () {
        inBattle: new Array(player1.potion(5))
        keyItems: new Array()
    };
    this.run = function () {
        if (Math.random() > .45) {
            console.log("You managed to escape!");
            phase = 'explore';
            updatescreen();
            skipturns = 2;
        }
        else {
            console.log("You can't escape!");
            var enemyCommand = Math.random();
            if (enemyCommand <= .5) {
                currentenemy.attack();
            }
            else {
                currentenemy.spell();
            }
        }
    };
    this.potion = function () {
        if (player1.hp === player1.maxHp) {
            console.log("You already have full health. You shouldn't waste it.")
        }
        else {
            if (held > 0) {
                held -= 1;
                heal = player1.maxHp - player1.hp;
                if (heal > 10) {
                    console.log("You gained 10 HP!");
                }
                else {
                    console.log("You gained " + heal + " HP !")
                }
                player1.hp += 10;
                if (player1.hp > player1.maxHp) {
                    player1.hp = player1.maxHp;
                }
                $('#potion').html("Potion (" + held + ")");
                updatehealth(player1.hp / player1.maxHp * 500);
                var enemyCommand = Math.random();
                if (enemyCommand <= .5) {
                    currentenemy.attack();
                }
                else {
                    currentenemy.spell();
                }
            }
            else {
                console.log("You are out of potions!")
            }
        }
    }
}

held = 5;

updatescreen = function() {
    if (phase === 'explore') {
        $('#battle').hide();
        $('.map').show();
        $('#console').empty();
        updatehealth(player1.hp / player1.maxHp * 500);
    }
    ;

    if (phase === 'fighting') {
        $('.map').hide();
        updatehealth(player1.hp / player1.maxHp * 500);
        updateenemyhealth(currentenemy.hp / currentenemy.maxHp * 500);
        $('#battle').show();
    }
    ;
};

function melee() {
    this.strength = 6;
    this.magic = 2;
    this.defense = 3;
    this.magicdefense = 1;
}
melee.prototype = new fighter();
function mage() {
    this.strength = 2;
    this.magic = 6;
    this.defense = 1;
    this.magicdefense = 3;
}
mage.prototype = new fighter();
function tank() {
    this.strength = 2;
    this.magic = 2;
    this.defense = 4;
    this.magicdefense = 4;
}
tank.prototype = new fighter();
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
        updatehealth(player1.hp / player1.maxHp * 500)
    };
    this.spell = function () {
        var hit = Math.floor(this.magic / player1.magicdefense);
        console.log("You took " + hit + " damage!");
        player1.hp -= hit;
        updatehealth(player1.hp / player1.maxHp * 500)
    }
}

var bug = new enemy(10, 10, 2, 2, 2, 2, 1, 5, 5, 1);

//var rogue = new enemy(20, 20, 3, 2, 2, 1, 10, 5, 10, 3);

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

var choice = getUrlParameter("Choice");

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
        console.log("The undecisive will fail against even the weakest of enemies...")
}

var currentenemy = bug;

/*if (bug.hp <= 0) {
 var currentenemy = rogue;
 updateenemyhealth(currentenemy.hp / currentenemy.maxHp * 200);
 };*/

function updatehealth(health) {
    $('#health').animate({
        width: health
    }, 'slow');
    $('#health').html("HP: " + player1.hp + "/" + player1.maxHp);
    if (player1.hp / player1.maxHp <= 0.5) {
        $('#health').backgroundColor = 'yellow';
    }
    else if (player1.hp / player1.maxHp <= 0.3) {
        $('#health').backgroundColor = 'red';
    }
}

function updateenemyhealth(enemyhealth) {
    $('#enemyhealth').animate({
        width: enemyhealth
    }, 'slow');
    $('#enemyhealth').html("Enemy HP: " + currentenemy.hp + "/" + currentenemy.maxHp)
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

