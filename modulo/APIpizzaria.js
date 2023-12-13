var usuarios = [
    {
        id: '1',
        imagem: './img/------',
        nomeUsuario: 'Ricardo Borges',
        email: 'ricardo123@hotmail.com',
        senha: 'ricardo123',
        telefone: '(11)99146-5028',
        cpf: '839.410.248-31',
        endereco: [
            {
                cep: '77064-713',
                rua: 'Rua P 9',
                bairro: 'Setor Bela Vista (Taquaralto)',
                cidade: 'Palmas',
                estado: 'Tocantins',
            }
        ]
    },
    {
        id: '2',
        imagem: './img/------',
        nomeUsuario: 'Rebeca Tomaz',
        email: 'rebeca123@hotmail.com',
        senha: 'rebeca123',
        telefone: '(11)99193-4385',
        cpf: '092.947.328-40',
        endereco: [
            {
                cep: '58303-040',
                rua: 'Rua Paulino Bastos',
                bairro: 'Municípios',
                cidade: 'Santa Rita',
                estado: 'Paraíba',
            }
        ]
    },
    {
        id: '3',
        imagem: './img/------',
        nomeUsuario: 'Gustava de Campos',
        email: 'campos123@hotmail.com',
        senha: 'campos123',
        telefone: '(11)99592-7540',
        cpf: '692.109.482-11',
        endereco: [
            {
                cep: '58075-475',
                rua: 'Rua Maria Augusta de Queiroz',
                bairro: 'Ernesto Geisel',
                cidade: 'João Pessoa',
                estado: 'Paraíba',
            }
        ]
    },
    {
        id: '4',
        imagem: './img/------',
        nomeUsuario: 'Vitoria Cardoso',
        email: 'vitoria123@hotmail.com',
        senha: 'vitoria123',
        telefone: '(11)99294-8295',
        cpf: '339.460.134-07',
        endereco: [
            {
                cep: '41410-050',
                rua: 'Estrada do Bonsucesso',
                bairro: 'Setor Bela Vista (Taquaralto)',
                cidade: 'Salvador',
                estado: 'Bahia',
            }
        ]
    },
    {
        id: '5',
        imagem: './img/------',
        nomeUsuario: 'Pedro Pedraga',
        email: 'pedrinho123@hotmail.com',
        senha: 'fofo123',
        telefone: '(11)99694-1037',
        cpf: '193.053.829-55',
        endereco: [
            {
                cep: '57071-824',
                rua: '5ª Travessa da Alegria',
                bairro: 'Clima Bom',
                cidade: 'Maceió',
                estado: 'Alagoas',
            }
        ]
    }
]

var categorias = [
    {
        id: '1',
        imagem: './img/------',
        nomeCategoria: 'Pizzas salgadas',
    },
    {
        id: '2',
        imagem: './img/------',
        nomeCategoria: 'Pizzas doces',
    },
    {
        id: '3',
        imagem: './img/------',
        nomeCategoria: 'Frutas',
    },
    {
        id: '4',
        imagem: './img/------',
        nomeCategoria: 'Bebidas',
    },
    {
        id: '5',
        imagem: './img/------',
        nomeCategoria: 'Sobremesas',
    },
]

