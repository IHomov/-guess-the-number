
let RandomNumber = Math.floor((Math.random() * 100) + 1);
console.log(RandomNumber);
    const max = 10;
    
    let CountTryies = 10; // будем высчитывать 10 - счетчик
    let countGuess = 0; 
    let Text = "";

for (let i = 0; i < 10; i++) {
            countGuess = CountTryies;
    
            function guess() {
                    let Uservariant = +inputNumber.value;
                    if (Uservariant < RandomNumber) {
                        Text = "меньше моего числа.";
                        CountTryies--;
                    }
                    else if (Uservariant === RandomNumber) {
                        Text = "Поздравляю, вы угадали!";
                        

                    }
                    else {
                        Text = " больше моего числа.";
                        CountTryies--;
                    }
                                        
                    resultPlace.innerHTML = (`${Uservariant} ${Text}`);
                    numberOfattempts.innerHTML = (`${CountTryies}`);
                }
        
    }
