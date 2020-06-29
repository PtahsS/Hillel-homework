function xmasTree(pyramidHeight, symbol) {
    let xmas = '';

    // Use variables xmas, pyramidHeight, symbol

    for (i=1; i<=pyramidHeight; i++) {
    	xmas += " ".repeat(pyramidHeight - i) + symbol.repeat(i * 2 - 1) + '\n';
    }

    return xmas;
}

// Check your code
console.log(xmasTree(5, '*'));

module.exports = { xmasTree };