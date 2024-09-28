const fs = require("fs").promises;
const fsSync = require("fs");
// Read index.txt file
let text = fsSync.readFileSync('./index.txt', 'utf-8')

// Print text file contents
console.log(text);

// Create new file to reply to initial text
const reply = "Hi!";
fsSync.writeFileSync('./reply.txt', reply);
// console.log(replyText);

// Create new directory
// fs.mkdirSync('./TEST_FOLDER', () => {});

fsSync.writeFileSync("./index.txt", "testing 3");
// Asynchronous read file
async function ReadFileTexts() {
    try {
        const text1 = await fs.readFile('./index.txt', 'utf-8');
        console.log(`Line 22: The content of this letter is ${text1}`);
    } catch (error) {
        console.error(error);
    }
}

ReadFileTexts();

text = fs.readFile('./index.txt', 'utf-8')
    .then((TextContents) => {console.log(`the content of this letter is ${TextContents}`);})
    .catch((error) => {
        console.error(`Error reading file: ${error}`);
     });
    


console.log(text);

