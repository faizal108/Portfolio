let voice = speechSynthesis.getVoices();
console.log(voice);
function textToAudio() {
    let msg = document.getElementById("text-to-speech").value;
    let speech = new SpeechSynthesisUtterance();
    let voices = speechSynthesis.getVoices();
    console.log(voices);

    speech.lang = "en-US";
    speech.text = msg;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = .8;
    speech.voice = voices[10];
    
    window.speechSynthesis.speak(speech);
}
