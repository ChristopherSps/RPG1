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
    case "Give up on repairing the broken robot":
      giveUp();
    break;
    case "Salvage robot parts to use from the broken robot":
      bomb();
    break;
    case "Blow up the bomb":
      bombExplosion();
    break;
    case "Wattson":
      Watt();
    break;
    case "Confirm Character Selection Wattson":
      WhatToDoWattson();
    break;
    case "Dress up the nessie":
      DressUp();
    break;
    case "Leave him in your hoodie":
      tripped();
    break;
    case "Leave the nessie":
      Leave();
    break;
    case "Rob the nessie":
      rob();
    break;
    case "Dance with the nessie":
      dance();
    break;
    case "Wraith":
      Wraith();
    break;
    case "Confirm Character Selection Wraith":
      notCared();
    break;
    case "Make a second portal and take it blindly":
      portal();
    break;
    case "Take the havoc":
      havoc();
    break;
    case "Loot the deathbox":
      deathBox();
    break;
    case "Crypto":
      Cryp();
    break;
    case "Confirm Character Selection Crypto":
      WhatToDoCrypto();
    break;
    case "Sleep":
      Sleep();
    break;
    case "Continue playing with Hack":
      Hack();
    break;
    case "Mourn for Hack":
      Mourn();
    break;
    case "Rampart":
      Ramp();
    break;
    case "Confirm Character Selection Rampart":
      sell();
    break;
    case "Throw the coin away":
      throww();
    break;
    case "Keep the coin":
      keep();
    break;
    case "Eat the coin":
      eat();
    break;
    }
}

function characterSelection(){
  addImage("Character.gif");
  var messages = ["You wake up in a room with 5 other legends but your surprised when you see a broken robot on the floor. As your eyes focus on the broken robot, you realize that the broken robot was badly damaged and mangled on the floor. You scream in terror waking the other 5 legends up as you all are confused on how you got there and where you are. You head towards the door to leave but it's locked. Your trapped inside the room with a unknown killer and a broken robot beside all of you. <br> Choose your legend to be!"];
  delayText(messages, 750);
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
  var messages = ["As you examine the broken robot up and down with your medical knowledge, you start to realize that he is badly damage and in critical state. You walk towards him to examine him a bit better but the other awoken legends start to question what to do with the body."];
  delayText(messages, 750);
  choices = ["Try to repair the broken robot","Give up on repairing the broken robot","Salvage robot parts to use from the broken robot"];
  answer = setOptions(choices);
}

function Murdered(){
  addImage("game over.gif");
  var messages = ["You start to fix the robot and repair him to the best of your ability until you come across his programming chip. On the chip it reads, DANGEROUS, but before you can do anything the robot boots up and turns out to be a murder robot. Before you can run away, you are murdered."];
  delayText(messages, 750);  
  choices = ["Start over"];
  answer = setOptions(choices);
}

function giveUp(){
  addImage("game over.gif");
  var messages = ["You give up on the robot not even bothering to take a look at how broken he is. You ignore the fact that he even exists in the room and now your fixated more on the actual room your locked inside. Then the intercom plays and it says,<br>You are stuck here forever!<br>You start to hyperventilate and slowly begin to pass out as you remember you are claustrophobic."];
  delayText(messages, 750);
  choices = ["Start over"];
  answer = setOptions(choices);
}

function bomb(){
  addImage("bomb.jfif");
  var messages = ["You salvage pieces from the broken robot and you have aqcuired enough pieces for a bomb. You start to remember that you are stuck inside this room and have come up with a plan. To blow up a hole in the wall."];
  delayText(messages, 750);  
  choices = ["Blow up the bomb","Start over"];
  answer = setOptions(choices);
}

