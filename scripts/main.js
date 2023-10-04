const formulario = document.querySelector("#formulario");
let addNovaLinha = "";

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    adicionaLinha();
})


function adicionaLinha() {
    const inputNome = document.querySelector("#contato-nome");
    const inputTelefone = document.querySelector("#contato-telefone");
    const corpoTabela = document.querySelector("tbody");

    let novaLinha = "<tr>";
    novaLinha += `<td>${inputNome.value}</td>`
    novaLinha += `<td>${inputTelefone.value}</td>`
    novaLinha += "</tr>"
    addNovaLinha += novaLinha;

    corpoTabela.innerHTML = addNovaLinha;
}