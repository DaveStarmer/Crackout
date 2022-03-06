/** set up page for first time */
function testSetupDoc() {
    testSetupCanv("gameCanvas");
}

/** set up canvas on page
 * @param {string} newCanvId string ID for new canvas (optional: defaults to 'testCanvas')
 * @returns {object} newly created canvas
 */
function testSetupCanv(newCanvId = "testCanvas") {
    destroyCanvas(newCanvId);
    // get div to contain canvases - or create if necessary
    const destDiv = (document.getElementById('testspace') != null) ? document.getElementById('testspace') : document.createElement("div");
    // set attributes of testspace div
    destDiv.id = "testspace";
    destDiv.style.display = "none";
    // create new canvas
    newCanv = document.createElement('canvas');
    newCanv.id = newCanvId;
    newCanv.width = 800;
    newCanv.height = 600;
    destDiv.appendChild(newCanv);
    document.body.appendChild(destDiv);
    // return canvas
    return newCanv;
}

function destroyCanvas(canvId = "testCanvas") {
    const currCanv = document.getElementById(canvId);
    if (currCanv != null) {
        currCanv.remove();
    }
}