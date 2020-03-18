let myPenguin = {
    name: "Roy and Silo",
    origin: "And Tango Makes Three",
    author: ["Peter Parnell", "Justin Richardson"]
};

myPenguin.favoriteFoods = ["fish", "squid", "krill"];

console.log(myPenguin.favoriteFoods[1]);

var firstFavFood = myPenguin.favoriteFoods[0];

myPenguin.favoriteFoods.push("crustaceans");

console.log(myPenguin.favoriteFoods.length);

myPenguin.favoriteFoods[myPenguin.favoriteFoods.length-1] = "pineapples";

var lastFavFood = myPenguin.favoriteFoods[myPenguin.favoriteFoods.length-1];

for(var i = 0; i < myPenguin.favoriteFoods.length; i++) {
    console.log(myPenguin.favoriteFoods[i]);
}