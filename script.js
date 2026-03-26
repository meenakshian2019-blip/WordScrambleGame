const themes = {
    Sports: {
        1: ["soccer", "tennis", "rugby", "golf", "swim", "track", "judo", "darts", "polo", "surf"],
        2: ["cricket", "archery", "bowling", "cycling", "fencing", "skating", "squash", "karate"],
        3: ["baseball", "football", "handball", "softball", "lacrosse", "biathlon", "triathlon"],
        4: ["basketball", "volleyball", "gymnastics", "badminton", "snowboard", "skateboarding"],
        5: ["weightlifting", "equestrian", "mountaineering", "paragliding", "backstroke"]
    },
    Technology: {
        1: ["code", "data", "web", "chip", "tech", "link", "disk", "mail", "byte", "file"],
        2: ["server", "laptop", "mobile", "python", "script", "cloud", "binary", "system"],
        3: ["software", "hardware", "database", "keyboard", "network", "firewall", "security"],
        4: ["artificial", "intelligence", "algorithm", "processor", "interface", "encryption"],
        5: ["microprocessor", "cryptography", "blockchain", "virtualization", "nanotechnology"]
    },
    Space: {
        1: ["moon", "star", "mars", "sun", "void", "nova", "dust", "atom", "orbit", "glow"],
        2: ["planet", "galaxy", "rocket", "comet", "meteor", "nebula", "cosmos", "pulsar"],
        3: ["astronaut", "satellite", "universe", "telescope", "asteroid", "starlight", "spacewalk"],
        4: ["blackhole", "atmosphere", "supernova", "exoplanet", "lightyear", "gravity"],
        5: ["constellation", "interstellar", "astrophysics", "exosphere", "observatory"]
    },
    Nature: {
        1: ["tree", "leaf", "rain", "wind", "rock", "river", "lake", "bush", "dirt", "seed"],
        2: ["forest", "flower", "desert", "island", "valley", "canyon", "jungle", "ocean"],
        3: ["mountain", "glacier", "volcano", "wildlife", "habitat", "creature", "ecosystem"],
        4: ["environment", "waterfall", "rainforest", "landscape", "lightning", "hurricane"],
        5: ["biodiversity", "photosynthesis", "metamorphosis", "stratosphere", "thunderstorm"]
    },
    Food: {
        1: ["cake", "rice", "soup", "pear", "corn", "beef", "taco", "fish", "salt", "herb"],
        2: ["pizza", "burger", "cheese", "pasta", "bread", "steak", "apple", "salad"],
        3: ["chocolate", "sandwich", "pancake", "burrito", "dessert", "avocado", "seafood"],
        4: ["spaghetti", "hamburger", "pineapple", "broccoli", "mushroom", "breakfast"],
        5: ["gastronomy", "confectionery", "mediterranean", "charcuterie", "ingredients"]
    },
    Travel: {
        1: ["map", "bus", "car", "ship", "trip", "road", "city", "camp", "suit", "gate"],
        2: ["plane", "train", "hotel", "beach", "resort", "ticket", "island", "flight"],
        3: ["passport", "vacation", "luggage", "journey", "airport", "tourist", "explore"],
        4: ["adventure", "destination", "itinerary", "backpack", "souvenir", "landmark"],
        5: ["transportation", "expedition", "sightseeing", "wanderlust", "locomotion"]
    },
    Music: {
        1: ["song", "beat", "drum", "jazz", "rock", "tune", "band", "sing", "bass", "lyre"],
        2: ["guitar", "piano", "violin", "singer", "rhythm", "melody", "chorus", "concert"],
        3: ["orchestra", "symphony", "keyboard", "trumpet", "festival", "baritone", "acoustic"],
        4: ["instrument", "harmonica", "saxophone", "percussion", "classical", "composer"],
        5: ["improvisation", "ethnomusicology", "masterpiece", "philharmonic", "composition"]
    },
    Movies: {
        1: ["film", "star", "plot", "hero", "cast", "crew", "role", "show", "clip", "epic"],
        2: ["actor", "drama", "horror", "action", "comedy", "cinema", "script", "camera"],
        3: ["director", "producer", "thriller", "romance", "theatre", "prequel", "sequel"],
        4: ["animation", "blockbuster", "character", "screenplay", "hollywood", "cinematic"],
        5: ["cinematography", "documentary", "screenwriter", "masterpiece", "protagonist"]
    },
    Fashion: {
        1: ["hat", "bag", "belt", "shoe", "silk", "wool", "coat", "suit", "ring", "trim"],
        2: ["shirt", "dress", "jacket", "denim", "cotton", "design", "stylist", "makeup"],
        3: ["jewelry", "sneaker", "handbag", "perfume", "fashion", "pattern", "vintage"],
        4: ["accessory", "collection", "wardrobe", "cosmetic", "boutique", "supermodel"],
        5: ["haute-couture", "aesthetic", "extravagant", "trendsetter", "merchandise"]
    },
    Business: {
        1: ["boss", "work", "sale", "cash", "loan", "debt", "bank", "hire", "deal", "firm"],
        2: ["office", "market", "profit", "budget", "career", "retail", "client", "invest"],
        3: ["company", "manager", "startup", "economy", "finance", "meeting", "product"],
        4: ["marketing", "executive", "investment", "strategy", "consumer", "contract"],
        5: ["entrepreneur", "corporation", "negotiation", "partnership", "headquarters"]
    },
    Gaming: {
        1: ["game", "play", "win", "lose", "level", "boss", "quest", "gold", "skin", "hero"],
        2: ["player", "online", "avatar", "console", "arcade", "combat", "server", "eports"],
        3: ["multiplayer", "graphics", "sandbox", "shooter", "strategy", "ranking", "trigger"],
        4: ["controller", "simulation", "platformer", "adventure", "streaming", "gameplay"],
        5: ["microtransaction", "playstation", "metroidvania", "achievements", "speedrun"]
    },
    Education: {
        1: ["book", "pen", "math", "test", "exam", "desk", "note", "read", "page", "draw"],
        2: ["school", "lesson", "study", "degree", "course", "campus", "learn", "tutor"],
        3: ["teacher", "student", "college", "history", "science", "grammar", "library"],
        4: ["university", "knowledge", "homework", "graduate", "curriculum", "classroom"],
        5: ["scholarship", "dissertation", "mathematics", "philosophy", "architecture"]
    }
};

