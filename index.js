var katzDeliLine = [];

function takeANumber(current, newperson) {
  
  current.push(newperson);
  personnumber = current.indexOf(newperson) + 1;
  
  return "Welcome, " + newperson + ". You are number " + personnumber + " in line.";
  
}

function nowServing(current) {
  
  if(current.length === 0) {
    console.log("There is nobody waiting to be served!") } else {
      console.log("Currently serving " + current[0] + ".");
    }

  current.shift(); 
  return current;
}
    

function currentLine(current) {
  
  if (current.lenth===0) {
    console.log("The line is currently empty.")
  } else {
    console.log("The line is currently:" +
    for(n=0; n<current.length(); n++) {
    
}