window.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.grid-container');

    console.log("container", container);

    const gridSize = 50;
    const numRows = 10;
    const numCols = Math.ceil(container.offsetHeight / gridSize);
    const numItems = numRows * numCols;

    // Set the --columns variable in the CSS to the number of columns
    container.style.setProperty('--columns', numCols);

    // Create grid items

    console.log(numRows, numCols, numItems)

    for (let i = 0; i < numItems; i++) {
    const item = document.createElement('div');
    item.classList.add('grid-item');
    container.appendChild(item);
    }

    // Color transitions
    function getRandomColor(prevColor, nextColor) {
    const hslPrev = prevColor.match(/\d+/g);
    const hslNext = nextColor.match(/\d+/g);
    const h = Math.round((parseInt(hslPrev[0]) + parseInt(hslNext[0])) / 2);
    const s = Math.round((parseInt(hslPrev[1]) + parseInt(hslNext[1])) / 2);
    const l = Math.round((parseInt(hslPrev[2]) + parseInt(hslNext[2])) / 2);
    return `hsl(${h}, ${s}%, ${l}%)`;
    }

    const items = document.querySelectorAll('.grid-item');

    items.forEach((item, index) => {
    // Get previous and next items
    const prevItem = items[index - 1];
    const nextItem = items[index + 1];
    
    // Get previous and next colors
    const prevColor = prevItem ? window.getComputedStyle(prevItem).backgroundColor : '#ffffff';
    const nextColor = nextItem ? window.getComputedStyle(nextItem).backgroundColor : '#ffffff';
    
    // Set background color based on previous and next colors
    item.style.backgroundColor = getRandomColor(prevColor, nextColor);
    });
});

