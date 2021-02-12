// vai criar o objeto para o board com uma matriz de linhas x colunas e com os atributos default inicial
const createBoard = (rows,columns) => {
    // função Array(quantidade).fill(valor) => vai gerar um array de x quantidade e inserir o valor informado no fill...
    return Array(rows).fill(0).map((_, row) => {
        return Array(columns).fill(0).map((_, column) => {
            return {
                row,
                column,
                opened: false,
                flagged: false,
                mined: false,
                exploded: false,
                nearMines: 0
            }
        })
    })
}

// vai espalhar as minas dentro do tabuleiro
const spreadMines = (board, minesAmount) => {
    const rows = board.length
    const columns = board[0].length
    let minesPlanted = 0

    // enquanto as minas plantadas for menor do que as minas que eu quero que seja implantada no board ele vai tentar inserir
    while(minesPlanted < minesAmount) {
        const rowSel = parseInt(Math.random() * rows, 10)
        const columnSel = parseInt(Math.random() * columns, 10)

        // se a mina selecionada já estiver como minada ele pula o processo, se não ele seta na posição selecionada e acrescenta na variavel de minas plantadas
        if(!board[rowSel][columnSel].mined) {
            board[rowSel] [columnSel].mined = true
            minesPlanted++
        }
    }
}

// criar um board com as minas já plantadas
const createMinedBoard = (rows, columns, minesAmount) => {
    const board = createBoard(rows, columns)
    spreadMines(board, minesAmount)
    return board
}

export { createMinedBoard }