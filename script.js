function textToSpeech() {
    const textInput = document.getElementById('text-input').value;

    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(textInput);
        speechSynthesis.speak(utterance);
    } else {
        alert('Your browser does not support text-to-speech functionality.');
    }
}
