// create a variable to hold your NFT's
const creatures = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(habitat, name, type) {
    const creature = { habitat, name, type };
    creatures.push(creature);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function  listNFTs() {
    console.log("Listing NFTs:----");
    for(var i = 0; i < creatures.length; i++){
        const creature = creatures[i];
        console.log("NFT : ",i+1);
        console.log("Habitat: ",creature.habitat);
        console.log("Name: ",creature.name);
        console.log("Type: ",creature.type);
 
    };
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total NFTs minted: ",creatures.length);
}

// call your functions below this line
//NFT Inputs
mintNFT("Forest", "GoldenDragon", "Dragon");
mintNFT("Cave", "BlackWyvern", "Wyvern");
mintNFT("Ocean", "SeaSerpent", "Serpent");
mintNFT("Mountain", "Griffin", "Griffin");

listNFTs();
getTotalSupply();
