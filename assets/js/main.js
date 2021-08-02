
let RandomNumber = Math.floor((Math.random() * 100) + 1);
console.log(RandomNumber);
    let CountTryies = 10; // количество  попыток
    let Text = "";

for (let i = 0; i < 10; i++) {

        function guess() {
                let Uservariant = +inputNumber.value; //берем с поля input введенное число пользователя
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
