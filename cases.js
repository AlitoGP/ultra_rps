// cases.js - Custom win/loss messages
const cases = [
    // Paper wins
    { win: "paper", loss: "rock", message: "Paper covers Rock" },
    
    // Rock wins
    { win: "rock", loss: "scissors", message: "Rock crushes Scissors" },
    { win: "rock", loss: "fire", message: "Rock smothers Fire" },
    
    // Scissors wins
    { win: "scissors", loss: "paper", message: "Scissors cuts Paper" },
    
    // Gun wins
    { win: "gun", loss: "rock", message: "Gun shoots Rock" },
    { win: "gun", loss: "paper", message: "Gun shoots through Paper" },
    { win: "gun", loss: "scissors", message: "Gun shoots Scissors" },
    
    // Law wins
    { win: "law", loss: "gun", message: "Law bans Gun" },
    { win: "law", loss: "chest", message: "Law seizes Chest" },
    { win: "law", loss: "acid", message: "Law prohibits Acid" },
    
    // Fire wins
    { win: "fire", loss: "paper", message: "Fire burns Paper" },
    { win: "fire", loss: "scissors", message: "Fire melts Scissors" },
    { win: "fire", loss: "chest", message: "Fire burns Chest" },
    
    // Chest wins
    { win: "chest", loss: "rock", message: "Chest contains Rock" },
    { win: "chest", loss: "paper", message: "Chest stores Paper" },
    { win: "chest", loss: "scissors", message: "Chest holds Scissors" },
    { win: "chest", loss: "gun", message: "Chest stores Gun" },
    
    // Acid wins
    { win: "acid", loss: "paper", message: "Acid dissolves Paper" },
    { win: "acid", loss: "gun", message: "Acid corrodes Gun" },
    { win: "acid", loss: "scissors", message: "Acid dissolves Scissors" },
    { win: "acid", loss: "rock", message: "Acid erodes Rock" },
    { win: "acid", loss: "chest", message: "Acid eats through Chest" },
    
    // Glass wins
    { win: "glass", loss: "paper", message: "Glass cuts Paper" },
    { win: "glass", loss: "acid", message: "Glass contains Acid" },
    { win: "glass", loss: "fire", message: "Glass extinguishes Fire" },

    // Tree wins
    { win: "tree", loss: "paper", message: "Tree makes Paper" },
    { win: "tree", loss: "glass", message: "Tree breaks Glass" },
    { win: "tree", loss: "scissors", message: "Tree breaks Scissors" },
    { win: "tree", loss: "magnet", message: "Tree is not affected by Magnet" },
    { win: "tree", loss: "magnet", message: "Tree handles the bullets of Gun" },
    { win: "tree", loss: "magnet", message: "Tree makes Chest" },

    // Magnet wins
    { win: "magnet", loss: "gun", message: "Magnet attracts Gun" },
    { win: "magnet", loss: "scissors", message: "Magnet attracts Scissors" },
];
