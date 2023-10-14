const nome = '*H%u$g#o @l&a(u)r!e*t@i!no da si!l&va*'

let purificado = ''
for (const letras of nome) {
    if (
        letras != '!' &&
        letras != '@' &&
        letras != '#' &&
        letras != '$' &&
        letras != '%' &&
        letras != '&' &&
        letras != '(' &&
        letras != ')' &&
        letras != '*') {
        purificado += letras
    }
}
console.log(purificado);