var produtos = [
    {
        id: 1,
        nomeProduto: 'Pizza de peperoni com queijo',
        preco: 35.99,
        descricao: 'A pizza de frango com Catupiry é uma combinação deliciosa e popular. Feita com massa crocante, molho de tomate, frango temperado e o cremoso queijo Catupiry, essa pizza oferece uma explosão de sabores marcantes e textura aveludada. É uma opção irresistível que agrada aos amantes de pizza, ideal para quem busca uma experiência gastronômica única.',
        avaliacao_geral: 4.8,
        categoria: [
            {
                categorias: {id:1, nomeCategoria: 'Pizzas salgadas'}
                
            }
        ],
        comentario: [
            {
                id:1,
                mensagem: 'Pizza excelente!!',
                avaliacao: 5,
                data: '07/02/2023',
                usuario: {id:1, nomeUsuario: 'Ricardo Borges'}
            }
        ]
    },
    {
        id: 2,
        nomeProduto: 'Pizza de 4 queijos',
        preco: 29.99,
        descricao: 'A pizza de 4 queijos é uma opção clássica e irresistível para os amantes de queijo. Com uma base de massa crocante e molho de tomate, essa pizza é generosamente coberta com uma mistura de quatro queijos distintos, geralmente incluindo muçarela, gorgonzola, parmesão e provolone. Cada queijo contribui com seu próprio sabor: a muçarela adiciona cremosidade, o gorgonzola traz um toque mais marcante, o parmesão oferece um sabor intenso e o provolone acrescenta um delicioso toque defumado. Essa combinação resulta em uma pizza rica em sabores, textura cremosa e uma experiência gastronômica que agrada aos amantes de queijo.',
        avaliacao_geral: 4.3,
        categoria: [
            {
                categorias: {id:1, nomeCategoria: 'Pizzas salgadas'}
                
            }
        ],
        comentario: [
            {
                id:2,
                mensagem: 'O único problema era a borda meio queimada, de resto tava uma delícia!',
                avaliacao: 4,
                data: '17/10/2023',
                usuario: {id:2, nomeUsuario: 'Rebeca Tomaz'}
            }
        ]
    },
    {
        id: 3,
        nomeProduto: 'Banoffee de morango',
        preco: 14.44,
        descricao: 'O banoffee de morango é uma sobremesa deliciosamente irresistível. Esta versão do clássico banoffee é uma combinação perfeita de sabores doces e frutados. Começando com uma base crocante de biscoito ou massa de torta, é adicionada uma generosa camada de caramelo cremoso. Em seguida,fatias frescas de bananas maduras são colocadas sobre o caramelo, oferecendo um contraste delicioso entre o doce e o sabor natural da fruta.',
        avaliacao_geral: 4.4,
        categoria: [
            {
                categorias: {id:5, nomeCategoria: 'Sobremesas'}
                
            }
        ],
        comentario: [
            {
                id:3,
                mensagem: 'Essa sobremesa tava horrivel',
                avaliacao: 1,
                data: '04/04/2023',
                usuario: {id:3, nomeUsuario: 'Gustavo de Campos'}
            }
        ]
    },
    {
        id: 4,
        nomeProduto: 'Pizza de M&M',
        preco: 39.99,
        descricao: 'A pizza de M&M é uma sobremesa inovadora e divertida. Com uma base de massa de pizza crocante, esta pizza é coberta com deliciosos e coloridos M&Ms, oferecendo uma explosão de sabores doces e textura crocante.Os M&Ms, famosos por sua combinação de chocolate e revestimento crocante de açúcar colorido, são distribuídos generosamente sobre a massa da pizza, proporcionando uma mistura de cores vibrantes e sabores açucarados.',
        avaliacao_geral: 3.9,
        categoria: [
            {
                categorias: {id:2, nomeCategoria: 'Pizzas doces'}
                
            }
        ],
        comentario: [
            {
                id:4,
                mensagem: 'A pizza de M&M veio com pouco M&M!',
                avaliacao: 3,
                data: '04/12/2023',
                usuario: {id:4, nomeUsuario: 'Vitória Cardoso'}
            }
        ]
    },
    {
        id: 4,
        nomeProduto: 'Suco natural de laranja',
        preco: 6.99,
        descricao: 'O suco natural de laranja é uma opção refrescante e clássica para os amantes de bebidas saudáveis. Preparado a partir de laranjas frescas e suculentas, este suco oferece uma explosão de sabor cítrico e refrescante.',
        avaliacao_geral: 4.6,
        categoria: [
            {
                categorias: {id:4, nomeCategoria: 'Bebidas'}
                
            }
        ],
        comentario: [
            {
                id:5,
                mensagem: 'Tava OK',
                avaliacao: 3,
                data: '29/01/2023',
                usuario: {id:5, nomeUsuario: 'Pedro Pedraga'}
            }
        ]
    },
]

module.exports = {
    categorias, usuarios, produtos
}