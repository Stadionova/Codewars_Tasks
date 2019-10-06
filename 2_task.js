// 2. Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" 
// for the development and functioning of living organisms.
// If you want to know more http://en.wikipedia.org/wiki/DNA
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
// You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. 
// DNA strand is never empty or there is no DNA at all (again, except for Haskell).
// More similar exercise are found here http://rosalind.info/problems/list-view/ (source)

// нужно A заменить на Т, а С заменить на G и наоборот:

function DNAStrand(dna) {

    var lettersChange = {
        A: function (finded) {
            return separateLetters.splice(i, 1, 'T');
        },
        T: function (finded) {
            return separateLetters.splice(i, 1, 'A');
        },
        C: function (finded) {
            return separateLetters.splice(i, 1, 'G');
        },
        G: function (finded) {
            return separateLetters.splice(i, 1, 'C');
        },
    }

    var separateLetters = dna.split('');

    for (var i = 0; i < separateLetters.length; i++) {
        var finded = separateLetters[i];
        switch (finded) {
            case 'A':
                lettersChange.A();
                break;
            case 'T':
                lettersChange.T();
                break;
            case 'C':
                lettersChange.C();
                break;
            case 'G':
                lettersChange.G();
                break;
        }
    }
    return separateLetters.join('');
}
DNAStrand("ATTGC") // "TAACG"
DNAStrand("GTAT") // "CATA" 
DNAStrand("AAAA") // "TTTT"
DNAStrand("ATTGC") // "TAACG"
DNAStrand("GTAT", "CATA", "String GTAT is");