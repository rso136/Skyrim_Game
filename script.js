var dragonborn = {
	hitpoints: 100,
	maxpoints: 100,
	exp: 0,
	level: 1,
	offense: 10,
	defense: 10,
	weapon: "Iron Sword",
	damage: "D4",
	coins: 20
}

var bandit = {
	name: "Bandit",
	hitpoints: 50,
	resetHit: 50,
	offense: 8,
	defense: 8,
	damage: "D4",
	expVal: 10
}

var draugr = {
	name: "Draugr",
	hitpoints: 70,
	resetHit: 70,
	offense: 10,
	defense: 7,
	damage: "D4",
	expVal: 15
}

var falmer = {
	name: "Falmer",
	hitpoints: 100,
	resetHit: 100,
	offense: 10,
	defense: 10,
	damage: "D4",
	expVal: 25
}

var thalmor = {
	name: "Thalmor",
	hitpoints: 140,
	resetHit: 140,
	offense: 10,
	defense: 12,
	damage: "D6",
	expVal: 30
}

var troll = {
	name: "Troll", 
	hitpoints: 170,
	resetHit: 170,
	offense: 15,
	defense: 5,
	damage: "D6",
	expVal: 40
}

var vampire = {
	name: "Vampire",
	hitpoints: 200,
	resetHit: 200,
	offense: 12,
	defense: 15,
	damage: "D8",
	expVal: 60
}

var dragonpriest = {
	name: "Dragonpriest",
	hitpoints: 250,
	resetHit: 250,
	offense: 15,
	defense: 15,
	damage: "D10",
	expVal: 100
}

var dragon = {
	name: "Dragon",
	hitpoints: 300,
	resetHit: 300,
	offense: 20,
	defense: 20,
	damage: "D12",
	expVal: 130
}

var harkon = {
	name: "Harkon",
	hitpoints: 275,
	resetHit: 275,
	offense: 25,
	defense: 25,
	damage: "D15",
	expVal: 180
}

var alduin = {
	name: "Alduin",
	hitpoints: 350,
	resetHit: 350,
	offense: 30,
	defense: 25,
	damage: "D20",
	expVal: 250
}

var allOps = {
	"bandit": bandit,
	"draugr": draugr, 
	"falmer": falmer,
	"thalmor": thalmor, 
	"troll": troll,
	"vampire": vampire,
	"dragonpriest": dragonpriest,
	"dragon": dragon,
	"harkon": harkon,
	"alduin": alduin
}

var opponent;
var heroAtt;
var level = false;

var missArr = ['Your opponent deftly dodges your attack.', 'Your slash is easily deflected by your opponent.', 'Your opponent stumbles backwards as he blocks your strike.', 'Your swing sails wide over the head of your opponent.', 'Your opponent manages to swipe your attack aside.'];
var hitArr = ['Your opponent winces as your manage to land a glancing blow.', 'Your blade cuts into your opponent, delivering a flesh wound.', 'Your opponent staggers under the force of your blow.', 'Your opponent grunts in pain as your deliver a wounding strike.', 'Your weapon smashes into your opponent, knocking him to the ground. He struggles to his feet, dazed.']

var oppMissArr = ["You swiftly parry your opponent's attack.", "You manage to block your opponent's strike.", "You leap back, barely evading your opponent's attack.", "You stagger back as you deflect your opponent's swing.", "You easily dodge your opponent's slash."];
var oppHitArr = ["You stumble under the force of a glancing blow.", "You grunt in pain as your opponent manages to cut through your armor.", "You crumple to your knees under the force of your opponents attack.", "You feel a fierce sting from your opponent's cut.", "You wince as a bloody warmth spreads under your armor from where you've been struck."];

$('#level').append(dragonborn.level);
$('#exp').append(dragonborn.exp);
$('#hitpoints').append(dragonborn.hitpoints);
$('#maxpoints').append(dragonborn.maxpoints);
$('#offense').append(dragonborn.offense);
$('#defense').append(dragonborn.defense);
$('#weapon').append(dragonborn.weapon);
$('#armor').append(dragonborn.armor);
$('#coins').append(dragonborn.coins);

var enemySelected = false;
var lv2 = false;
var lv3 = false;
var lv4 = false;
var lv5 = false;
var lv6 = false;
var lv7 = false;
var lv8 = false;

