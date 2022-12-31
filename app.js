function talk() {
    var know = {
        "hi":"hello sir how can i help you?",
        "are you a Robot": "yes i'am",
        "who made you?" : "the boss: vp,yogi,surya,veks",
        "which languages can you speak" : "i speak eng and made of java language",
        "do you like people" : " yeah, they made me!",
        "Do you get smarter" : "the more you ask, the more i get smarter",
        "what is your name" : "they did't name me :)",
        "who are you": "Hello, AICTE doubts clearing bot",
        "how are you": "Good :)",
        "can u help me with login": "Sure, follow the steps for login",
        "can u help me with payment":
            "Sure, follow the steps for payment",
        ok: "Thank You So Much ",
        Bye: "Okay! Contact me anytime to get your doubts cleared..",
    };
    var user = document.getElementById("userBox").value;
    document.getElementById("chatLog").innerHTML = user + "<br>";
    if (user in know) {
        document.getElementById("chatLog").innerHTML = know[user] + "<br>";
    } else {
        document.getElementById("chatLog").innerHTML =
            "Sorry,I didn't understand the qn :( <br>";
    }
}

