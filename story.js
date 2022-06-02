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
      dressedSkip();
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
  story("You wake up in a room with 5 other legends but your surprised when you see a fallen legend on the floor. As your eyes focus on the fallen legend, you realize that it is your friend pathfinder is dead on the floor. You scream in terror waking the other 5 legends up as you all are confused on how you got there and where you are. You head towards the door to leave but it's locked. Your trapped inside the room with a unknown killer and a fallen legend beside all of you. <br> Choose your legend to be!");
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
  var messages = ["You get out of bed and get out of your pajamas…that's all.<br>You head towards the kitchen but stop when you feel a cool breeze. Hm could you be missing something?"];
  delayText(messages, 750);
  choices = ["Confirm Character Selection Horizon","Choose Different Character"];
  answer = setOptions(choices);
}

function Cryp(){
  addImage("Crypt.png");
  var messages = ['You skip breakfast and head towards your school bag, before putting it on you realize that youre a little lightheaded and freezing.', 
  'Your vision goes blurry. YOU PASS OUT!',
  'Ya know breakfast is the most important meal of the day, also next time you should get dressed'
 ];
  delayText(messages, 750);
  choices = ["Confirm Character Selection Crypto","Choose Different Character"];
  answer = setOptions(choices);
}

function Ramp(){
  addImage("Ramp.png");
  var messages = ['You go for a quick bowl of cereal after ignoring the breeze. As you are eating, you wonder if youve done your homework, but when you stand up you can barely move.',
  'Youre too cold.',
  'You pass out from almost freezing to death. Wow<br>What a move, maybe the breeze should’ve given you the clue.'
  ];
  delayText(messages, 750);
  choices = ["Confirm Character Selection Rampart","Choose Different Character"];
  answer = setOptions(choices);
}

function dressedSkip(){
  addImage("busStop.png");
  story("You believe you have no time for breakfast, so you head out early. The wind is blowing as you walk towards the bus stop. When you arrive there you stand and wait…<br>And wait…<br>And wait…<br>And wait… <br>You’ve been waiting for almost an hour now, Your stomach is screaming at you for food. It's painful. You go back home and miss school for the day, hm maybe you did have time to eat breakfast.");
  choices = ["Start over"];
  answer = setOptions(choices);
}

function dressedEat(){
  addImage("greenKitchen.png");
  story("You have plenty of time for breakfast! So you prepare yourself some home-made scramble eggs, buttered toast and a nice glass of your choice of juice. Your morning is going great!!<br>You finish your meal, but before heading out, you wonder if you ever did your homework…");
  choices = ["You didn't","You did"];
  answer = setOptions(choices);
}

function noHomework(){
  addImage("homeWork.png");
  var messages = [ 'You didn’t.. Oh well. You head to school anyways.', 
  'As you get there you remember that your homework was supposed to be the study guide for your up coming test!',
  "You still have to take the test ya know, and you do! Hours pass as you wait for your results, I hope it's no surprise that you.",
  'Failed. I mean what did you expect?'
  ];
  delayText(messages, 1000);
  choices = ["Start over"];
  answer = setOptions(choices);
}

function yesHomework(){
  addImage("homeWork.png");
  var messages = [ 'You did..great! You head to school and you’re all ready for your test, that homework study guide did come in handy last night.',
  'You take the test, it was a stressful three hours of testing, though hours pass as you wait for your results.',
  'I hope its no surprise that you.', 
  'Passed! I mean what did you expect?'
  ];
  delayText(messages, 1000);
  choices = ["You won!"];
  answer = setOptions(choices);
}

function youWon(){
  addImage("confetti.png");
  var messages = [ 'You won, you got all the right combinations that resulted in the end :)',
  'Are you missing some ending?', 
  'If so, play again!'
  ];
  delayText(messages, 1000);
  choices = ["Start over"];
  answer = setOptions(choices);
}
