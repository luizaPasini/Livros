function pesquisar() {
    let section = document.getElementById("resultados-pesquisa") //acessar as coisas do documento html: document

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados= "";
    let titulo = "";
    let resumo = "";

    for(let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        resumo = dado.resumo.toLowerCase()
        if (titulo.includes(campoPesquisa) || resumo.includes(campoPesquisa)) {
            resultados += `<div class="item-resultado">
                    <h2>
                        <a href= "#" target="_blank" >${dado.titulo}</a> 
                    </h2>
                    <p>${dado.escritor}</p>
                    <p>${dado.genero}</p>
                    <p class="descricao-meta">${dado.resumo}</p>
                    <p>${dado.estrelas}</p>
                    </div>`;
        } 
    }

    if(!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }

    section.innerHTML= resultados;
}
