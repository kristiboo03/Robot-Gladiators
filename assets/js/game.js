var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
  window.alert("Welcome to Robot Gladiators!");
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
};

// Game States
// "WIN" - player robot has defeated all enemy-robots
//    *Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - player robot's health is zero or less

// You can also log multiple values at once like this

 //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable

  // Log a resulting message to the console so we know that it worked.
  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
  enemyHealth = enemyHealth - playerAttack;

  // Log a resulting message to the console so we know that it worked.
  console.log(
    playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
  );

// check enemy's health
if (enemyHealth <= 0) {
  window.alert(playerName + " has died!");
} 

else {
  window.alert(playerName + " still has " + playerHealth + " health left.");
}

// check player's health
if (playerHealth <=0) {
  window.alert(playerName + " has died!");
}

else {
  window.alert(playerName + " still has " + " health left.");
}

// IF PlAYER CHOSES TO FIGHT, THEN FIGHT 
if (promptFight === "fight" || promptFight === "FIGHT") {
  enemyHealth = enemyHealth - playerAttack;
  console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + "health remaining."
  );

  // check enemy's heath
  if (enemyHealth <= 0) {
    window.alert(enemyName + "has died!");
  } else {
    window.alert(enemyHealth + " still has " + enemyHealth + " health left.");
  }
    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    //  check player's health 
    if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
  }
  //  if player choses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
  // confirm player wants to skip
  var confirmSkip = window.confirm("Are you sure you'd like to quit?");

  // if yes (true), leave fight
  if (confirmSkip) {
    window.alert(playerName + "has decided to skip this fight. Goodbye!");
    // subtract money from playerMoney for skipping
  playerMoney = playerMoney - 2;
  }
}
 for(var i = 0; i < enemyNames.length; i++) {
   fight(enemyNames[i]);
 }