let gameState = {
    currentTheme: "Sports",
    currentLevel: 1,
    unlockedLevels: { Sports: 1 },
    wordPool: [],
    currentWordIndex: 0,
    score: 0,
    timer: null,
    timeLeft: 0,
    correctWord: ""
};

const screens = {
    home: document.getElementById('home-screen'),
    menu: document.getElementById('menu-screen'),
    game: document.getElementById('game-screen'),
    result: document.getElementById('result-screen')
};

function showScreen(key) {
    Object.values(screens).forEach(s => s.classList.remove('active'));
    screens[key].classList.add('active');
}

function init() {
    const select = document.getElementById('theme-select');
    Object.keys(themes).forEach(t => {
        let opt = document.createElement('option');
        opt.value = t; opt.innerText = t;
        select.appendChild(opt);
    });
    gameState.currentTheme = select.value;
    renderLevels();
}

function renderLevels() {
    const ladder = document.getElementById('level-ladder');
    ladder.innerHTML = '';
    const unlocked = gameState.unlockedLevels[gameState.currentTheme] || 1;
    for (let i = 1; i <= 5; i++) {
        const btn = document.createElement('button');
        btn.className = `lvl-btn ${i <= unlocked ? 'unlocked' : ''}`;
        btn.innerText = `Level ${i}`;
        btn.disabled = i > unlocked;
        btn.onclick = () => startLevel(i);
        ladder.appendChild(btn);
    }
}

