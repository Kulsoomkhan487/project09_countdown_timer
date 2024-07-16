import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";

async function main() {
  const res = await inquirer.prompt({
    name: "UserInput",
    type: "number",
    message: "Please Enter The Amount of Seconds",
    validate: (input) => {
    if(isNaN(input)){
      return "Please Enter a Valid Number"
    }else if( input > 60){
      return "Second must be in 60"
    }else{
      return true
    }
    }
  });

  let input: number = res.UserInput;

  function startTime(val: number) {
    const initialTime = new Date();
    initialTime.setSeconds(initialTime.getSeconds() + val);
    const intervalTime = new Date(initialTime);
    const timer = setInterval(() => {
      const currentTime = new Date();
      const timeDiff = differenceInSeconds(intervalTime, currentTime);
      if (timeDiff <= 0) {
        console.log("Timer has Expired");
        clearInterval(timer);
      } else {
        const minute = Math.floor(timeDiff / 60);
        const second = timeDiff % 60;
        console.log(`${minute.toString().padStart(2, "0")}: ${second.toString().padStart(2, "0")}`);
      }
    }, 1000);
  }

  startTime(input);
}

main();



