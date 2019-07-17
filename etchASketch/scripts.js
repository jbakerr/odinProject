

function generateGrid(gridSize=10){
  const container = document.querySelector('.gridContainer')
  for(i=1; i<=gridSize*gridSize; i++){
    const cell = document.createElement('div')
    cell.classList.add('cell')
    // cell.textContent = i
    let cellDim = 1/gridSize * 100
    cell.style.width = cellDim + "%"
    cell.style.height = cellDim + "%"
    cell.addEventListener('mouseenter', colorCell);

    // cell.setAttribute('style','width: ${cellDim}%; height: ${cellDim}%;')
    container.appendChild(cell)
  }
}

function colorCell(e){
  e.target.classList.add('active')

}

function resetGrid(){
  const grid = document.querySelectorAll('.cell')
  grid.forEach(cell => cell.classList.remove('active'));

  gridSize = getGridSize()
  document.querySelector('.gridContainer').innerHTML = ""

  generateGrid(gridSize)

}

function getGridSize(){
  let gridSize = parseInt(prompt("Enter a number between 1-100"));

  return gridSize
}

generateGrid()


// function addEvents(){
//   const cells = document.querySelectorAll('.cell');

// cells.forEach(cell =>

// }



const resetButton = document.querySelector("button");

resetButton.addEventListener('click', resetGrid)


//  On Reset, get grid size. Set








