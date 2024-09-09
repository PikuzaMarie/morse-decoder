const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    if (expr) {
        let result = '';

        for (let i = 0; i < expr.length; i += 10) {
            let chunk = expr.slice(i, i + 10);
            chunk = chunk.replace(/^0+/, '');
            chunk = chunk.replace(/10/g, '.').replace(/11/g, '-');
            if (chunk === '**********') {
                result += ' ';
            } else if (MORSE_TABLE[chunk]) {
                result += MORSE_TABLE[chunk];
            }
        }

        return result;
    } else {
        return '';
    }
}

module.exports = {
    decode
}