console.log("=== CEP ===");

// ==== IIFE ===
(function () {

// === UI ===

const ui = {
    postalCode: document.querySelector("#cep")
};

// UI -> Output
console.log(ui);

// === ACTIONS ===

// 1 - gazer com que só aceite números
const onlyNumbers = function(e) {

    // THIS - capturar o que está sendo digitado
    // THIS.VALUE = string, então posso usar métodos da api de string
    // REGEX = pegar tudo o que não é número e substitui
    // MÁSCARA = acrescenta o traçinho do cep + vai até o 9º dígito 
    let v = this.value.replace(/[^0-9]+/g, "");
    this.value = v.replace(/(\d{5})(\d)/, "$1-$2").slice(0,9);
    
    // E.TARGET - capturar o que está sendo digitado
    // console.log(e.target.value); 
};

// 2 - verificar se o cep é aderente a um padrão
const postalCodeIsValid = function() {
    console.log("valida o cep");
};

// 3 - buscar dados no endereço
const getAddress = function() {
    console.log("busca o endereço");
};

// === INITIALIZE / BINDING EVENTS ===

// usando o eventListener
ui.postalCode.addEventListener("input", onlyNumbers); 
ui.postalCode.addEventListener("focusout", postalCodeIsValid);

// usando shortcut (igual acima)

/* 
-> evento "oninput": captura momento da digitação do usuário
ui.postalCode.oninput = onlyNumbers; 

-> evento "onblur": clica fora, perde o foco
ui.postalCode.onblur = postalCodeIsValid; 
*/

// ==== FIM ===

})();