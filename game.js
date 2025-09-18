// game.js - Game logic
let playerChoice = null;
let computerChoice = null;

function initGame() {
    const playsGrid = document.getElementById('playsGrid');
    playsGrid.innerHTML = '';

    Object.keys(plays).forEach(playKey => {
        const play = plays[playKey];
        const playElement = document.createElement('div');
        playElement.className = 'play-item';
        playElement.onclick = () => selectPlay(playKey);
        
        playElement.innerHTML = `
            <img src="${play.image}" alt="${play.name}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjNjY2IiByeD0iOCIvPgo8dGV4dCB4PSIzMCIgeT0iMzUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIzMiIgZmlsbD0iI2NjYyIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Pz88L3RleHQ+Cjwvc3ZnPg=='">
            <span>${play.name}</span>
        `;
        
        playsGrid.appendChild(playElement);
    });
}

function selectPlay(playKey) {
    playerChoice = playKey;
    const computerKeys = Object.keys(plays);
    computerChoice = computerKeys[Math.floor(Math.random() * computerKeys.length)];
    
    showBattle();
}

function showBattle() {
    const inventory = document.querySelector('.inventory');
    const battleArea = document.getElementById('battleArea');
    
    inventory.style.display = 'none';
    battleArea.style.display = 'block';
    
    // Show player choice
    document.getElementById('playerIcon').src = plays[playerChoice].image;
    document.getElementById('playerIcon').onerror = function() {
        this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjNjY2IiByeD0iMTAiLz4KPHRleHQgeD0iNTAiIHk9IjU1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iNDAiIGZpbGw9IiNjY2MiIHRleHQtYW5jaG9yPSJtaWRkbGUiPj88L3RleHQ+Cjwvc3ZnPg==';
    };
    document.getElementById('playerName').textContent = plays[playerChoice].name;
    
    // Show computer choice
    document.getElementById('computerIcon').src = plays[computerChoice].image;
    document.getElementById('computerIcon').onerror = function() {
        this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjNjY2IiByeD0iMTAiLz4KPHRleHQgeD0iNTAiIHk9IjU1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iNDAiIGZpbGw9IiNjY2MiIHRleHQtYW5jaG9yPSJtaWRkbGUiPj88L3RleHQ+Cjwvc3ZnPg==';
    };
    document.getElementById('computerName').textContent = plays[computerChoice].name;
    
    setTimeout(showResult, 1000);
}

function showResult() {
    const result = determineWinner();
    const modal = document.getElementById('gameOverModal');
    const modalContent = document.getElementById('modalContent');
    const resultTitle = document.getElementById('resultTitle');
    const resultMessage = document.getElementById('resultMessage');
    
    modal.style.display = 'flex';
    
    // Reset modal classes
    modalContent.className = 'modal-content';
    
    setTimeout(() => {
        modalContent.classList.add('show');
    }, 100);
    
    if (result === 'restart') {
        resultTitle.textContent = 'Draw!';
        resultMessage.textContent = `Both ${plays[playerChoice].name} and ${plays[computerChoice].name} don't counter each other.`;
        modalContent.classList.add('draw');
    } else if (result === 'player') {
        resultTitle.textContent = 'You Win!';
        const customMessage = getCustomMessage(playerChoice, computerChoice);
        resultMessage.textContent = customMessage || `${plays[playerChoice].name} beats ${plays[computerChoice].name}!`;
        modalContent.classList.add('win');
    } else {
        resultTitle.textContent = 'Computer Wins!';
        const customMessage = getCustomMessage(computerChoice, playerChoice);
        resultMessage.textContent = customMessage || `${plays[computerChoice].name} beats ${plays[playerChoice].name}!`;
        modalContent.classList.add('lose');
    }
}

function getCustomMessage(winner, loser) {
    const matchingCase = cases.find(caseItem => 
        caseItem.win === winner && caseItem.loss === loser
    );
    return matchingCase ? matchingCase.message : null;
}

function determineWinner() {
    const playerCounters = plays[playerChoice].counters;
    const computerCounters = plays[computerChoice].counters;
    
    const playerWins = playerCounters.includes(computerChoice);
    const computerWins = computerCounters.includes(playerChoice);
    
    if (!playerWins && !computerWins) {
        return 'restart';
    } else if (playerWins) {
        return 'player';
    } else {
        return 'computer';
    }
}

function resetGame() {
    const modal = document.getElementById('gameOverModal');
    const modalContent = document.getElementById('modalContent');
    const inventory = document.querySelector('.inventory');
    const battleArea = document.getElementById('battleArea');
    
    modalContent.classList.remove('show');
    
    setTimeout(() => {
        modal.style.display = 'none';
        battleArea.style.display = 'none';
        inventory.style.display = 'block';
    }, 300);
    
    playerChoice = null;
    computerChoice = null;
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', initGame);
