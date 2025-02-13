function secretNumber() {
    // Загадка первого компьютера
    const target = Math.floor(Math.random() * 100) + 1;

    let min = 1;
    let max = 100;
    let guess = null;

    // Цикл угадывания второго компьютера
    while (guess !== target) {
        guess = Math.floor((min + max) / 2);

        console.log(`Компьютер 2: пробую чило ${guess}`);

        if (guess === target) {
            break;
        } else if (guess > target) {
            max = guess - 1;
            console.log(`Компьютер 1: Меньше`);
        } else {
            min = guess + 1;
            console.log(`Компьютер 1: Больше`);
        }
    }

    console.log(`Угадал! Число было ${target}`);
}

secretNumber();