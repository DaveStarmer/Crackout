function testSetupDoc() {
    const currDiv = document.getElementById("testspace");
    if (currDiv != null) {
        currDiv.remove();
    }
    const newDiv = document.createElement("div");
    newDiv.id = "testspace";
    newDiv.style.display = "none";
    newCanv = document.createElement('canvas');
    newCanv.id = "gameCanvas";
    newCanv.width = 800;
    newCanv.height = 600;
    newDiv.appendChild(newCanv);
    document.body.appendChild(newDiv);
}