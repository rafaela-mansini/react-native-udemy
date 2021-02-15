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

// quando o state for alterado vai clonar o board, pois não dá pra alterar o state e sim inserir novas informações
const cloneBoard = board => {
    return board.map(rows => {
        return rows.map(field => {
            return {...field}
        })
    })
}

const getNeighbors = (board, row, column) =>{
    const neighbors = []
    const rows = [row - 1, row, row + 1]
    const columns = [columns - 1, columns, columns + 1]
    rows.forEach(r => {
        columns.forEach(c => {
            const diffrent = r !== row || c !== column // não pode ser o elemento que foi clicado
            const validRow = r >= 0 && r < board.length // verificar se não é canto: o numero da row tem que ser maior que zero e menor que o tamanho total do board
            const validColumn = c >= 0 && c < board[0].length
            if(diffrent && validRow && validColumn){
                neighbors.push(board[r][c]) // retorna o indice da volta atual como vizinho do que foi clicado
            }
        })
    })
    return neighbors
}

const safeNeighborhood = (board, row, column) => {
    const safes = (result, neighbor) => result && !neighbor.mined // função para ver se vizinhança é segura, se tiver um campo que esteja minado ela não vai ser segura
    return getNeighbors(board, row, column).reduce(safes, true)
}

const openField = (board, row, column) =>{
    const field = board[row][column]
    if(!field.opened){
        field.opened = true
        if(field.mined)        {
            field.exploded = true
        }
        else if(safeNeighborhood(board, row, column)){ // se a vizinhança estiver segura, pega os itens da vizinhança e abre os campos
            getNeighbors(board, row, column).forEach(n => openField(board, n.row, n.column))
        }
        else { // se a vizinhança não estiver segura
            const neighbors = getNeighbors(board, row, column) // returna as minas da vizinhança que estou clicando
            field.nearMines = neighbors.filter(n => n.mined).length // filtro as minas da vizinhança que tem mined = true e pego o tamanho dele
        }
    }
}

const fields = board => [].concat(...board) // transforma a matriz do board em um array linear, concatena em um array inicialmente vazio o board
// percorre a função fields e filtra retornando somente as minas que estão explodidas
const hasExplosion = board => fields(board)
    .filter(field => field.exploded).length > 0

// se o campo estiver minado mas não possuir uma flag, ou se o campo não for minado e não estiver aberto significa que o jogo ainda está pendente
const pendding = field => (field.mined && !field.flagged) || (!field.mined && !field.opened)


// se o tamanho de retorno for zero significa que não tem nada pendente dentro do board
const wonGame = board => fields(board).filter(pendding).length === 0

// transforma o tabuleiro em um array, filtrou os campos que estão minados e abriu os campos que estão minados
const showMines = board => fields(board).filter(field => field.mined).forEach(field => field.opened = true)


export { createMinedBoard, cloneBoard, openField, hasExplosion, wonGame, showMines }