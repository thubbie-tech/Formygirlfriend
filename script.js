let yesSize = 18;
let noSize = 18;
let noClickCount = 0;

const messages = [
    "Are you sure? ",
    "Think again... ",
    "Please don't say no ",
    "I'm gonna cry ",
    "Okay, now you're just playing with my feelings ",
    "What if I ask you really really nice? ",
    "Pretty please? ",
    "With a chocolate and a bouquet?",
    "What if I add boba? ",
    "Gifts? ",
    "Pleaseee ",
    "But :( ",
    "I am going to die... ",
    "Yup, I'm dead ",
    "Okay, now you're talking with Lulu’s ghost ",
    "Please, babe ",
    ":((( ",
    "Pretty, pretty please ",
    "No is no longer an option "
];

function makeYesBigger() {
    noClickCount++;
    yesSize += 5;  // Make Yes bigger
    noSize -= 2;   // Make No smaller

    if (noSize < 10) noSize = 10; // Prevents No from getting too small

    document.getElementById("yes-btn").style.fontSize = yesSize + "px";
    document.getElementById("no-btn").style.fontSize = noSize + "px";

    if (noClickCount < messages.length) {
        document.getElementById("no-btn").innerText = messages[noClickCount];
    } else {
        document.getElementById("no-btn").innerText = "No more No! Say YES!";
    }
}

function sayYes() {
    document.getElementById("message").innerText = "Yay! I knew you'd say Yes!";
    document.getElementById("buttons").style.display = "none";  // Hide buttons
}
