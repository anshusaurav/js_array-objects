let myPenguin = {
    name: "Roy and Silo",
    origin: "And Tango Makes Three",
    canFly: false,
    sayHello: function () {
        console.log("CHIRP CHIRP");
    }
};

myPenguin.outfit = {
    hat: "baseball cap",
    shirt: "Hawaiian shirt",
    pants: "cargo shorts",
    shoes: "flip-flops",
};
var penguinHatType = myPenguin.outfit.hat;
console.log(penguinHatType);

myPenguin.outfit["watch"] = "pocket watch";

myPenguin.outfit.hat = "top hat";

delete myPenguin.outfit.pants;

for(let prop in myPenguin.outfit)
{
    console.log(`${prop} : ${myPenguin.outfit[prop]}`);
}