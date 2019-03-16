function takeANumber(current, newperson) {
  var personnumber;
  current.push(newperson);
  personnumber = current.indexOf(newperson) + 1;

  return "Welcome, " + newperson + ". You are number " + personnumber + " in line.";
}

function nowServing(current) {
  var oldline = current.slice();
  current.shift();
  
  if(oldline.length === 0) {
    return "There is nobody waiting to be served!" } else {
    return "Currently serving " + oldline[0] + ".";
    }
}
    

function currentLine(current) {
  var numberedline = [];
  
  if (current.lenth === 0) {
    return "The line is currently empty." } else {
    
    for(var n = 0; n < current.length; n++) { 
      numberedline[n] = (n+1) + ". " + current[n];
    }
    return "The line is currently: " + numberedline.join(", ");
}
}