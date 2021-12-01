const setTime = process.argv.slice(2); 

const Alarm = function(setTime) {
  for (const time of setTime) { 
    if (time === undefined || time < 0 || isNaN(time)) { 
      continue;
    }
    setTimeout(() => {  
      process.stdout.write('\x07');
    },time * 1000);
  }
};
Alarm(setTime);
