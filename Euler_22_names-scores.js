const fs = require('fs');

const names = fs.readFileSync('p022_names.txt', 'utf8')
     Split the string on every comma and remove the quotes
    .split(',').map(name = name.replace(g, ''))
    .sort();

const getAlphabeticalValue = name = name.split('')
    .reduce((memo, item) = memo + item.charCodeAt(0) - 64, 0);

const result = names.reduce((memo, item, index) =
    memo + getAlphabeticalValue(item)  (index + 1), 0);
