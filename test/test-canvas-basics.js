

describe("Canvas colours",()=>{
    describe("Basic drawing creation",()=>{
        it("should default fill colour to black",(done)=>{
            const canv = testSetupDwg("colourTestCanv");
            const newDwg = new Drawing(canv);
            assert.equal(newDwg.fill(),"black");
            destroyCanvas("colourTestCanv");
            done();
        });
        it("should default stroke colour to white",(done)=>{
            const canv = testSetupDwg("colourTestCanv");
            const newDwg = new Drawing(canv);
            assert.equal(newDwg.stroke(),"white");
            destroyCanvas("colourTestCanv");
            done();
        });
        it("should default stroke thickness to 2",(done)=>{
            const canv = testSetupDwg("strokeTestCanv");
            const newDwg = new Drawing(canv);
            assert.equal(newDwg.strokeThickness(),2);
            destroyCanvas("strokeTestCanv");
            done();
        });
        it("should allow stroke and fill colours to be changed",(done)=>{
            const canv = testSetupDwg("colourTestCanv");
            const newDwg = new Drawing(canv);
            newDwg.fill("red");
            newDwg.stroke("yellow");
            assert.equal(newDwg.fill(),"red");
            assert.equal(newDwg.stroke(),"yellow");
            destroyCanvas("colourTestCanv");
            done();
        });
        it("should allow stroke thickness to be changed",(done)=>{
            const canv = testSetupDwg("strokeTestCanv");
            const newDwg = new Drawing(canv);
            newDwg.strokeThickness(30)
            assert.equal(newDwg.strokeThickness(),30);
            destroyCanvas("strokeTestCanv");
            done();
        });
    });
    
});