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
    let words = expr.split('**********');
  let result = [];
  words.forEach(x => {
    const codes = [];
    while (x) {
      codes.push(x.slice(0, 10));
      x = x.slice(10);
    }
    result.push(codes.map(x => x.slice(x.indexOf('1')).replace(/10/g, '.').replace(/11/g, '-')));
  });

  //g - replace ALL copies, i - replace all instances, ingoring diffs; m - should be tested in multiple lines

  result.forEach(x => {
    for (let i = 0; i < x.length; i++) {
      x[i] = MORSE_TABLE[x[i]];
    }
  });

  return result.map(x => x.join('')).join(' ');
}

module.exports = {
    decode
}