// This class connects all the other classes together to make the game working
// That class will need a lot of properties, and methohdes eg changeable HTML Elements, other classes methodes
// Class Game
class Game {
    // Constructor method which collects all the elemetnwe need in here
    constructor(start) {
            // Properties which is needed to created the instances as wallet and statiscics
            //  class Statistics
            this.stats = new Statistics();
            // class Wallet with the money property for the bginning
            this.wallet = new Wallet(start);

            // All needed elements to display;
            // 1. We need to upload the creted button and qdd an event listener to the start button which is reffered to the start game method.
            document.getElementById('start').addEventListener('click', this.startGame);
            // now we need to uplosd some elements
            // 2. Wallet and assign to the variable to assign it to the property of span wallet
            this.spanYourWallet = document.querySelector('.info span.your-wallet');
            // 3. Images exchanged frome noe aray to the common rray
            this.imagesBoard = [...document.querySelectorAll('.image')];
            // 4. Input
            this.bidInput = document.getElementById('bid');
            // 5. The Game/Score result
            this.spanResult = document.querySelector('.score span.result');
            //6. The Total Games
            this.spanTotalGames = document.querySelector('.score span.total-games');
            //7. The Win Games
            this.spanWinGames = document.querySelector('.score span.win-games');
            //8. The Lost Games
            this.spanLostGames = document.querySelector('.score span.lost-games');

            // And for the end of constructor we need to create the refference to our method render
            this.render();
        }
        // The render method which is responsible for rendering/displaying elements.  With defined initial wallet quantity - will be updated as in the game.
    render(images = [{ link: './images/play.png', name: 'start' }, { link: './images/play.png', name: 'start' }, { link: './images/play.png', name: 'start' }], money = this.wallet.getWalletValue(), result = '', stats = [0, 0, 0], wonQuantity = 0, bid = 0) {
            // Check if it is working
            // console.log('Do dzieła');
            // 1.Initial images in windows of game
            this.imagesBoard.forEach((image, index) => {
                image.innerHTML = `<img class="image" src="${images[index].link}" alt="${images[index].name}" title="${images[index].name}">`;
            });
            // Let's on the beginning when the page will be displayed eg:
            // 2.We can add the wallet render with the initial value
            this.spanYourWallet.textContent = money;
            // 3.Result - empty as initial - will depend on result so it is good to use the conditional statement in here
            if (result) {
                result = `Wygrałeś: ${wonQuantity} $.`
            } else if (!result && result !== '') {
                result = `Przegrałeś ${bid} $.`
            }
            // displaying in the browser
            this.spanResult.textContent = result;
            // 4.Total Games - initial value
            this.spanTotalGames.textContent = stats[0];
            // 5. Winning Games - initial value
            this.spanWinGames.textContent = stats[1];
            // 6. Winning Looses - initial value
            this.spanLostGames.textContent = stats[2];



        }
        // Method which executes all the elements of game without the render methohd so will not display the elements on the page
    startGame() {

    }
}

// // That all will be executed when we create the instance of that object start is start money
// const game = new Game(200);