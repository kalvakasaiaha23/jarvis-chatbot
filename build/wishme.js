function wishMe() {
    var day = new Date();
    var hour = day.getHours();

    if (hour >= 0 && hour < 12) {
        speak("Good Morning Boss...");
    } else if (hour >= 12 && hour < 17) {
        speak("Good Afternoon Master...");
    } else {
        speak("good evening boss...");
    }
}
    window.addEventListener('load', () => {
        speak("Initializing JARVIS...");
        wishMe();
    });













    function greetMe() {
        var day = new Date();
        var hour = day.getHours();
    
        if (hour >= 0 && hour < 12) {
            speak("Good Morning Boss...");
        } else if (hour >= 12 && hour < 17) {
            speak("Good Afternoon Master...");
        } else {
            speak("h...");
        }
    }
    window.addEventListener('load', () => {
        speak("power on...");
        greetMe();