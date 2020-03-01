const checkForSpam = function (message) {
    message = message.toLowerCase();
    let spam = false;
    if (message.includes("spam") || message.includes("sale")) {
        spam = true;
    }
    return spam;
};

console.log(checkForSpam("Latest technology news"));

console.log(checkForSpam("JavaScript weekly newsletter"));

console.log(checkForSpam("Get best sale offers now!"));

console.log(checkForSpam("[SPAM] How to earn fast money?"));