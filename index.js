/**
 * Instructions:
 * • Always try to refresh the browser, or use live server
 * • Open the inspect window on chrome to see if there are any logs
 *
 *
 *
 * Steps:
 * 1. (100 points) Create a class Card that takes 2 properties `number`, and `color`
 * 2. (100 points) Create the constructor inside the class `Card` that initializes color and number
 * 3. (100 points) after creating the class, create 4 objects from the class Card for Green, Blue, Red, and Yellow cards, give them any numbers.
 * 4. (50 points) console.log every single object.
 * 5. (200 points) Add a method to class Card called `image()` that doesn't take any parameter, and it returns a string that represent the image path stored corresponding to card info
 *    The image path is as follows `./images/COLOR_NUMBER.png`
 *    Examples:
 *  - `./images/Blue_9.png`
 *  - `./images/Yellow_7.png`
 *  - `./images/Red_4.png`
 *  - `./images/Blue_8.png`
 * 6. (100 points) Add 3 cards to the array `cards` defined below by using `.push` method on the cards array
 *    Check the browser, you will see four cards!
 * 7. (1000 Points!)- great now you noticed that you created 4 objects manually, but that shouldn't be the case.
 *      the Uno deck includes 80 numbers (0-9 from each color)
 *
 *      it has four colors ["Yellow","Red","Blue","Green"]
 *    - Comment out the objects that you created
 *    - you should fill the cards dynamically, instead of the ones we created object by object,
 *      you need to use loops and fill the cards deck in a loop (Hint: You should use `for` loops, )
 *
 */
let cards = []; // You will use this array in step 6

// Continue the code here 👇🏻
class Card {
  constructor(number, color) {
    this.number = number;
    this.color = color;
  }

  image = () => {
    return `./images/${this.color}_${this.number}.png`;
  };
}

//const zeroYellow = new Card(0, "Yellow");
//const oneRed = new Card(1, "Red");
//const twoBlue = new Card(2, "Blue");
//const threeGreen = new Card(3, "Green");

//cards.push(zeroYellow);
//cards.push(oneRed);
//cards.push(twoBlue);
//cards.push(threeGreen);

let colors = ["Yellow", "Blue", "Red", "Green"];
let numberOfCardsByColor = 10;
for (let i = 0; i < colors.length; i++) {
  for (let j = 0; j < numberOfCardsByColor; j++) {
    let firstCard = new Card(j, colors[i]);
    cards.push(firstCard);
    let secondCard = new Card(j, colors[i]);
    cards.push(secondCard);
  }
}
/**
 *
 * Don't touch this code
 * This function is going to render the cards array to the HTML page,
 */
function render(array) {
  document.getElementById("cards-container").innerHTML = array
    .map(cardComponent)
    .join("");
}

render(cards);
