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

    if (name[0].toLowerCase() === 'l') fortunes.push("Abundance and prosperity will flow to you.");

    if (name.toLowerCase().includes('e')) fortunes.push("Love and kindness will surround you in the days ahead.");

     resultBox.innerText = `${name}, Your Fortune Is:\n\n` + fortunes.join("\n");
}