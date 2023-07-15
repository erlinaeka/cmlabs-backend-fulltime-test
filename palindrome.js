//1. menghilangkan spesial karakter lalu diubah menjadi lowecase semua terlebih dahulu
//2. split untuk jadi array, lalu reverse untuk membalik kata lalu joinkan kembali untuk jadi string
//3. bandingkan dehhh

function palindrome(sentence) {
    let newSentence = sentence.replace(/[&\/\#, +()$~%.'":@^*?<>{}]/g, "").toLowerCase();
    let reverseNewString = newSentence.split("").reverse().join("");
    return newSentence == reverseNewString ? true : false;
}

// console.log(palindrome("My gym"));
// console.log(palindrome("SAIPPUAKIVIKAUPPIAS"));
// console.log(palindrome("Aibohphobia"));
// console.log(palindrome("Anna"));
// console.log(palindrome("Civic"));
// console.log(palindrome("No lemon, no melon"));
