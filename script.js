// ===============================
// BOTÃO "COMO CHEGAR"
// ===============================

// COLE AQUI O LINK DO GOOGLE MAPS DA LOJA
const linkMaps = "https://maps.google.com/...";

const botaoMaps = document.querySelector(".card .botao");

if (botaoMaps) {
    botaoMaps.addEventListener("click", function (e) {
        e.preventDefault();
        window.open(linkMaps, "_blank");
    });
}

// ===============================
// AGENDAMENTO PELO WHATSAPP
// ===============================

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const nome = form.querySelectorAll("input")[0].value;
    const telefone = form.querySelectorAll("input")[1].value;
    const endereco = form.querySelectorAll("input")[2].value;
    const aparelho = form.querySelectorAll("input")[3].value;
    const problema = form.querySelector("textarea").value;

    const mensagem =
`*AGENDAMENTO DE VISITA*

👤 Nome: ${nome}

📞 Telefone: ${telefone}

📍 Endereço: ${endereco}

🔧 Eletrodoméstico: ${aparelho}

📝 Problema:
${problema}`;

    const numero = "5598999730253";

    window.open(
        `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`,
        "_blank"
    );

});