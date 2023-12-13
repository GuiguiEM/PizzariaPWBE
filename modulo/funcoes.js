var  pizzaria = require('./APIpizzaria')

const listarCategorias = () => {
    let categorias = pizzaria.categorias
    let categoriasArray = []
    
    categorias.forEach((categoria) => {
        
        let categoriaInfo = {
            id: categoria.id,
            nome: categoria.nomeCategoria,
            imagem: categoria.icone 
        }    
        
        categoriasArray.push(categoriaInfo)

    })

    let categoriasJSON = { categoriasArray }
    return categoriasJSON
}

const listarProdutos = () => {
    let produtos = pizzaria.produtos
    let produtosArray = []

    produtos.forEach((produto) => {

        let produtoInfo = {
            id: produto.id,
            nome: produto.nomeProduto,
            preco: produto.preco,
            avaliacao_geral: produto.avaliacao_geral,
            categoria: produto.categoria.categorias.
        }

        produtosArray.push(produtoInfo)
    })

    let produtosJSON = {produtosArray}
    return produtosJSON
}

// console.log (listarCategorias());
console.log (listarProdutos());