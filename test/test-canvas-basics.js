

describe("Canvas colours",()=>{
    describe("Basic drawing creation",()=>{
        it("should default fill colour to black",(done)=>{
            const canv = testSetupDwg("colourTestCanv");
            const newDwg = new Drawing(canv);
            assert.equal(newDwg.fill(),"black");
            done();
        });
        it("should default stroke colour to white",(done)=>{
            const canv = testSetupDwg("colourTestCanv");
            const newDwg = new Drawing(canv);
            assert.equal(newDwg.stroke(),"white");
            done();
        });
    });
    
});