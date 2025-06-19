const book = {
    tituloLivro: 'Pequeno Principe',
    autorLivro: 'John & Josh',
    paginasLivro: '176',
    capitulosLivro: {
        cap1: 'a Lua',
        cap2: 'O céu'
    },
    escrevaLivro: function (){
        console.log('Escrevendo...')
    }
}
console.log(book.autorLivro)

