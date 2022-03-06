
describe("Bat Attributes",()=>{
    describe("Bat Basic Settings",()=>{
        it("should have defaults of x = 15, y = 0, width = 30, thickness = 5",(done)=>{
            const myBat = new Bat(new Drawing(testSetupCanv()));
            assert.equal(15,myBat.x());
            assert.equal(0,myBat.y());
            assert.equal(30,myBat.width());
            assert.equal(5,myBat.thickness());
            done();
        });
        it("should not accept negative numbers for parameters",(done)=>{
            const myBat = new Bat(new Drawing(testSetupCanv()));
            myBat.x(-3);
            myBat.y(-5);
            myBat.width(-20);
            myBat.thickness(-10);
            assert.equal(15,myBat.x());
            assert.equal(0,myBat.y());
            assert.equal(30,myBat.width());
            assert.equal(5,myBat.thickness());
            done();
        });
        it("should accept positive numbers for parameters",(done)=>{
            const myBat = new Bat(new Drawing(testSetupCanv()));
            myBat.x(30);
            myBat.y(5);
            myBat.width(20);
            myBat.thickness(7);
            assert.equal(30,myBat.x());
            assert.equal(5,myBat.y());
            assert.equal(20,myBat.width());
            assert.equal(7,myBat.thickness());
            done();
        });
    });
});