function bombExplosion(){
  addImage("game over.gif");
  var messages = ["You plant the bomb next to the wall and set it off but then you quickly realize the radius of the explosion will kill everyone in that room. You quickly run to the bomb and try to turn it off but before you can even take step, it explodes killing everyone in the room."];
  delayText(messages, 750);  
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

function WhatToDoWattson(){
  addImage("nessie.jfif");
  var messages = ["As you wake up and notice the broken robot, you go up to the robot with little knowledge on what to do with the broken robot. You start touching random parts of the broken robot but your not doing anything useful to help fix the broken robot. You stand there as a cute little nessie pops out, wondering what to do with the cute little wandering nessie as it looks up at you."];
  delayText(messages, 750);  
  choices = ["Dress up the nessie","Leave the nessie","Rob the nessie","Dance with the nessie"];
  answer = setOptions(choices);
}

function DressUp(){
  addImage("wattsonNessie'.jfif");
  var messages = ["You pick up the nessie and dress it as a replica of yourself. The nessie giggles as he has been having so much fun with you and becomes overly attached to you. You try to put it back down but it growls and attaches to you, hiding in the hood of your sweater not wanting to leave. You keep trying to pull him out but he doesn't budge. Now you have a bigger problem on your hands."];
  delayText(messages, 750);  
  choices = ["Leave him in your hoodie"];
  answer = setOptions(choices);
}

function tripped(){
  addImage("walkNessie.gif");
  var messages = ["The nessie jumps out your hoodie furiously and you guys walk around in a bit of fustration. As you two walk around to think about what's next to do to get out of that hell hole your in, the room. The nessie, still holding a grudge, trips you and you instantly fall on your head, shattering your skull and dying."];
  delayText(messages, 750);  
  choices = ["Start over"];
  answer = setOptions(choices);
}

function Leave(){
  addImage("rampartNessie.jfif");
  var messages = ["You pay no mind to the nessie as the nessie is trying to grab your attention but you don't seem interested in caring for the nessie. The nessie grows a bit fustrated and angry as he doesn't like to be ignored. You turn your back and start to walk away until you hear a machine gun revving up. You look towards the nessie as you are horrified to see a laser pointed machine gun to your chest. He shoots the machine gun laughing like a maniac as bullets fill your body. You fall to the ground dead."];
  delayText(messages, 750);  
  choices = ["Start over"];
  answer = setOptions(choices);
}

function rob(){
  addImage("robbedNessie.gif");
  var messages = ["You look back at the nessie mischievously and think about robbing him. You grab him and put him in a choke hold trying to rob his pockets but then you touch something very sharp cutting your finger and dropping the nessie. The nessie gets up from the floor and takes out a knife prepared to defend himself. Scared, you try to run away but the nessie is a trained assassin and throws the knife at your head, instantly killing you. You drop to the floor dead."];
  delayText(messages, 750);  
  choices = ["Start over"];
  answer = setOptions(choices);
}

function dance(){
  addImage("danceNessie.gif");
  var messages = ["You start to throw back that booty, dancing with the nessie, living the dream. You two happily dance your lives away as you guys get old in the room never breaking out or seeing sunlight ever again. You guys live happily ever after together, dancing like celebrity popstars."];
  delayText(messages, 750);  
  choices = ["Start over"];
  answer = setOptions(choices);
}

function Wraith(){
  addImage("Wrai.png");
  var messages =["A versatile Legend, Wraith can reposition and flank enemies with her abilities. Wraith's tactical ability Into the Void allows her to reposition or take cover while being invincible for 4 seconds. Wraith's ultimate ability is Dimensional Rift. Dimensional Rift places an entrance and exit portal that allows her squad to be safely transported over long distances. Her passive ability Voices from the Void. Voices from the Void gives her and her teammates audible warnings about enemies aiming at them."];
  delayText(messages, 750);
  choices = ["Confirm Character Selection Wraith","Choose Different Character"];
  answer = setOptions(choices);
}

function notCared(){
  addImage("noEmotion.png");
  var messages = ["You see the broken robot on the floor but to be honest, you don't really care. You show no emotion to the robot but instead, you are more interested in breaking out of the room. You tried to phase into another dimension but there is nowhere you can go since it is just a room with four walls. You start to realize and remember that you have placed one portal somewhere you can't remember but it is dangerous to place the other portal. You also see in the corner of your eye a havoc on the floor and a deathbox in the corner of your eye. You start to pace in circles, thinking about what to do."];
  delayText(messages, 750);  
  choices = ["Make a second portal and take it blindly","Take the havoc","Loot the deathbox"];
  answer = setOptions(choices);
}

function portal(){
  addImage("portal.gif");
  var messages = ["You make a second portal and get ready to jump into the portal. You take a leap of faith but when you come out the other side, you start to free fall off a cliff. Looking back up, the portal was placed on the edge of a cliff and so when you took the leap of faith, you jumped right off the cliff to your death. You have died."];
  delayText(messages, 750); 
  choices = ["Start over"];
  answer = setOptions(choices);
}

function havoc(){
  addImage("havoc.jfif");
  var messages = ["You walk towards the havoc and grab it off the floor. Once you pick it up, it is glued to your hands with the gun malfunctioning. You try to smash the gun to pieces but nothing is working as you violently and helplessly shoot the gun around in the room. The bad part is that the bullets are ricocheting around the room. You try to duck but you can't while the gun is going beserk in your hand. The bullets pierce your body and you fall to the ground with holes up and down your body as you are dead."];
  delayText(messages, 750); 
  choices = ["Start over"];
  answer = setOptions(choices);
}

function deathBox(){
  addImage("death.jfif");
  var messages = ["You start to walk towards a deathbox in the corner of the room hoping that whoever was the last victim will have some loot for you to take. You open the lootbox and hear a click. Your heart drops when you realize that the deathbox was a trap. The moment you opened the lootbox, a grenade pin got pulled and exploded 5 seconds later with you not able to do anything. You have exploded to your death."];
  delayText(messages, 750);  
  choices = ["Start over"];
  answer = setOptions(choices);
}

function Cryp(){
  addImage("Crypt.png");
  var messages = ["A Recon Legend, Crypto takes to the skies with his Surveillance Drone named, hack, revealing enemies for Crypto and his squad using Neurolink. Crytpo has the ability to look through his hack and see his surroundings while controlling hack."];
  delayText(messages, 750);
  choices = ["Confirm Character Selection Crypto","Choose Different Character"];
  answer = setOptions(choices);
}

function WhatToDoCrypto(){
  addImage("cryptoAndHack.jfif");
  var messages = ["You sit in the room chilling as you can't really do much. You start playing with hack and having fun with him since you both can't go anywhere within the walls you are confined in."];
  delayText(messages, 750);
  choices = ["Sleep","Continue playing with Hack"];
  answer = setOptions(choices);
}

function Sleep(){
  addImage("sister.jfif");
  var messages = ["You start to doze off and sleep, hugging with Hack. You dream about the old days with your sister and wishing you can see her one last time. You smile as tears roll down your face as you sleep remembering all the good times you had with your sister. You start to wish you can stay in your dream forever as it warms your heart. You continue to dream never wanting to leave as you enjoy every moment you get to spend in your dream. You got a heartwarming ending!"];
  delayText(messages, 750);
  choices = ["Start over"];
  answer = setOptions(choices);
}

function Hack(){
  addImage("renewedCrypto.gif");
  var messages = ["You continue to play with Hack but something starts to go wrong. Hack starts to smoke and he explodes right in front of you injuring you really badly. As a last defense mechanism, Hack turns you half robotic so that you can live, giving up his own life for you. You are unconcious for a few minutes but as you wake up you start to examine yoruself surprised, but you quickly understand the situation. You start to wonder if you can fix Hack again."];
  delayText(messages, 750);
  choices = ["Mourn for Hack"];
  answer = setOptions(choices);
}

function Mourn(){
  addImage("sad.jfif");
  var messages = ["You sit there sad and praying over Hacks components hoping that wherever he is, he is happy. Wattson comes over and sits next to you to share the pain you feel as she is empathetic and understands what you are going through. You guys sit there, looking at Hacks components scattered across the room in silence. You got a sad ending!"];
  delayText(messages, 750);
  choices = ["Start over"];
  answer = setOptions(choices);
}

function Ramp(){
  addImage("Ramp.png");
  var messages = ["Rampart is a Defensive Legend that specializes in securing areas through firepower. Her tactical ability Amped Cover places a rectangular wall. The upper half of a wall blocks a certain amount of bullets taken from one direction, and enhances any bullets fired through from the other direction. Her passive ability Modded Loader increases reload speed and magazine size with LMGs and her ultimate. Her ultimate ability Mobile Minigun named, Sheila, allows her to use a minigun that she can either carry or place down."];
  delayText(messages, 750);
  choices = ["Confirm Character Selection Rampart","Choose Different Character"];
  answer = setOptions(choices);
}

function sell(){
  addImage("mrNessie.jfif");
  var messages = ["You start a selling company with a nessie that you saw in the corner of your eye. You agreed to split the money 50/50 and will be selling black market weapons once your out of the room. He gives you a token of appreciation to show the importance of your partnership by giving you a lucky coin. Your stunned as what to do with the coin."];
  delayText(messages, 750);
  choices = ["Throw the coin away","Keep the coin","Eat the coin"];
  answer = setOptions(choices);
}

function throww(){
  addImage("arcStar.webp");
  var messages = ["You throw the coin away in front of the nessies face and show him utter disrespect. He gets angry at the fact that you guys could've had a good buisness together. He takes an arc star and throws it at you, sticking you with the arc star and ultimately killing you with the explosion."];
  delayText(messages, 750);
  choices = ["Start over"];
  answer = setOptions(choices);
}

function keep(){
  addImage("apexCoins.jfif");
  var messages = ["You keep the coin and tuck it away in your back pocket. The nessie smiles warmly at you while you smile warmly back at him. You guys exchange handshakes as you both understand that your buisness will boom without fail. Nodding at each other as you both dream at the amount of money and dreams you will accomplish with the buisness laughing away. You have found a good ending!"];
  delayText(messages, 750);
  choices = ["Start over"];
  answer = setOptions(choices);
}

function eat(){
  addImage("NessieGotAKnife.png.png");
  var messages = ["You flip the coin in the air and gulp the coin down your mouth in front of the nessie. He is shocked, surprised while also angry that you ate away teh relationship token he gave you. He pulls out a knife and starts to step towards you. You step back in fear and he jumps on you, pinning you against the wall. He puts the knife up to your belly and slices, wanting the coin back as you lay on the floor dying. You have died."];
  delayText(messages, 750);
  choices = ["Start over"];
  answer = setOptions(choices);
}