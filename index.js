// Write your solution here!
const cats = ["Milo","Otis","Garfield"];
    
function destructivelyAppendCat(name){
    cats.push(name);
    return cats;
};

destructivelyAppendCat('Ralph');

function destructivelyPrependCat(name){
    cats.unshift(name);
    return cats;
};

destructivelyPrependCat("Bob");

function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;
};

function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats;
};

function appendCat(name){
    const newCats = [...cats];
    newCats.push(name);
    return newCats;
};

function prependCat(name){
    const copyCats = [...cats];
    copyCats.unshift(name);
    return copyCats;
};

function removeLastCat(){
    const rmCats = [...cats];
    rmCats.pop();
    return rmCats;

};

function removeFirstCat(){
    const vCats =[...cats];
    vCats.shift();
    return vCats;

};
