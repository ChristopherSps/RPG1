/* Uses Case Statements */

// variables
// var name = "";
var scene1=characterSelection;

function checkAnswers(answer) {
  switch(answer) {
    case "Start over":
      characterSelection();
    break;
    case "Choose Different Character":
      characterSelection();
    break;
    case "LifeLine":
      Life();
    break;
    case "Confirm Character Selection LifeLine":
      WhatToDoLifeLine();
    break;
    case "Try to repair the broken robot":
      Murdered();
    break;
    case "Wattson":
      Watt();
    break;
    case "Confirm Character Selection Wattson":
      dressedSkip();
    break;
    case "Wraith":
      Wraith();
    break;
    case "Confirm Character Selection Wraith":
      dressedSkip();
    break;
    case "Horizon":
      Horiz();
    break;
    case "Confirm Character Selection Horizon":
      dressedSkip();
    break;
    case "Crypto":
      Cryp();
    break;
    case "Confirm Character Selection Crypto":
      dressedSkip();
    break;
    case "Rampart":
      Ramp();
    break;
    case "Confirm Character Selection Rampart":
      dressedSkip();
    break;
    case "Eat Breakfast":
      dressedEat();
    break;
    case "You didn't":
      noHomework();
    break;
    case "You did":
      yesHomework();
    break;
    case "You won!":
      youWon();
    break;
    }
}

function characterSelection(){
  addImage("Character.gif");
  story("You wake up in a room with 5 other legends but your surprised when you see a broken robot on the floor. As your eyes focus on the broken robot, you realize that the broken robot was badly damaged and mangled on the floor. You scream in terror waking the other 5 legends up as you all are confused on how you got there and where you are. You head towards the door to leave but it's locked. Your trapped inside the room with a unknown killer and a broken robot beside all of you. <br> Choose your legend to be!");
  choices = ["LifeLine","Wattson","Wraith","Horizon","Crypto","Rampart"];
  answer = setOptions(choices);
}

function Life(){
  addImage("Life.png");
  var messages = ["A Legend with healing abilities, Lifeline is a Legend best for keeping her team alive and up in a firefight. Her tactical ability is D.O.C, a Heal Drone. Heal Drone places an immobile drone that heals all players nearby over time. Her passive ability, Combat Revive causes her reviving of teammates to be automated by her drone."];
  delayText(messages, 750);
  choices = ["Confirm Character Selection LifeLine","Choose Different Character"];
  answer = setOptions(choices);
}

function WhatToDoLifeLine(){
  addImage("broken robot.jfif");
  var messages = ("As you examine the broken robot up and down with your medical knowledge, you start to realize that he is badly damage and in critical state. You walk towards him to examine him a bit better but the other awoken legends start to question what to do with the body.");
  choices = ["Try to repair the broken robot","Give up on repairing the broken robot","Salvage robot parts to use from the broken robot"];
  answer = setOptions(choices);
}

function Murdered(){
  addImage("");
  story("You start to fix the robot and repair him to the best of your ability until you come across his programming chip. On the chip it reads, DANGEROUS, but before you can do anything the robot boots up and turns out to be a murder robot. Before you can run away, you are murdered.");
  choices = ["Start over"];
  answer = setOptions(choices);
}

function Watt(){
  addImage("Watts.png");
  var messages = ["Wattson is an electricity-based Defensive Legend. Her tactical ability, Perimeter Security places fence poles with connecting beams of electricity that damage and stun enemies that pass through the beams. Her passive ability, Spark of Genius causes her health to slowly regenerate over time and causes an Ultimate Accelerant to fully recharge her ultimate ability. Her ultimate ability Interception Pylon destroys all grenades, missiles, and other throwables when they get near."];
  delayText(messages, 750);
  choices = ["Confirm Character Selection Wattson","Choose Different Character"];
  answer = setOptions(choices);
}

function Wraith(){
  addImage("Wrai.png");
  var messages =["A versatile Legend, Wraith can reposition and flank enemies with her abilities. Wraith's tactical ability Into the Void allows her to reposition or take cover while being invincible for 4 seconds. Wraith's ultimate ability is Dimensional Rift. Dimensional Rift places an entrance and exit portal that allows her squad to be safely transported over long distances. Her passive ability Voices from the Void. Voices from the Void gives her and her teammates audible warnings about enemies aiming at them."];
  delayText(messages, 750);
  choices = ["Confirm Character Selection Wraith","Choose Different Character"];
  answer = setOptions(choices);
}

function Horiz(){
  addImage("Hori.png");
  var messages = ["Horizon is an Offensive Legend with gravity-based abilities. Her tactical ability Gravity Lift, when deployed on the ground, lifts any player that steps into it into the air. Her passive ability Spacewalk increases her in-air movement speed and decreases her movement delay after falling from a height."];
  delayText(messages, 750);
  choices = ["Confirm Character Selection Horizon","Choose Different Character"];
  answer = setOptions(choices);
}

function Cryp(){
  addImage("Crypt.png");
  var messages = ["A Recon Legend, Crypto takes to the skies with his Surveillance Drone named, hack, revealing enemies for Crypto and his squad using Neurolink. Crytpo has the ability to look through his hack and see his surroundings while controlling hack."];
  delayText(messages, 750);
  choices = ["Confirm Character Selection Crypto","Choose Different Character"];
  answer = setOptions(choices);
}

function Ramp(){
  addImage("Ramp.png");
  var messages = ["Rampart is a Defensive Legend that specializes in securing areas through firepower. Her tactical ability Amped Cover places a rectangular wall. The upper half of a wall blocks a certain amount of bullets taken from one direction, and enhances any bullets fired through from the other direction. Her passive ability Modded Loader increases reload speed and magazine size with LMGs and her ultimate. Her ultimate ability Mobile Minigun named, Sheila, allows her to use a minigun that she can either carry or place down."];
  delayText(messages, 750);
  choices = ["Confirm Character Selection Rampart","Choose Different Character"];
  answer = setOptions(choices);
}