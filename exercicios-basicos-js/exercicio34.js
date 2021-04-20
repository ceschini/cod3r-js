// 34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
// todos os caracteres(independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.

function comparaString(string1, string2) {
    s1 = string1.toUpperCase();
    s2 = string2.toUpperCase();
    let i = 0;
    while (i < s1.length) {
        c = s1.charAt(i);
        let j = 0;
        teste = false;
        while (j < s2.length) {
            if (c == s2.charAt(j)) {
                teste = true;
            }
            j++;
        }
        if (teste == false) {
            return false;
        }
        i++;
    }
    while (i < s2.length) {
        c = s2.charAt(i);
        let j = 0;
        teste = false;
        while (j < s1.length) {
            if (c == s1.charAt(j)) {
                teste = true;
            }
            j++;
        }
        if (teste == false) {
            return false;
        }
        i++;
    }
    return true;
}
console.log(comparaString('adef', 'adeeeef'));