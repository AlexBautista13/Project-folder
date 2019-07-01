// My JaVaScript project 
// Mean dinner experience
// Please class dont hate me after this LOL

const entrees = {
  dh: {
    name: " Dry Cured Iberian Ham",
    cost: 300.99
  },
  mc: {
    name: " Moose Cheese, mmmmm nasty",
    cost: 100.99
  },
  js: {
    name: " Japanese Wagyu Steaks, eww",
    cost: 119.99
  }
}
  
const sides = {
  chicken: {
    name: " Ayam Cemani Chicken, barf",
    cost: 99.99
  },
  truffles: {
    name: " White Truffles, will give you gas",
    cost: 99.99
  },
  saffron: {
    name: " Saffron, is nasty",
    cost: 99.99
  }
}
  
const welcome = () => {
  alert(`Welcome Bottega Nerds! Take a look at this crapy menu from Alex!`)
  alert(`
                                  Menu Entrees              
                  $${entrees.dh.cost}:${entrees.dh.name}
                  $${entrees.mc.cost}:${entrees.mc.name}
                  $${entrees.js.cost}:${entrees.js.name}
  
                                    Side Menu             
                  $${sides.chicken.cost}: ${sides.chicken.name}
                  $${sides.truffles.cost}: ${sides.truffles.name}
                  $${sides.saffron.cost}: ${sides.saffron.name}
    `);
}
  
let entree; 
let side1; 
let side2;
let total;
let entreePrice;
let side1Price; 
let side2Price; 
  
  
const order = () => {
  orderEntree();
  orderSides();
  confirmOrder();
}
  
const orderEntree = () => {
  entree = prompt(`Hey wake up! What the hell do you want as an Entree?
    (Dry Ham, Cheese, or Wagyu Steaks)
    $${entrees.dh.cost}:${entrees.dh.name}
    $${entrees.mc.cost}:${entrees.mc.name}
    $${entrees.js.cost}:${entrees.js.name}
  `).toUpperCase();

  if(entree == "DRY HAM") {
    let confirmEntree = prompt(`Nasty${entrees.dh.name} it will be too expensive for you $${entrees.dh.cost}. I have to swipe your card you look poor...Is that what you want?`).toString().toUpperCase();
    if(confirmEntree == "YES") {alert(`Terrible, Terrible, you make me sick!`);}
    else{orderEntree();}
  }

  else if(entree == "CHEESE") {
    let confirmEntree = prompt(`Nasty${entrees.mc.name} it will be too expensive for you $${entrees.mc.cost}. let me guess (yawn) thats what you want?`).toString().toUpperCase();
    if(confirmEntree == "YES") {alert(`Damn you're a pig, for the love god leave this place after you eat, yikes!`);}
    else{orderEntree();}
  }

  else if(entree == "WAGYU STEAKS") {
    let confirmEntree = prompt(`Nasty${entrees.js.name} This will leave a whole in your pocket $${entrees.js.cost}.  Weirdo, I hope this is what you want?`).toString().toUpperCase();
    if(confirmEntree == "YES") {  
      alert(`(The Japanese Wagyu Steaks will give you the runs, I'm glad you chose it)`);
      alert(`also what are you wearing?...`);
      alert(`Not you I'm asking your wife.`);
      alert(`Oh that's your mom I apologize`);
      alert(`Still giver her my number.`); 
    }
    else{orderEntree();}
  }

  else {
    alert(`Speak up use your man voice, say it again`)
    orderEntree();
  }
}
  
const orderSides = () => {
  orderSide1();
  orderSide2();
}
  
const orderSide1 = () => {
  side1 = prompt(`Hurry the hell up and pick a your nasty choice of?
  (chicken, truffles, or saffron)
    $${sides.chicken.cost}:${sides.chicken.name}
    $${sides.truffles.cost}:${sides.truffles.name}
    $${sides.saffron.cost}:${sides.saffron.name}
  `).toUpperCase();
  
  if(side1 == "CHICKEN") {
    let confirmSide1 = prompt(`Nasty${sides.chicken.name} look its my break, HURRY UP fyi it's pricey $${sides.chicken.cost}. is that it or what?`).toString().toUpperCase();
    if(confirmSide1 == "YES") {alert(`I hope you get a massive heart attack, you wont be missed!`);}
    else{orderSide1();}
  }
  else if(side1 == "TRUFFLES") {
    let confirmSide1 = prompt(`Nasty${sides.truffles.name} look its my break, HURRY UP fyi it's pricey $${sides.truffles.cost}. is that it or what?`).toString().toUpperCase();
    if(confirmSide1 == "YES") {alert(`ughhhh`); alert(`Really what do want, we know you're fat?`);orderSide1();}
    else{orderSide1();}
  }
  else if(side1 == "SAFFRON") {
    let confirmSide1 = prompt(`Nasty${sides.saffron.name} look its my break, HURRY UP fyi it's pricey $${sides.saffron.cost}. is that it or what?`).toString().toUpperCase();
    if(confirmSide1 == "YES") {alert(`Terrible choice no wonder your wife slipped me her number, or is that your daughter! `);}
    else{orderSide1();}
  }
  else {
    alert(`Speak up use your man voice, say it again.`)
    orderSide1();
  }
}
  