function startLevel(lvl) {
    gameState.currentLevel = lvl;
    gameState.score = 0;
    gameState.currentWordIndex = 0;
    const pool = themes[gameState.currentTheme][lvl];
    gameState.wordPool = [...pool].sort(() => 0.5 - Math.random()).slice(0, 5);
    showScreen('game');
    loadWord();
}

function scramble(w) {
    let s = w.split('').sort(() => 0.5 - Math.random()).join('');
    return (s === w) ? scramble(w) : s;
}

function startTimer() {
    clearInterval(gameState.timer);
    gameState.timeLeft = 25 - (gameState.currentLevel * 2);
    document.getElementById('timer-text').innerText = gameState.timeLeft;
    
    gameState.timer = setInterval(() => {
        gameState.timeLeft--;
        document.getElementById('timer-text').innerText = Math.max(0, gameState.timeLeft);
        
        if (gameState.timeLeft <= 0) {
            clearInterval(gameState.timer);
            handleTimeOut();
        }
    }, 1000);
}

function handleTimeOut() {
    const display = document.getElementById('scrambled-word');
    const input = document.getElementById('user-input');
    
    // Visual feedback for missed word
    display.innerText = gameState.correctWord;
    display.style.color = "var(--accent)"; // Turn word red
    input.value = "Time's Up!";
    input.style.borderColor = "var(--accent)";
    input.disabled = true;

    // Wait 2 seconds so the user can see the correct answer
    setTimeout(() => {
        display.style.color = "#fff"; // Reset color
        input.disabled = false;
        input.style.borderColor = "var(--glass-border)";
        gameState.currentWordIndex++;
        loadWord();
    }, 2000);
}

function loadWord() {
    if (gameState.currentWordIndex >= 5) { 
        endLevel(); 
        return; 
    }
    
    const word = gameState.wordPool[gameState.currentWordIndex];
    gameState.correctWord = word;
    
    // UI Reset
    document.getElementById('scrambled-word').innerText = scramble(word);
    document.getElementById('scrambled-word').style.color = "#fff";
    document.getElementById('current-word-num').innerText = gameState.currentWordIndex + 1;
    document.getElementById('user-input').value = '';
    document.getElementById('user-input').disabled = false;
    document.getElementById('hint-display').innerText = "Hint: Press button below";
    
    startTimer();
}

function checkAnswer() {
    const val = document.getElementById('user-input').value.toLowerCase().trim();
    if (val === gameState.correctWord) {
        gameState.score += gameState.timeLeft * 10;
        clearInterval(gameState.timer);
        gameState.currentWordIndex++;
        loadWord();
    } else {
        const input = document.getElementById('user-input');
        input.classList.add('shake');
        setTimeout(() => input.classList.remove('shake'), 400);
    }
}

function showHint() {
    const w = gameState.correctWord;
    document.getElementById('hint-display').innerText = `Hint: ${w[0]}${"_".repeat(w.length-2)}${w[w.length-1]}`;
    gameState.score = Math.max(0, gameState.score - 5);
}

function endLevel() {
    showScreen('result');
    document.getElementById('final-score').innerText = gameState.score;
    let unlocked = gameState.unlockedLevels[gameState.currentTheme] || 1;
    if (gameState.currentLevel === unlocked && unlocked < 5) {
        gameState.unlockedLevels[gameState.currentTheme]++;
    }
}

document.getElementById('start-btn').onclick = () => showScreen('menu');
document.getElementById('back-home-btn').onclick = () => showScreen('home');
document.getElementById('submit-btn').onclick = checkAnswer;
document.getElementById('hint-btn').onclick = showHint;
document.getElementById('menu-btn').onclick = () => { renderLevels(); showScreen('menu'); };
document.getElementById('theme-select').onchange = (e) => {
    gameState.currentTheme = e.target.value;
    gameState.unlockedLevels[gameState.currentTheme] = 1;
    renderLevels();
};
document.getElementById('user-input').onkeypress = (e) => { if(e.key === 'Enter') checkAnswer(); };

init();