function coinsCheck() {
	var coins = Math.floor((Math.random() * 7) + 1);
	dragonborn.coins = dragonborn.coins + coins;
	$('#coins').text(dragonborn.coins);
	$('#battleUpdate').append(' You have found ' + coins + ' coins.');

}

function levelToggle() {

	$('#arenaReward').empty();
	$('#levelModal').modal('toggle');
	$('#levelUp').text(dragonborn.level);
	$('#hitUp').text(dragonborn.hitpoints);
	$('#maxUp').text(dragonborn.maxpoints);
	$('#offenseUp').text(dragonborn.offense);
	$('#defenseUp').text(dragonborn.defense);
}

function innToggle() {

	if (enemySelected === false) {	
		$('#innText').empty();
		$('#innModal').modal('toggle');
	}
}

function levelCheck() {

	if (dragonborn.exp >= 50 && lv2 === false) {
		dragonborn.level = 2;
		dragonborn.maxpoints = dragonborn.maxpoints + 20;
		dragonborn.hitpoints = dragonborn.maxpoints;
		dragonborn.offense = dragonborn.offense + 2;
		dragonborn.defense = dragonborn.defense + 2;
		dragonborn.weapon = "Steel Sword";
		dragonborn.damage = "D6";
		levelToggle();
		$('#level').text(dragonborn.level);	
		$('#hitpoints').text(dragonborn.hitpoints);
		$('#maxpoints').text(dragonborn.maxpoints);
		$('#offense').text(dragonborn.offense);
		$('#defense').text(dragonborn.defense);
		$('#weapon').text(dragonborn.weapon);
		$('#arenaReward').html("<h5>Your arena award: <b><i>" + dragonborn.weapon + "!</i></b></h5>");
		lv2 = true;
	}
	if (dragonborn.exp >= 100 && lv3 === false) {
		dragonborn.level = 3;
		dragonborn.maxpoints = dragonborn.maxpoints + 20;
		dragonborn.hitpoints = dragonborn.maxpoints;
		dragonborn.offense = dragonborn.offense + 2;
		dragonborn.defense = dragonborn.defense + 2;
		levelToggle();
		$('#level').text(dragonborn.level);	
		$('#hitpoints').text(dragonborn.hitpoints);
		$('#maxpoints').text(dragonborn.maxpoints);
		$('#offense').text(dragonborn.offense);
		$('#defense').text(dragonborn.defense);
		lv3 = true;
	}
	if (dragonborn.exp >= 200 && lv4 === false) {
		dragonborn.level = 4;
		dragonborn.maxpoints = dragonborn.maxpoints + 20;
		dragonborn.hitpoints = dragonborn.maxpoints;
		dragonborn.offense = dragonborn.offense + 2;
		dragonborn.defense = dragonborn.defense + 2;
		dragonborn.weapon = "Dwarven Axe";
		dragonborn.damage = "D8";
		levelToggle();
		$('#level').text(dragonborn.level);	
		$('#hitpoints').text(dragonborn.hitpoints);
		$('#maxpoints').text(dragonborn.maxpoints);
		$('#offense').text(dragonborn.offense);
		$('#defense').text(dragonborn.defense);
		$('#weapon').text(dragonborn.weapon);
		$('#arenaReward').html("<h5>Your arena award: <b><i>" + dragonborn.weapon + "!</i></b></h5>");
		lv4 = true;
	}
	if (dragonborn.exp >= 350 && lv5 === false) {
		dragonborn.level = 5;
		dragonborn.maxpoints = dragonborn.maxpoints + 20;
		dragonborn.hitpoints = dragonborn.maxpoints;
		dragonborn.offense = dragonborn.offense + 2;
		dragonborn.defense = dragonborn.defense + 2;
		levelToggle();		
		$('#level').text(dragonborn.level);	
		$('#hitpoints').text(dragonborn.hitpoints);
		$('#maxpoints').text(dragonborn.maxpoints);
		$('#offense').text(dragonborn.offense);
		$('#defense').text(dragonborn.defense);
		v5 = true;
	}
	if (dragonborn.exp >= 500 && lv6 === false) {
		dragonborn.level = 6;
		dragonborn.maxpoints = dragonborn.maxpoints + 20;
		dragonborn.hitpoints = dragonborn.maxpoints;
		dragonborn.offense = dragonborn.offense + 2;
		dragonborn.defense = dragonborn.defense + 2;
		dragonborn.weapon = "Elven Sword";
		dragonborn.damage = "D10";
		levelToggle();		
		$('#level').text(dragonborn.level);	
		$('#hitpoints').text(dragonborn.hitpoints);
		$('#maxpoints').text(dragonborn.maxpoints);
		$('#offense').text(dragonborn.offense);
		$('#defense').text(dragonborn.defense);
		$('#weapon').text(dragonborn.weapon);
		$('#arenaReward').html("<h5>Your arena award: <b><i>" + dragonborn.weapon + "!</i></b></h5>");
		lv6 = true;
	}
	if (dragonborn.exp >= 800 && lv7 === false) {
		dragonborn.level = 7;
		dragonborn.maxpoints = dragonborn.maxpoints + 20;
		dragonborn.hitpoints = dragonborn.maxpoints;
		dragonborn.offense = dragonborn.offense + 2;
		dragonborn.defense = dragonborn.defense + 2;
		levelToggle();		
		$('#level').text(dragonborn.level);	
		$('#hitpoints').text(dragonborn.hitpoints);
		$('#maxpoints').text(dragonborn.maxpoints);
		$('#offense').text(dragonborn.offense);
		$('#defense').text(dragonborn.defense);
		lv7 = true;
	}
	if (dragonborn.exp >= 1200 && lv8 === false) {
		dragonborn.level = 7;
		dragonborn.maxpoints = dragonborn.maxpoints + 20;
		dragonborn.hitpoints = dragonborn.maxpoints;
		dragonborn.offense = dragonborn.offense + 2;
		dragonborn.defense = dragonborn.defense + 2;
		dragonborn.weapon = "Ebony Blade";
		dragonborn.damage = "D12";
		levelToggle();		
		$('#level').text(dragonborn.level);	
		$('#hitpoints').text(dragonborn.hitpoints);
		$('#maxpoints').text(dragonborn.maxpoints);
		$('#offense').text(dragonborn.offense);
		$('#defense').text(dragonborn.defense);
		$('#weapon').text(dragonborn.weapon);
		$('#arenaReward').html("<h5>Your arena award: <b><i>" + dragonborn.weapon + "!</i></b></h5>");
		lv8 = true;
	}
}

