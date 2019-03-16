var katzDeliLine = [];

function takeANumber(current, newperson) {
  
  current.push(newperson);
  personnumber = current.indexOf(newperson) + 1;
  
  return "Welcome, " + newperson + ". You are number " + personnumber + " in line.";
  
}

function nowServing(current) {
  
  if(current.length === 0) {
    return "There is nobody waiting to be served!" } else {
      return "Currently serving " + current[0] + " ."
    }
  var newline = current.shift(); 
  return current;
}
    

function currentLine(current) {
  
}