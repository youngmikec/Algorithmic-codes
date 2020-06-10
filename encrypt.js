// write a function called encrypt that takes in a string parameter
// message. It should return the message in an encrypted format
// Hint the first letter of each word is transformed to it's ASCII code
// while the second and the last letter is interchanged.

let message = 'I love to code and I love to play game'

const encrypt = (msg) => {
    let wordsArray = msg.split(' ');
    let updatedArray = wordsArray.map(item =>{
        if(item.length < 3){
            let word = item.split('');
            word[0] = word[0].charCodeAt();
            let newWord = word.join('');
            return newWord;
        }else{
            let word = item.split('');
            word[0] = word[0].charCodeAt();
            let sw = word[1];
            let lw = word[word.length - 1];
            word.splice(1, 1, lw);
            word.splice(word.length - 1, 1, sw);
            let newWord = word.join('');
            return newWord;
        }
    });

    let encryptedMsg = updatedArray.join('@');
    console.log(encryptedMsg);
}

encrypt(message);