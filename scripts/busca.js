const campos = document.querySelectorAll(".ipesquisa");
const lupas = document.querySelectorAll(".lupa");

const caminhoAtual = window.location.pathname;
const marcador = "/outras-paginas-do-site/";
const indice = caminhoAtual.indexOf(marcador);

// Identifica a raiz do projeto
let raiz;

if (indice !== -1) {
    raiz = caminhoAtual.substring(0, indice + 1);
} else {
    raiz = caminhoAtual.substring(
        0,
        caminhoAtual.lastIndexOf("/") + 1
    );
}

// Redireciona para a página da creepypasta
function abrirCreepy(arquivo) {
    window.location.href =
        raiz + "outras-paginas-do-site/creepypastas/" + arquivo;
}

// Executa a busca usando o campo correspondente
function buscarCreepy(campo) {
    const nome = campo.value
        .trim()
        .toLowerCase()
        .replace(/\s/g, "");

    // Limpa o campo após capturar o texto
    campo.value = "";

    if (nome === "") {
        alert("Digite o nome de uma creepypasta!");

    } else if (nome === "slenderman" || nome === "slender") {
        abrirCreepy("slenderman.html");

    } else if (nome === "jeffthekiller" || nome === "jeff") {
        abrirCreepy("jeff_the_killer.html");

    } else if (nome === "smiledog" || nome === "dog") {
        abrirCreepy("smile_dog.html");

    } else if (nome === "therake") {
        abrirCreepy("the_rake.html");

    } else if (nome === "tailsdoll" || nome === "tails") {
        abrirCreepy("tails_doll.html");

    } else if (nome === "lavendertown" || nome === "lavender") {
        abrirCreepy("lavender_town.html");

    } else if (nome === "bendrowned" || nome === "ben") {
        abrirCreepy("ben_drowned.html");

    } else {
        alert("Creepypasta não encontrada!");
    }
}

// Ativa todas as lupas
lupas.forEach(function(lupa) {
    lupa.addEventListener("click", function() {
        const pesquisa = lupa.closest(".pesquisa");
        const campo = pesquisa.querySelector(".ipesquisa");

        buscarCreepy(campo);
    });
});

// Ativa o Enter em todos os campos
campos.forEach(function(campo) {
    campo.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            buscarCreepy(campo);
        }
    });
});
