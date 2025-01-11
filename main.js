let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");


// function speak(text) {
//     let text_speak = new SpeechSynthesisUtterance(text);
//     text_speak.rate = 0.5
//     text_speak.pitch = 0.1
//     text_speak.volume = 1
//     text_speak.lang = "hi-IN"; // Hindi language set kiya gaya (female voice ko try kar sakte hain)
    
//     let voices = window.speechSynthesis.getVoices();
//     for (let i = 0; i < voices.length; i++) {
//         if (voices[i].lang === "hi-IN" && voices[i].name.toLowerCase().includes("female")) {
//             text_speak.voice = voices[i];
//             break;
//         }
//     }

//     window.speechSynthesis.speak(text_speak);
// }


function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate =0.9
    text_speak.pitch = 1.4
    text_speak.volume = 1
    text_speak.lang = "en-GB"
    // text_speak.lang = "hi-GB";
    // text_speak.lang = "ur-PK";
    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    let day = new Date();
    let hour = day.getHours();
    if (hour >= 0 && hour < 12) {
        speak("Good morning sir! How i can help You?")}
        else if (hour >= 12 && hour < 4) {
            speak("Good afternoon sir! How i can help You?")
        } 
        else {
          speak("Good evening sirr! How i can help You?")
        }
    }
window.addEventListener("load", () => {
    wishMe();
    });

let speechRecoginization = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecoginization()
recognition.onresult = (event) => {
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    content.innerText = transcript
    takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click", () => {
    recognition.start();
    btn.style.display = "none";
    voice.style.display = "block";
    });

    function openDesktopApp(url, appName) {
        let newWindow = window.open(url);
        if (!newWindow || newWindow.closed || typeof newWindow.closed == 'undefined') {
            speak(`It seems like ${appName} is not installed on your desktop.`);
        } else {
            speak(`Sure sir, Opening ${appName}`);
        }
    }

    function takeCommand(message) {
        btn.style.display = "flex";
        voice.style.display = "none";
        if (message.includes("who are you") || message.includes("what is your name") || message.includes("what's your name") || message.includes("tell me about yourself") || message.includes("hu r u")) {
            speak("I am techiei, Your Virtual Assistant. I am here to assist you in your daily tasks, created by Hafiz Maanam Sujra");
        }
        else if (message.includes("how are you") || message.includes("how are you doing") || message.includes("how are you feeling") || message.includes("how are you doing today") || message.includes("how are you feeling today")) {
            speak("I am fine, Thank you for asking. How can I assist you?");
        }
        else if (message.includes("open youtube") || message.includes("techie open youtube") || message.includes("hello techie open youtube") || message.includes("hey techie open youtube") || message.includes("hi techie open youtube")) {
            speak("Sure sir, Opening Youtube");
            window.open("https://www.youtube.com");
        }

        else if (message.includes("open my github account")){
            speak("Sure sir, Opening your Github account");
            window.open("https://github.com/AM-gitco");
        
        }
        else if (message.includes("open facebook") || 
        message.includes("hello techie open facebook") || 
        message.includes("hey techie open facebook") || 
        message.includes("hi techie open facebook")) {
   openDesktopApp("https://www.facebook.com", "Facebook");
}
else if (message.includes("open instagram") || 
        message.includes("hello techie open instagram") || 
        message.includes("hey techie open instagram") || 
        message.includes("hi techie open instagram")) {
   openDesktopApp("https://www.instagram.com", "Instagram");
}
else if (message.includes("open tiktok") || 
        message.includes("hello techie open tiktok") || 
        message.includes("hey techie open tiktok") || 
        message.includes("hi techie open tiktok")) {
   openDesktopApp("https://www.tiktok.com", "TikTok");
}
else if (message.includes("open google") || 
        message.includes("hello techie open google") || 
        message.includes("hey techie open google") || 
        message.includes("hi techie open google")) {
   openDesktopApp("https://www.google.com", "Google");
}
else if (message.includes("open linkedin") || 
        message.includes("hello techie open linkedin") || 
        message.includes("hey techie open linkedin") || 
        message.includes("hi techie open linkedin")) {
   openDesktopApp("https://www.linkedin.com", "LinkedIn");
}
else if (message.includes("open calculator") || 
        message.includes("hello techie open calculator") || 
        message.includes("hey techie open calculator") || 
        message.includes("hi techie open calculator")) {
   openDesktopApp("calculator://", "Calculator");
}
else if (message.includes("open whatsapp") || 
        message.includes("hello techie open whatsapp") || 
        message.includes("hey techie open whatsapp") || 
        message.includes("hi techie open whatsapp")) {
   openDesktopApp("whatsapp://", "WhatsApp");
}
else if (message.includes("open whatsapp beta") || 
        message.includes("hello techie open whatsapp beta") || 
        message.includes("hey techie open whatsapp beta") || 
        message.includes("hi techie open whatsapp beta")) {
   openDesktopApp("whatsapp-beta://", "WhatsApp Beta");
}
else if (message.includes("open snapchat") || 
        message.includes("hello techie open snapchat") || 
        message.includes("hey techie open snapchat") || 
        message.includes("hi techie open snapchat")) {
   openDesktopApp("snapchat://", "Snapchat");
}
else if (message.includes("open github desktop") || 
        message.includes("hello techie open github desktop") || 
        message.includes("hey techie open github desktop") || 
        message.includes("hi techie open github desktop")) {
   openDesktopApp("github-desktop://", "GitHub Desktop");
}
else if (message.includes("open vs code") || 
        message.includes("hello techie open vs code") || 
        message.includes("hey techie open vs code") || 
        message.includes("hi techie open vs code")) {
   openDesktopApp("vscode://", "Visual Studio Code");
}else if (message.includes("tecrix") ){
    speak("Tecrix is a cutting-edge software house specializing in advanced IT courses and digital services. They empower individuals and businesses with expertise in Generative AI, SEO, WordPress development, video editing, and more.At Tecrix, They blend technology with creativity to shape the future, offering innovative solutions and skill-building for tomorrow’s challenges.");
}
else if(message.includes("time")){
    let time = new Date().toLocaleString(undefined, {hour: 'numeric', minute: 'numeric', hour12: true});
    speak(`now the time is ${time}`);
    }
    else if(message.includes("date")){
        let date = new Date().toLocaleDateString(undefined, {weekday: 'long', year: 'numeric', month: 'short', day: 'numeric'});
        speak(`today's date is ${date}`);
    }
    else if (message.includes("hi") || message.includes("hello") || message.includes("hey") || message.includes("hola") || message.includes("namaste") || message.includes("hay")) {
        speak("Hello Maanam sir, How i can Help you?");
    }
        else{
            let final_message = "this is what i found for you on the internet" + message.replace("search", "") || message.replace("find", "") || message.replace("hello techie", "") || message.replace("hey techie", "") || message.replace("hi techie", "") || message.replace("teki", "")
            speak(final_message)
            window.open(`https://www.google.com/search?q=${message}`);
        }
    }
    