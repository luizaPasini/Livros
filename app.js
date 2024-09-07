// app.js
import { dadosLivros } from './dados.js';

let indexAtual = 0;

document.getElementById("prev-livro").addEventListener("click", () => {
    indexAtual = (indexAtual === 0) ? dadosLivros.length - 1 : indexAtual - 1;
    mostrarLivro();
});

document.getElementById("next-livro").addEventListener("click", () => {
    indexAtual = (indexAtual === dadosLivros.length - 1) ? 0 : indexAtual + 1;
    mostrarLivro();
});

document.getElementById("btn-pesquisa").addEventListener("click", () => {
    const termoPesquisa = document.getElementById("input-pesquisa").value.toLowerCase();
    const livroEncontrado = dadosLivros.find(livro => livro.titulo.toLowerCase().includes(termoPesquisa));

    if (livroEncontrado) {
        indexAtual = dadosLivros.indexOf(livroEncontrado);
        mostrarLivro();
    } else {
        alert("Livro não encontrado!");
    }
});

function mostrarLivro() {
    const livro = dadosLivros[indexAtual];
    document.getElementById("titulo-livro").innerText = livro.titulo;
    document.getElementById("escritor-livro").innerText = livro.escritor;
    document.getElementById("data-finalizada").innerText = livro.dataFinalizada;
    document.getElementById("nota-livro").innerText = livro.nota;
    document.getElementById("personagens-favoritos").innerText = livro.personagensFavoritos;
    document.getElementById("frases-favoritas").innerText = livro.frasesFavoritas;
}

// Inicializa com o primeiro livro
mostrarLivro();