function runCheck() {

	if (dragonborn.defense >= opponent.offense) {
			
			opponent.hitpoints = opponent.resetHit;

			if (dragonborn.exp > 0) {
				dragonborn.exp = dragonborn.exp - opponent.expVal;
				$('#exp').text(dragonborn.exp); 
			}
			$('#opponent').hide();
			enemySelected = false;
			$('#battleUpdate').text('You have successfully escaped your opponent though at the cost of your reputation.');
	}
	else {
		var oppPursue = Math.floor((Math.random() * opponent.offense) + 1) * 2;
		var heroFlee = Math.floor((Math.random() * dragonborn.defense) + 1);

		if (heroFlee > oppPursue) {

			opponent.hitpoints = opponent.resetHit;
			
			if (dragonborn.exp > 0) {
				dragonborn.exp = dragonborn.exp - opponent.expVal;
				$('#exp').text(dragonborn.exp); 
			}
			$('#opponent').hide();
			enemySelected = false;
			$('#battleUpdate').text('You have successfully escaped your opponent though at the cost of your reputation.');	
		}
		else {
			oppAttRatings();
			dragonborn.hitpoints = dragonborn.hitpoints - enemyAtt;
			$('#hitpoints').text(dragonborn.hitpoints);	
			
			$('#battleUpdate2').text('You have failed to escape from your opponent!');
		    $('#battleUpdate').text("You've been hit for " + enemyAtt + " damage!");

		}
	} 
}

function oppAttRatings() {
		//enemy damage ratings
	if (opponent.damage == "D4") {
		enemyAtt = Math.floor((Math.random() * 4) + 1);
	}
	if (opponent.damage == "D6") {
		enemyAtt = Math.floor((Math.random() * 6) + 1);
	}
	if (opponent.damage == "D8") {
		enemyAtt = Math.floor((Math.random() * 8) + 1);
	}
	if (opponent.damage == "D10") {
		enemyAtt = Math.floor((Math.random() * 10) + 1);
	}
	if (opponent.damage == "D12") {
		enemyAtt = Math.floor((Math.random() * 12) + 1);
	}
	if (opponent.damage == "D15") {
		enemyAtt = Math.floor((Math.random() * 15) + 1);
	}
	if (opponent.damage == "D20") {
		enemyAtt = Math.floor((Math.random() * 20) + 1);
	}	
}

