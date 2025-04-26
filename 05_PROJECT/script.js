// DOM Elements
const textDisplay = document.getElementById('textDisplay');
const textInput = document.getElementById('textInput');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const shareBtn = document.getElementById('shareBtn');
const timerElement = document.getElementById('timer');
const wpmElement = document.getElementById('wpm');
const accuracyElement = document.getElementById('accuracy');
const keystrokesElement = document.getElementById('keystrokes');
const difficultySelect = document.getElementById('difficultySelect');
const timeSelect = document.getElementById('timeSelect');
const themeSelect = document.getElementById('themeSelect');

// Auth Elements
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const logoutBtn = document.getElementById('logoutBtn');
const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const userProfile = document.querySelector('.user-profile');
const usernameElement = document.getElementById('username');
const showLoginBtn = document.getElementById('showLoginBtn');
const showSignupBtn = document.getElementById('showSignupBtn');

// Leaderboard Elements
const leaderboardLink = document.getElementById('leaderboardLink');
const leaderboardModal = document.getElementById('leaderboardModal');
const leaderboardBody = document.getElementById('leaderboardBody');
const leaderboardTimeFilter = document.getElementById('leaderboardTimeFilter');
const leaderboardDifficultyFilter = document.getElementById('leaderboardDifficultyFilter');

// Results Elements
const resultsModal = document.getElementById('resultsModal');
const resultWpm = document.getElementById('resultWpm');
const resultAccuracy = document.getElementById('resultAccuracy');
const resultCorrectChars = document.getElementById('resultCorrectChars');
const resultTotalChars = document.getElementById('resultTotalChars');
const resultAnalysis = document.getElementById('resultAnalysis');
const saveResultBtn = document.getElementById('saveResultBtn');
const tryAgainBtn = document.getElementById('tryAgainBtn');
const resultShareBtn = document.getElementById('resultShareBtn');

// Close Modal Buttons
const closeModalButtons = document.querySelectorAll('.close-modal');

// Text data based on difficulty
const textsByDifficulty = {
    easy: [
        "The quick brown fox jumps over the lazy dog.",
        "All that glitters is not gold.",
        "Actions speak louder than words.",
        "A bird in the hand is worth two in the bush.",
        "Early to bed and early to rise makes a man healthy, wealthy and wise."
    ],
    medium: [
        "To be or not to be, that is the question.",
        "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        "In three words I can sum up everything I've learned about life: it goes on.",
        "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        "Life is what happens when you're busy making other plans."
    ],
    hard: [
        "It is during our darkest moments that we must focus to see the light.",
        "Whenever you find yourself on the side of the majority, it is time to pause and reflect.",
        "The difference between the almost right word and the right word is really a large matter. It's the difference between the lightning bug and the lightning.",
        "I have not failed. I've just found 10,000 ways that won't work.",
        "The future belongs to those who believe in the beauty of their dreams."
    ],
    expert: [
        "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.",
        "The function of education is to teach one to think intensively and to think critically. Intelligence plus character - that is the goal of true education.",
        "Whatever the mind of man can conceive and believe, it can achieve. Thoughts are things! And powerful things at that, when mixed with definiteness of purpose, and burning desire.",
        "Continuous effort - not strength or intelligence - is the key to unlocking our potential.",
        "The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking."
    ]
};

// User data
let currentUser = null;
const mockUsers = [
    { id: 1, username: 'user1', email: 'user1@example.com', password: 'password1' },
    { id: 2, username: 'user2', email: 'user2@example.com', password: 'password2' }
];

// Leaderboard data
let leaderboardData = [
    { id: 1, userId: 1, username: 'user1', wpm: 85, accuracy: 98, difficulty: 'medium', date: '2023-07-15' },
    { id: 2, userId: 2, username: 'user2', wpm: 92, accuracy: 96, difficulty: 'hard', date: '2023-07-14' },
    { id: 3, userId: 1, username: 'user1', wpm: 78, accuracy: 99, difficulty: 'easy', date: '2023-07-13' },
    { id: 4, userId: 3, username: 'speedtyper', wpm: 110, accuracy: 97, difficulty: 'expert', date: '2023-07-12' },
    { id: 5, userId: 4, username: 'keyboard_master', wpm: 105, accuracy: 94, difficulty: 'hard', date: '2023-07-11' }
];

