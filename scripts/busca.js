const campos = document.querySelectorAll(".ipesquisa");
const lupas = document.querySelectorAll(".lupa");

// Identifica a raiz do projeto
const caminhoAtual = window.location.pathname;
const marcador = "/outras-paginas-do-site/";
const indice = caminhoAtual.indexOf(marcador);

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
        raiz + "outras-paginas-do-site/" + arquivo;
}

// Executa a busca
function buscarCreepy(campo) {
    const nome = campo.value
        .trim()
        .toLowerCase()
        .replace(/\s/g, "");

    // Limpa o campo de pesquisa
    campo.value = "";

    if (nome === "") {
        alert("Digite o nome de uma creepypasta!");

    } else if (nome === "slenderman" || nome === "slender") {
        abrirCreepy("slenderman.html");

    } else if (nome === "jeffthekiller" || nome === "jeff") {
        abrirCreepy("jeff_the_killer.html");

    } else if (nome === "smiledog" || nome === "dog") {
        abrirCreepy("smile_dog.html");

    } else if (nome === "therake" || nome === "rake") {
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
        const campo = pesquisa?.querySelector(".ipesquisa");

        if (campo) {
            buscarCreepy(campo);
        } else {
            console.error("Campo de pesquisa não encontrado.");
        }
    });
});

// Ativa a tecla Enter em todos os campos
campos.forEach(function(campo) {
    campo.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            buscarCreepy(campo);
        }
    });
});
