console.log("=== CEP ===");

// ==== IIFE ===
(function () {

// === UI ===

const ui = {
    postalCode: document.querySelector("#cep"),
    street: document.querySelector("#logradouro"),
    neighborhood: document.querySelector("#bairro"),
    city: document.querySelector("#cidade"),
    state: document.querySelector("#estado")
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

     if (this.value.length === 9) {
         this.classList.remove("error");
         getAddress(this.value);
     } else {
         this.classList.add("error");
         this.focus();
     }

};

// 3 - buscar dados no endereço
// função assíncrona
const getAddress = async function(postalCode) {
    const endpoit = `https://viacep.com.br/ws/${postalCode}/json`;
    console.log(endpoit);

    const config = {
        method: "GET",
        headers: new Headers({
            "Content-type": "application/json"
        })
    };

    // PEGAR O ENDEREÇO, RESPOSTA -> POSITIVA, "CAMINHO FELIZ"
    // sem await -> .then().catch() -> modelo promise api
    // await -> faz isso com açúcar sintético -> já dá o objeto response
    // await = "eu aguardo o fetch acabar" e "quero obter essa resposta"
    // parses -> text(); json()... depende do contexto 

    // CENÁRIO DE ERRO, RETORNO INFELIZ
    // tratamento do cenário de erro
    // try -> o que estou tentando fazer
    // catch -> tratar cenário, ao falhar; recuperar caso tenha falhas
    try {
        const response = await fetch(endpoit, config);
        const address = await response.json();
        getAddressSuccess(address);
    } catch (error) {
        getAddressError(error);
    }
    };
    
    // resposta correta
    const getAddressSuccess = function(address) {
        const { logradouro, bairro, localidade, uf, cep } = address;
        ui.street.value = logradouro;
        ui.neighborhood.value = bairro;
        ui.city.value = localidade;
        ui.state.value = uf;
        ui.postalCode.value = cep;
        localStorage.setItem("cep", cep);

        // gravar no local storage
        localStorage.setItem("cep", cep);
    };

    // erro tratado
    const getAddressError = function(error) {
        const p = document.createElement("p");
        p.textContent = "Falha ao consultar o endereço!";
        const div = document.querySelector("fieldset > div");
        div.insertAdjacentElement("beforebegin", p);
    };

    // jeito difícil
    // .then() -> extrai o resultado; se amarra em qq promise que esteja rodando
    // console.log(
    //     response.text().then(function() {
    //         console.log(arguments[0]);
    //     })
    // );
    

// === INITIALIZE / BINDING EVENTS ===

// usando o eventListener
ui.postalCode.addEventListener("input", onlyNumbers); 
ui.postalCode.addEventListener("focusout", postalCodeIsValid);
getAddress(localStorage.getItem("cep"));

// usando shortcut (igual acima)

/* 
-> evento "oninput": captura momento da digitação do usuário
ui.postalCode.oninput = onlyNumbers; 

-> evento "onblur": clica fora, perde o foco
ui.postalCode.onblur = postalCodeIsValid; 
*/

// ==== FIM ===

})();