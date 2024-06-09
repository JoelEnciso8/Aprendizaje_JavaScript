// Web Speech API SpeechRecognition
/*The Web Speech API enables you to incorporate voice data into web apps. The Web Speech API has two parts: SpeechSynthesis (Text-to-Speech), and SpeechRecognition (Asynchronous Speech Recognition.) */

// Keep in mind SpeechRecognition is not available as default in the web Browser mozilla

const micBtn = document.querySelector('#microfono') // index.HTML
const salida = document.querySelector('#salida')// index.HTML

micBtn.addEventListener('click',executeSpeechAPI);

function executeSpeechAPI() {
    const SpeechRecognition =window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.start();

    recognition.onstart= function (){
        salida.classList.add('mostrar');
        salida.textContent = ' Escuchando...'
    };

    recognition.onspeechend = function(){
        salida.textContent = ' Se dejo de grabar...'
        recognition.stop();
    }
    recognition.onresult = function(e){
        const {confidence,transcript} = e.results[0][0];
        const speech = document.createElement('p');
        const security = document.createElement('p');
        speech.innerHTML = `Grabado: ${transcript} `;
        security.innerHTML = `Trusted: ${parseInt(confidence *100)}% `;
        salida.appendChild(speech)
        salida.appendChild(security)
    }
}