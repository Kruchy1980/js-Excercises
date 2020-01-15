// Firstly as always the variables
// Characters we would like to use for generating codes in string because string has its length as same as array
const chars = 'ABCDEFGHIJK0123456789';
// button
const generateCodeButton = document.querySelector('button');
// For display div
const box = document.querySelector('section');
// define the codeNumbers it will describe how many of them we want to generate
const codeNumbers = 1000;
// definition of chars in code
const charsNumber = 20;


// function

const codeGenerator = () => {
    // just for check if connected
    // console.log('click');
    // if we add the line below the section will always be cleared
    box.textContent = '';
    // firstly we want to generate any code as many times as we defined:) for what we need loop and for loop will be the best for it
    for (let i = 0; i < codeNumbers; i++) {
        // generate any text it works so now we need instead of fixed code make another loop which will generate rqarndom letters in our code
        // const code = 'tekst'; // works
        let code = ''; // declared as an empty string on the beginning
        for (let j = 0; j < charsNumber; j++) {
            // Now we need to create the callback for our code which will concatenate the elements to empty string eg
            // code += '1'; now we need genereate the index of string
            // now is good to create variable which will describe our index
            const index = Math.round(Math.random() * chars.length - 1);
            // console.log(chars.length);

            //just for check
            // console.log(index);
            // so no we cn use the code variable to add there elements
            code += chars[index];
            // just for check
            // console.log(chars[index]);
        }
        // create separate div for code
        const codeBox = document.createElement('div');
        // add the text to codeBox and display it into our section
        codeBox.textContent = code;
        // now we need to add it to our section
        box.appendChild(codeBox);
    }
}

// Now the listener
generateCodeButton.addEventListener('click', codeGenerator);