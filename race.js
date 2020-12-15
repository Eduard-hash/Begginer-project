let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
const age = 18;
if(age >18 && registeredEarly === true ){
raceNumber += 1000;
}
if(age > 18 && registeredEarly === true ) {
  console.log(`${raceNumber},You will race at 9:30 am`);
}
else if(age > 18 && !registeredEarly === true){
  console.log(`${raceNumber}, you will race at 11:00 am`);
}
else if( age < 18){
  console.log(`${raceNumber}, you will run at 12:30 pm`);
}
else {
  console.log('See registration desk');
}
