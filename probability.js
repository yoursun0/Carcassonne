/**
 * Problem statement:
 * 
 * Within a N-player Carcassonne game with M turns (for default game, M = 71, N = 2 or 3 or 4 or 5),
 * considering a certain turn where I am the player and there are T tiles left in the deck (not include my action tile on my hand),
 * what is the probability of a particular space being able to be filled up in future turns.
 * 
 * The function `success` indicating the probability of that space being filled up, with the following input parameters:
 * @param {Int} n - number of players in the game
 * @param {Int} t - number of remaining turns after the current turn
 * @param {Int} x - number of remaining tiles which can fit into the space
 * @param {Int} y - array of N booleans whether the player want to fill up the space
 */
function success(t, x, y) {


    if (x == 0 || t == 0) {
        return 0
    }

    if (t == 1 && x == 1) {
        return (y[0] ? 1 : 0)
    }

    // probability of next turn get the tile
    var pGetTile = x / t;

    var getTileTrue = y[0] ? 1 : (success(t - 1, x - 1, arrayRotate(y)))
    var getTileFalse = success(t - 1, x, arrayRotate(y))
    var prob = pGetTile * getTileTrue + (1 - pGetTile) * getTileFalse
    console.log(`t = ${t}, x = ${x}, y = [${y}], p = ${prob}`)

    return prob

}

function arrayRotate(arr, reverse) {
    var temp = Array.from(arr)
    if (reverse) temp.unshift(temp.pop());
    else temp.push(temp.shift());
    return temp;
}

var n = 2;
var t = 17;
var x = 1;
var y = [false, true];


console.log(`In ${n}-player Carcassonne game:`)
console.log(`The probability of success = ${success(t, x, y).toPrecision(2)}`);