import { Modal } from "./modal.js";
import { AlertError } from "./alert-error.js";
import { notANumber, calculateIMC } from "./utils.js";

//  variaveis - variables
const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

// fechar a janela de erro ao digitar no campo
inputWeight.oninput = () => AlertError.close();
inputHeight.oninput = () => AlertError.close();

form.onsubmit = function (event) {
    event.preventDefault();

    const weight = inputWeight.value;
    const height = inputHeight.value;

    const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height);

    if (weightOrHeightIsNotANumber) {
        AlertError.open();
        return;
    }

    AlertError.close();

    const result = calculateIMC(weight, height);
    displayResultMessage(result);
};

function displayResultMessage(result) {
    const message = `O seu IMC é de ${result}`;

    Modal.message.innerText = message;
    Modal.open();
}