// Test state
let timeLeft = 60;
let timer = null;
let isTestActive = false;
let currentText = '';
let startTime;
let totalKeystrokes = 0;
let correctKeystrokes = 0;
let testHistory = [];
let currentTestId = 0;

// Initialize the app
function init() {
    loadTheme();
    loadUserData();
    setupEventListeners();
    resetTest();
    renderTypingText();
}

// Initialize the typing test with selected options
function resetTest() {
    clearInterval(timer);
    timeLeft = parseInt(timeSelect.value);
    timerElement.textContent = timeLeft;
    textInput.value = '';
    textInput.disabled = true;
    wpmElement.textContent = '0';
    accuracyElement.textContent = '0';
    keystrokesElement.textContent = '0';
    isTestActive = false;
    totalKeystrokes = 0;
    correctKeystrokes = 0;
    startBtn.disabled = false;
    resetBtn.disabled = true;
    shareBtn.disabled = true;
}

// Render typing text based on selected difficulty
function renderTypingText() {
    const difficulty = difficultySelect.value;
    const texts = textsByDifficulty[difficulty];
    currentText = texts[Math.floor(Math.random() * texts.length)];
    
    // Clear previous content
    textDisplay.innerHTML = '';
    
    // Split text into individual characters for styling
    currentText.split('').forEach(char => {
        const charSpan = document.createElement('span');
        charSpan.innerText = char;
        charSpan.classList.add('char');
        textDisplay.appendChild(charSpan);
    });
}

// Start the typing test
function startTest() {
    resetTest();
    renderTypingText();
    textInput.disabled = false;
    textInput.focus();
    startBtn.disabled = true;
    resetBtn.disabled = false;
    isTestActive = true;
    startTime = new Date().getTime();
    currentTestId = Date.now();
    
    // Start the timer
    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;
        
        if (timeLeft === 0) {
            endTest();
        }
    }, 1000);
}

// Calculate WPM
function calculateWPM() {
    const timeElapsed = (new Date().getTime() - startTime) / 1000 / 60; // in minutes
    const wordsTyped = textInput.value.trim().split(/\s+/).length;
    return Math.round(wordsTyped / timeElapsed);
}

// Calculate accuracy
function calculateAccuracy() {
    if (totalKeystrokes === 0) return 0;
    return Math.round((correctKeystrokes / totalKeystrokes) * 100);
}

// Update character styling as user types
function updateCharacterStyling() {
    const inputText = textInput.value;
    const characters = textDisplay.querySelectorAll('.char');
    
    characters.forEach((char, index) => {
        // Remove all previous styling
        char.classList.remove('correct', 'incorrect', 'current');
        
        if (index < inputText.length) {
            // Character has been typed
            if (inputText[index] === char.innerText) {
                char.classList.add('correct');
            } else {
                char.classList.add('incorrect');
            }
        } else if (index === inputText.length) {
            // Current character position
            char.classList.add('current');
        }
    });
}

// End the typing test
function endTest() {
    clearInterval(timer);
    textInput.disabled = true;
    isTestActive = false;
    
    // Calculate final stats
    const finalWPM = calculateWPM();
    const finalAccuracy = calculateAccuracy();
    
    // Update displayed stats
    wpmElement.textContent = finalWPM;
    accuracyElement.textContent = finalAccuracy;
    
    // Save test results
    const testResult = {
        id: currentTestId,
        wpm: finalWPM,
        accuracy: finalAccuracy,
        keystrokes: totalKeystrokes,
        correctKeystrokes: correctKeystrokes,
        difficulty: difficultySelect.value,
        duration: parseInt(timeSelect.value),
        date: new Date().toISOString(),
        userId: currentUser ? currentUser.id : null
    };
    
    testHistory.push(testResult);
    saveResultBtn.disabled = !currentUser;
    shareBtn.disabled = false;
    
    // Show results modal
    showResultsModal(testResult);
}

