// plays.js - Game data
const plays = {
    paper: {
        name: "Paper",
        image: "https://cdn-icons-png.flaticon.com/512/2541/2541988.png",
        counters: ["rock"]
    },
    rock: {
        name: "Rock",
        image: "https://cdn-icons-png.flaticon.com/512/835/835024.png",
        counters: ["scissors", "fire"]
    },
    scissors: {
        name: "Scissors",
        image: "https://cdn-icons-png.flaticon.com/512/10363/10363577.png",
        counters: ["paper"]
    },
    gun: {
        name: "Gun",
        image: "https://cdn-icons-png.flaticon.com/512/5904/5904339.png",
        counters: ["rock", "paper", "scissors"]
    },
    law: {
        name: "Law",
        image: "https://cdn-icons-png.flaticon.com/512/1208/1208147.png",
        counters: ["gun", "chest", "acid"]
    },
    fire: {
        name: "Fire",
        image: "https://cdn-icons-png.flaticon.com/512/2311/2311301.png",
        counters: ["paper", "scissors", "chest", "magnet", "acid", "tree"]
    },
    chest: {
        name: "Chest",
        image: "https://cdn-icons-png.flaticon.com/512/4883/4883370.png",
        counters: ["rock", "paper", "scissors", "gun"]
    },
    acid: {
        name: "Acid",
        image: "https://cdn-icons-png.flaticon.com/512/5671/5671353.png",
        counters: ["paper", "gun", "scissors", "rock", "chest", "magnet", "tree"]
    },
    glass: {
        name: "Glass",
        image: "https://cdn-icons-png.flaticon.com/512/896/896197.png",
        counters: ["paper", "acid", "fire"]
    },
    magnet: {
        name: "Magnet",
        image: "https://cdn-icons-png.flaticon.com/512/3989/3989630.png",
        counters: ["gun", "scissors"]
    },
    tree: {
        name: "Tree",
        image: "https://cdn-icons-png.flaticon.com/512/2220/2220083.png",
        counters: ["paper", "scissors", "chest", "magnet", "glass", "rock", "gun"]
    },
    
};
