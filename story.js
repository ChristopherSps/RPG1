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
  var messages = ["You snooze your alarm and let it ring before it gives up. You fall back asleep, Hm it seems though you should’ve been awake.","You slept in and missed school."];
  delayText(messages, 750);
  choices = ["Confirm Character Selection LifeLine","Choose Different Character"];
  answer = setOptions(choices);
}

function Watt(){
  addImage("Watts.png");
  var messages = ["You forced yourself up as if it was a chore. You turn off your annoying alarm, flick on your lamp, and rub your eyes before seeing clear. But now what?"];
  delayText(messages, 750);
  choices = ["Confirm Character Selection Wattson","Choose Different Character"];
  answer = setOptions(choices);
}

function Wraith(){
  addImage("Wrai.png");
  var messages =["You get out of bed and get out of your pajamas and put on your outfit for today. You look at yourself in the mirror, you look fabulous!<br>You head towards the kitchen but stop when you see the time. Hm, is it too late for breakfast?"];
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