// Show the results modal with test stats
function showResultsModal(testResult) {
    resultWpm.textContent = testResult.wpm;
    resultAccuracy.textContent = testResult.accuracy + '%';
    resultCorrectChars.textContent = testResult.correctKeystrokes;
    resultTotalChars.textContent = testResult.keystrokes;
    
    // Provide feedback based on WPM
    let feedback = '';
    if (testResult.wpm < 30) {
        feedback = "Keep practicing! Your speed will improve over time.";
    } else if (testResult.wpm < 50) {
        feedback = "Good job! You're at an average typing speed.";
    } else if (testResult.wpm < 70) {
        feedback = "Great typing speed! You're above average.";
    } else if (testResult.wpm < 90) {
        feedback = "Excellent! You're a fast typist.";
    } else {
        feedback = "Amazing! You're in the top tier of typists!";
    }
    
    resultAnalysis.textContent = feedback;
    showModal(resultsModal);
}

// Save the test result to leaderboard
function saveResult(testResult) {
    if (!currentUser) return;
    
    // Add to leaderboard
    const leaderboardEntry = {
        id: leaderboardData.length + 1,
        userId: currentUser.id,
        username: currentUser.username,
        wpm: testResult.wpm,
        accuracy: testResult.accuracy,
        difficulty: testResult.difficulty,
        date: new Date().toISOString().split('T')[0]
    };
    
    leaderboardData.push(leaderboardEntry);
    renderLeaderboard();
}

