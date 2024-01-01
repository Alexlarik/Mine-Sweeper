'use strict'

var gBoard
var gSize = 4
// const cell = ''
const BOMB = '💣'
const FLAG = '🚩'

gLevel = {
    SIZE: 4,
    BOMB: 2
}
gGame = {
    isOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
}

function onInit() {
    gBoard = createBoard
    renderBoard(gBoard)

}

function createBoard() {
    const board = []

    for (var i = 0; i <= gSize; i++) {
        board[i] = []
        for (var j = 0; j <= gSize; j++) {
            board[i][j] = BOMB
        }

    }
    return board


}
function renderBoard() {
    var strHTML = ''
    const click = ' '
    for (var i = 0; i < gSize; i++) {
        strHTML += `<tr>`
        for (var j = 0; j < gSize; j++) {
            strHTML += `
            <td>
                <button class="cell" onclick="onCellClicked(this,${click})">${click}</button>      
            </td>
            
            `

        }
        strHTML += `</tr>`
    }
    var elBoard = document.querySelector('.board')
    elBoard.innerHTML = `<table><tbody>${strHTML}</tbody></table>`
    return strHTML



}
function onCellClicked() {
    console.log('hi')
}
function countBombsAround(board, rowIdx, colIdx) {
    var count = 0
    for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {
        if (i < 0 || i >= board.length) continue
        for (var j = colIdx - 1; j <= colIdx + 1; j++) {
            if (i === rowIdx && j === colIdx) continue
            if (j < 0 || j >= board[0].length) continue
            var currCell = board[i][j]
            if (currCell.isSeat && !currCell.isBooked) count++
        }
    }
    return count
}

