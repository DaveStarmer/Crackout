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
 * @param {object} drawingObj drawing object to draw on (compusory)
 * @param {number} xStart start x position (optional: default 0)
 * @param {number} yStart start y position (optional: default 0)
 * @param {number} widthOfBat width of the bat (optional: default: 30)
 */
function Bat(drawingObj, xStart = 0,yStart = 0, widthOfBat = 30, thicknessOfBat = 5) {
    // if no drawing object supplied, exit
    if (!(drawingObj instanceof Drawing)) return;
    /** drawing object for bat */
    const drw = drawingObj;
    /** x position */
    let xPos = xStart;
    if ((xStart - widthOfBat/2) < 0) xPos = widthOfBat/2;
    /** y position */
    let yPos = yStart;
    /** width of bat */
    let batWidth = widthOfBat;
    /** thickness of bat */
    let thickness = thicknessOfBat;


    /** set centre position of bat
     * @param {number} x x position
     * @param {number} y y position
     */
    this.setPos = function (x,y) {
        if (x != null && (x > 0 || x === 0)) {
            xPos = x;
            if (xPos - batWidth < 0) xPos = 0;
        }
        if (y != null && (y > 0 || y === 0)) {
            yPos = y;
            //TODO: compare to max y and reduce accordingly
        }
    }

    /** set and/or return x position
     * @param {number} xPosition new x position of bat
     * @returns {number} x position of bat
     */
    this.x = function(xPosition) {
        if (xPosition != null) this.setPos(xPosition);
        return xPos;
    }

    /** set and/or return y position
     * @param {number} yPosition new y position of bat
     * @returns {number} y position of bat
     */
    this.y = function(yPosition) {
        if (yPosition != null) this.setPos(null,yPosition);
        return yPos;
    }

    /** set and/or return width for bat
     * @param {number} newWidth new width of bat
     * @returns {number} width of bat
     */
    this.width = function(newWidth) {
        if (newWidth != null && newWidth > 0) batWidth = newWidth;
        return batWidth;
    }

    /** set and/or return thickness of bat 
     * @param {number} newThickness new thickness of bat
     * @returns {number} thickness of bat
    */
    this.thickness = function (newThickness) {
        if (newThickness != null && newThickness > 0) thickness = newThickness;
        return thickness;
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

    /** current stroke thickness */
    let currThickness = 2;
    
    /** draw background
     * @param {string} col word or hex value (optional - will default to current fill colour)
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
     * @param {string} col (optional) colour to set as stroke
     * @returns {string} current colour
     */
    this.stroke = function(col) {
        if (col !== undefined) currStroke = col;
        return currStroke;   
    }

    /** set line thickness of stroke
     * @param {number} thickness line thickness of stroke
     * @returns {number} current line thickness of stroke
     */
    this.strokeThickness = function(thickness) {
        if (thickness > 0 || thickness === 0) currThickness = thickness;
        return currThickness;
    }

}

