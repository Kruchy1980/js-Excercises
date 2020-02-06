// First anonymus function user
//The closure mechanism
// const user = () => {
// Or we can use some parameters to make the function more flexible
const user = (name = '', age) => {
    // create variables eg
    let userName = name;
    let userAge = age;
    // callback function
    function showName() {
        console.log(`Cześć ${userName},  ${userAge >= 18 ? 'możesz kupić alkohol :)' : 'nie jesteś pełnoletni, poproś tatę aby kupił Tobie alkohol;)'}`);
    }
    return showName
}
// declaring variable of function
const joah = user('Aleksander', 21);
// callback function
joah();