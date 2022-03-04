// Crackout JS
// Based on the concept of Breakout

/** Drawing  */
const dwg = new Drawing(document.getElementById("gameCanvas"));

setup();

function setup() {
    dwg.bg(0);
    

}

function game() {

    function gameLoop () {
    
    }
}

/** Bat object
 * @param {number} xStart start x position (optional: default 0)
 * @param {number} yStart start y position (optional: default 0)
 * @param {number} widthOfBat width of the bat (optional: default: 30)
 */
function Bat(xStart = 0,yStart = 0, widthOfBat = 30) {
    let xPos = xStart;
    let yPos = yStart;
    let batWidth = widthOfBat;
    if ((xStart - batWidth/2) < 0) xPos = batWidth/0;

    /** set centre position of bat
     * @param {number} x x position
     * @param {number} y y position
     */
    this.setPos = function (x,y) {
        if (x != null) xPos = x;
        if (y != null) yPos = y;
    }

    /** set new width for bat
     * @param {number} newWidth new width of bat
     */
    this.setWidth = function(newWidth) {
        batWidth = newWidth;
    }
}


/** Drawing Object
 * @param {Object} canvas DOM Object representing canvas
 */
function Drawing (canvas) {
    /** canvas object */
    const canvasObj = canvas;
    /** drawing context */
    const dwgContext = canvas.getContext("2d");

    /** current fill colour */
    let currFill = "black";

    /** current stroke colour */
    let currStroke = "white";
    
    /** draw background
     * @param {string} col word or hex value 
     * (optional - will default to current fill colour)
     */
    this.bg = function (col = this.currFill) {
        dwgContext.fillStyle = col;
        dwgContext.fillRect(0,0,canvasObj.width,canvasObj.height);
    };

    /** set current fill / return current fill
     * @param col (optional) colour to set as fill
     * @returns {string} current colour
     */
    this.fill = function(col) {
        if (col !== undefined) currFill = col;
        return currFill;   
    }

    /** set current stroke / return current stroke 
     * @param col (optional) colour to set as stroke
     * @returns {string} current colour
     */
    this.stroke = function(col) {
        if (col !== undefined) currStroke = col;
        return currStroke;   
    }

}