// Render the leaderboard with filters
function renderLeaderboard() {
    const timeFilter = leaderboardTimeFilter.value;
    const difficultyFilter = leaderboardDifficultyFilter.value;
    
    // Clear previous data
    leaderboardBody.innerHTML = '';
    
    // Filter data based on selections
    let filteredData = [...leaderboardData];
    
    if (difficultyFilter !== 'all') {
        filteredData = filteredData.filter(entry => entry.difficulty === difficultyFilter);
    }
    
    // Sort by WPM (highest first)
    filteredData.sort((a, b) => b.wpm - a.wpm);
    
    // Render leaderboard entries
    filteredData.forEach((entry, index) => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${entry.username}</td>
            <td>${entry.wpm}</td>
            <td>${entry.accuracy}%</td>
            <td>${entry.difficulty}</td>
            <td>${entry.date}</td>
        `;
        
        leaderboardBody.appendChild(row);
    });
}

// Authentication Functions
function login(email, password) {
    const user = mockUsers.find(user => user.email === email && user.password === password);
    
    if (user) {
        currentUser = user;
        updateAuthUI();
        localStorage.setItem('currentUser', JSON.stringify(user));
        return true;
    }
    
    return false;
}

function signup(username, email, password) {
    // Check if user already exists
    const userExists = mockUsers.some(user => user.email === email);
    
    if (userExists) {
        return false;
    }
    
    // Create new user
    const newUser = {
        id: mockUsers.length + 1,
        username,
        email,
        password
    };
    
    mockUsers.push(newUser);
    currentUser = newUser;
    updateAuthUI();
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    
    return true;
}

function logout() {
    currentUser = null;
    updateAuthUI();
    localStorage.removeItem('currentUser');
}

function updateAuthUI() {
    if (currentUser) {
        loginBtn.classList.add('hidden');
        signupBtn.classList.add('hidden');
        userProfile.classList.remove('hidden');
        usernameElement.textContent = currentUser.username;
        saveResultBtn.disabled = false;
    } else {
        loginBtn.classList.remove('hidden');
        signupBtn.classList.remove('hidden');
        userProfile.classList.add('hidden');
        saveResultBtn.disabled = true;
    }
}

function loadUserData() {
    const savedUser = localStorage.getItem('currentUser');
    
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateAuthUI();
    }
}

// Theme Functions
function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    themeSelect.value = savedTheme;
    applyTheme(savedTheme);
}

function applyTheme(theme) {
    document.body.classList.remove('dark-theme', 'focus-theme');
    
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
    } else if (theme === 'focus') {
        document.body.classList.add('focus-theme');
    }
    
    localStorage.setItem('theme', theme);
}

// Modal Functions
function showModal(modal) {
    modal.classList.remove('hidden');
}

function closeModal(modal) {
    modal.classList.add('hidden');
}

// Share result function
function shareResult() {
    const lastResult = testHistory[testHistory.length - 1];
    
    if (!lastResult) return;
    
    const shareText = `I just scored ${lastResult.wpm} WPM with ${lastResult.accuracy}% accuracy on TypeMaster Pro! Can you beat my score? #TypeMasterPro`;
    
    // In a real app, this would use the Web Share API or copy to clipboard
    alert(`Share your result!\n\n${shareText}`);
}

// Setup event listeners
function setupEventListeners() {
    // Test controls
    startBtn.addEventListener('click', startTest);
    resetBtn.addEventListener('click', resetTest);
    shareBtn.addEventListener('click', shareResult);
    
    // Text input events
    textInput.addEventListener('input', () => {
        if (!isTestActive) return;
        
        const inputText = textInput.value;
        totalKeystrokes++;
        keystrokesElement.textContent = totalKeystrokes;
        
        // Check accuracy
        if (inputText.length <= currentText.length) {
            if (inputText[inputText.length - 1] === currentText[inputText.length - 1]) {
                correctKeystrokes++;
            }
        }
        
        // Update stats in real-time
        wpmElement.textContent = calculateWPM();
        accuracyElement.textContent = calculateAccuracy();
        
        // Update character styling
        updateCharacterStyling();
        
        // Check if the text is completed
        if (inputText === currentText) {
            endTest();
        }
    });
    
    // Settings changes
    difficultySelect.addEventListener('change', renderTypingText);
    timeSelect.addEventListener('change', () => {
        timeLeft = parseInt(timeSelect.value);
        timerElement.textContent = timeLeft;
    });
    themeSelect.addEventListener('change', () => {
        applyTheme(themeSelect.value);
    });
    
    // Auth events
    loginBtn.addEventListener('click', () => showModal(loginModal));
    signupBtn.addEventListener('click', () => showModal(signupModal));
    logoutBtn.addEventListener('click', logout);
    
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        if (login(email, password)) {
            closeModal(loginModal);
            loginForm.reset();
        } else {
            alert('Invalid email or password');
        }
    });
    
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('signupUsername').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        const passwordConfirm = document.getElementById('signupPasswordConfirm').value;
        
        if (password !== passwordConfirm) {
            alert('Passwords do not match');
            return;
        }
        
        if (signup(username, email, password)) {
            closeModal(signupModal);
            signupForm.reset();
        } else {
            alert('Email already exists');
        }
    });
    
    showLoginBtn.addEventListener('click', () => {
        closeModal(signupModal);
        showModal(loginModal);
    });
    
    showSignupBtn.addEventListener('click', () => {
        closeModal(loginModal);
        showModal(signupModal);
    });
    
    // Leaderboard events
    leaderboardLink.addEventListener('click', () => {
        renderLeaderboard();
        showModal(leaderboardModal);
    });
    
    leaderboardTimeFilter.addEventListener('change', renderLeaderboard);
    leaderboardDifficultyFilter.addEventListener('change', renderLeaderboard);
    
    // Result actions
    saveResultBtn.addEventListener('click', () => {
        const lastResult = testHistory[testHistory.length - 1];
        saveResult(lastResult);
        alert('Result saved to leaderboard!');
    });
    
    tryAgainBtn.addEventListener('click', () => {
        closeModal(resultsModal);
        resetTest();
        startTest();
    });
    
    resultShareBtn.addEventListener('click', shareResult);
    
    // Close modal buttons
    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            closeModal(modal);
        });
    });
}

// Initialize the app when the page loads
window.addEventListener('DOMContentLoaded', init); 