function startGame() {

	$('.enemy').on('click', function() {

		if (enemySelected === false) {

			$('#opponentDiv').empty()

			$(this).clone().appendTo('#opponentDiv');
			var id = $(this).attr('id');
			opponent = allOps[id];
			console.log(id);
			console.log(opponent);
			$('#opName').text(opponent.name);
			$('#opHitpoints').text(opponent.hitpoints);
			$('#opponent').show();
			$('#introText').html("<p><b>Dragonborn challenges " + opponent.name + "!</b></p>");
			enemySelected = true;
		}
	});

	$('.inn').on('click', function() {
		innToggle();
	});

	$('#rentYes').on('click', function() {

		if (dragonborn.coins < 10) {
			$('#innText').html("<h5><b>Innkeeper:</b> <i>I'm sorry. It looks like you don't have enough coins to rent a room.</i></h5>");
		}
		else {
			dragonborn.coins = dragonborn.coins - 10;
			dragonborn.hitpoints = dragonborn.maxpoints;
			$('#coins').text(dragonborn.coins);
			$('#hitpoints').text(dragonborn.hitpoints);
			$('#innText').html("<h5>Innkeeper: <i>Thank you very much! Hope you'll feel well-rested!</i></h5>");
		}
	});

	$('#rentNo').on('click', function() {
		$('#innModal').modal('toggle');
	});

	$('#runBtn').on('click', function() {

		if (enemySelected === true) {
			runCheck();
		}
	})

	$('#fightBtn').on('click', function() {

		//hero damage ratings
		//iron sword
		if (dragonborn.damage == "D4") {
			heroAtt = Math.floor((Math.random() * 4) + 1);
		}
		//steel sword
		if (dragonborn.damage == "D6") {
			heroAtt = Math.floor((Math.random() * 6) + 1);
		}

		//dwarven axe
		if (dragonborn.damage == "D8") {
			heroAtt = Math.floor((Math.random() * 8) + 1);
		}

		//elven sword
		if (dragonborn.damage == "D10") {
			heroAtt = Math.floor((Math.random() * 10) + 1);
		}

		//ebony blade
		if (dragonborn.damage == "D12") {
			heroAtt = Math.floor((Math.random() * 12) + 1);
		}

		oppAttRatings();

		//hero offense & defense rolls 
		heroOff = Math.floor((Math.random() * dragonborn.offense) + 1);
		heroDef = Math.floor((Math.random() * dragonborn.defense) + 1);

		//enemy offense & defense rolls
		enemyOff = Math.floor((Math.random() * opponent.offense) + 1); 
	    enemyDef = Math.floor((Math.random() * opponent.defense) + 1); 

		if (enemySelected === true) {

			if (enemyOff > heroDef) {

				dragonborn.hitpoints = dragonborn.hitpoints - enemyAtt;
				$('#hitpoints').text(dragonborn.hitpoints);	
				oppHitDesc = oppHitArr[Math.floor(Math.random() * oppHitArr.length)];
				$('#battleUpdate2').text(oppHitDesc + " You've been hit for " + enemyAtt + " damage!");	
			}
			else {
				oppMissDesc = oppMissArr[Math.floor(Math.random() * oppMissArr.length)];
				$('#battleUpdate2').text(oppMissDesc);

			}

			if (heroOff > enemyDef) {
				opponent.hitpoints = opponent.hitpoints - heroAtt;
				$('#opHitpoints').text(opponent.hitpoints);
				hitDesc = hitArr[Math.floor(Math.random() * hitArr.length)];
				$('#battleUpdate').text(hitDesc + " You've hit your opponent for " + heroAtt + " damage!");
				
				if (opponent.hitpoints <= 0) {
					$('#battleUpdate').append(" " + opponent.name + ' has been defeated! You gain ' + opponent.expVal + ' experience points.')
					coinsCheck();
					$("#opponentDiv, #opName, #opHitpoints").empty();
					dragonborn.exp = dragonborn.exp + opponent.expVal;
					$('#exp').text(dragonborn.exp);
					opponent.hitpoints = opponent.resetHit;
					$('#opponent').hide();
					enemySelected = false;
					levelCheck();
				}
			}	
			else {
				missDesc = missArr[Math.floor(Math.random() * missArr.length)];
				$('#battleUpdate').text(missDesc);
			}

		
		}
	})
}

startGame();