const orderSide2 = () => {
  side2 = prompt(`Look for some reason I'm giving you a TWO choices with spit, what the hell do you want?
  (chicken, truffles, or saffron)
  `).toUpperCase();

  if(side2 == "CHICKEN") {
    let confirmSide2 = prompt(`Nasty${sides.chicken.name} HURRY UP MAN IT'S MY BREAAAAAK! DAMNIT $${sides.chicken.cost}. tell me that's it?`).toString().toUpperCase();
    if(confirmSide2 == "YES") {alert(`Don't worry I will only spit in your food`);}
    else{orderSide2();}
  }

  else if(side2 == "TRUFFLES") {
    let confirmSide2 = prompt(`Nasty${sides.truffles.name} HURRY UP MAN IT'S MY BREAAAAAK! DAMNIT $${sides.truffles.cost}. tell me that's it?`).toString().toUpperCase();
    if(confirmSide2 == "YES") {alert(`want to know something?`); alert(`You have a face only a mother could love, BARF.`);}
    else{orderSide2();}
  }
  else if(side2 == "SAFFRON") {
    let confirmSide2 = prompt(`Nasty${sides.saffron.name} HURRY UP MAN IT'S MY BREAAAAAK! DAMNIT $${sides.saffron.cost}. tell me that's it?`).toString().toUpperCase();
    if(confirmSide2 =="YES") {alert(`I get a strong sense of smell coming from your armpits, Eww ;)`);}
    else{orderSide2();}
  }
  else {
    alert(`Speak up use your man voice, say it again.`)
    orderSide2();
  }
}
  
const confirmOrder = () => {
  let orderConfirm = prompt(`Finally I dont have to see your face after this, now this is your order ${entree} your awful main dish, as well as ${side1} ehhh also ${side2}  are your two sides, of a heartattack special, is that fine??`).toString().toUpperCase();
    if(orderConfirm =="YES") {
    alert(`I want to scream for joy, Now the Ugly cook can deal with you! ;)`);
  }
  else if(orderConfirm =="NO"){changeOrder();}
  else {
    alert(`Dude, you make me sick, say it again.`)
    confirmOrder();
  }
}
  
const changeOrder = () => {
  let wrongOrder = prompt(`let me guess you made a mistake,idiot?`).toString().toUpperCase();
  if(wrongOrder =="ENTREE") {orderEntree();confirmOrder();}
  else if(wrongOrder =="SIDES"){orderSides();confirmOrder();}
  else {
    alert(`Dude, you make me sick, say it again.`)
    changeOrder();
  }
}
  
checkout = () => {
  
  if(entree == "DRY HAM") {
    entreePrice = entrees.dh.cost;
  }
  else if(entree == "Cheese") {
    entreePrice = entrees.mc.cost;
  }
  else if(entree == "WAGYU STEAKS") {
    entreePrice = entrees.js.cost;
  }
  
  if(side1 == "CHICKEN") {
    side1Price = sides.chicken.cost;
  }
  else if(side1 == "TRUFFLES") {
    side1Price = sides.truffles.cost;
    }
  else if(side1 == "SAFFRON") {
    side1Price = sides.saffron.cost;
  }
  
  if(side2 == "CHICKEN") {
    side2Price = sides.chicken.cost;
  }
  else if(side2 == "TRUFFLES") {
    side2Price = sides.truffles.cost;
  }
  else if(side2 == "SAFFRON") {
    side2Price = sides.saffron.cost;
  }
  total = parseFloat(entreePrice + side1Price + side2Price).toFixed(2);
  alert(`Man hahaha your total $${total}. I hope you break a leg and have a pretty bad day, I really do wish that for you!`)
}
dinner = () =>{
  welcome();
  order();
  checkout();
}

dinner();
console.log(`This idiot got the ${entree}, also ${side1}, and the nasty ${side2}`);