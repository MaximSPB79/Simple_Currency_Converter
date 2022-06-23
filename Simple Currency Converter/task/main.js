let input = require('sync-input');

let currencies = greetings();

action();

function greetings() {
    let currencies = {
        USD: 1,
        JPY: 113.5,
        EUR: 0.89,
        RUB: 74.36,
        GBP: 0.75
    };
    console.log("Welcome to Currency Converter!");

    for (let currency in currencies) {
        console.log(`1 USD equals  ${currencies[currency]} ${currency}`)
    }
    return currencies;
}

function action() {
    console.log(`What do you want to do?
1-Convert currencies 2-Exit program`);
    let actionInput = input();
    switch (actionInput) {
        case "1":
            dataProcessing();
            break;
        case "2":
            console.log("Have a nice day!");
            break;
        default :
            console.log("Unknown input")
            action();
    }
}

function dataProcessing() {
    let initialCurrency;
    let targetCurrency;
    let amount;
    while (true) {
        console.log(`What do you want to convert?`);
        initialCurrency = input("From: ").toUpperCase();
        if (!(initialCurrency in currencies)) {
            console.log("Unknown currency")
        } else {
            break;
        }
    }
    while (true) {
        targetCurrency = input("To: ").toUpperCase();
        if (!(targetCurrency in currencies)) {
            console.log("Unknown currency")
        } else {
            break;
        }
    }
    while (true) {
        amount = input("Amount: ");
        if (isNaN(amount)) {
            console.log("The amount has to be a number")
        } else if (amount < 1) {
            console.log("The amount can not be less than 1")
        } else {
            break;
        }
    }
    console.log(`Result: ${amount} ${initialCurrency} equals ${(currencies[targetCurrency] / currencies[initialCurrency] * amount).toFixed(4)} ${targetCurrency}`);
}




