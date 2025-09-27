function tellFortune() {
    let name = document.getElementById("userName").value.trim();
    let age = parseInt(document.getElementById("userAge").value.trim(), 10);
    let resultBox = document.getElementById("fortuneAnswers");

    if (!name || isNaN(age)) {
        resultBox.innertText = "Please enter a valid name and age!";
        return;
    }

    let fortunes = [];

    //Name Fortunes
    if (name.length > 7) fortunes.push("You will find lasting love.");
    else if (name.length < 5) fortunes.push("Great opportunities are near.");
    else fortunes.push("A rare chance awaits you.");

    if (name[0].toLowerCase() === 'l') fortunes.push("Abundance is coming.");
    if (name.toLowerCase().includes('e')) fortunes.push("Kindness surrounds you.");


    //Age Fortunes
    if (age < 18) fortunes.push("Imagination is your power.");
    else if (age <= 20) fortunes.push("Follow your dreams.");
    else if (age <= 40) fortunes.push("Hard work brings success.");
    else if (age <= 50) fortunes.push("Wisdom inspires others.");
    else fortunes.push("Your legacy shines brightly.");

    resultBox.innerText = `${name}, Your Fortune Is:\n\n` + fortunes.join("\n");
}