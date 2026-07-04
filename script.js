const formulario = document.getElementById("agendamentoForm");

formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const endereco = document.getElementById("endereco").value.trim();
    const aparelho = document.getElementById("aparelho").value.trim();
    const problema = document.getElementById("problema").value.trim();

    const mensagem =
`*AGENDAMENTO DE VISITA*

👤 Nome: ${nome}

📞 Telefone: ${telefone}

📍 Endereço: ${endereco}

🔧 Eletrodoméstico: ${aparelho}

📝 Problema:
${problema}`;

    const numero = "5598999730253";

    const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    window.location.href = link;
});
