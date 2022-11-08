const btnCheck = document.getElementById("checkPalindrom");

btnCheck.addEventListener("click", function () {
    const inputEl = document.querySelector("[name='palindromInput']");
    const inputValue = inputEl.value;
    let lettersByOne = inputValue.split("");
    lettersByOne = lettersByOne.reverse();
    lettersByOne = lettersByOne.join("");
    const messageEl = document.querySelector(".text-danger");
    if (inputValue === "") {
        alert("Inserisci una parola")
    }
    else if (inputValue === lettersByOne) {
        messageEl.innerHTML = `La parola ${inputValue} è palindroma`;
    } else {
        messageEl.innerHTML = `La parola ${inputValue} NON è palindroma`
    }
})

const playBtn = document.getElementById("playBtn");





function randomNumberGenerator() {
    let randomNumber = Math.floor(Math.random() * 5 + 1);
    return parseInt(randomNumber);
}

function sumNum(userNumberInput, randomNumber) {
    let sum = userNumberInput + randomNumber;
    return parseInt(sum);
}

function numberCheck(userNumber) {
    if (userNumber <= 5 && userNumber >= 1) {
        return true;
    }
    else {
        alert("Il numero inserito non è valido!")
        return false;
    }
}


playBtn.addEventListener("click", function () {
    const predictionEl = document.querySelector("[name='OddOrEven']");
    const userNumberEl = document.querySelector("[name='userNumber']");
    const prediction = predictionEl.value;
    const userNumber = parseInt(userNumberEl.value);
    randomNumberGenerator();

    let randomNumber = randomNumberGenerator();

    console.log(randomNumber);
    let validation = numberCheck(userNumber);

    console.log(userNumber);



    if (validation === true) {
        let result = sumNum(userNumber, randomNumber);
        const resultEl = document.querySelector(".result");
        console.log(result);
        if (result % 2 === 0 && prediction.value === "pari" || result % 2 != 0 && prediction.value === "dispari") {
            resultEl.innerHTML = `Il numero generato dal PC è ${randomNumber}. Complimenti hai vinto !`
            console.log("Hai Vinto!");

        } else {
            resultEl.innerHTML = `Il numero generato dal PC è ${randomNumber}. Hai perso !`
            console.log("Hai perso!");
        }
    } else {
        console.log("Codice non eseguito");
    }




})








