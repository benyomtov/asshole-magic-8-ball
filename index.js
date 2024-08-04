document.addEventListener('DOMContentLoaded', () => {
    const answers = [
        "It is certain you will fail.",
        "It will be dastardly.",
        "Doubtful you will survive.",
        "*screams like a beast*",
        "You may be doomed.",
        "You will perish in flames.",
        "Despair is the only option.",
        "You are a dumpster fire.",
        "You will be consumed.",
        "Hellish nightmares await.",
        "You will be annihilated.",
        "You are a thundercunt.",
        "Pray. Pray for death.",
        "The end is nigh.",
        "Only the darkness awaits.",
        "Evil lurks in every corner.",
        "No chance of survival.",
        "A unicorn will shit on you.",
        "Feces lurks in your soul.",
        "Leeches are real."
    ];

    const shakeBtn = document.getElementById('shake-btn');
    const answerEl = document.getElementById('answer');

    // Show default message on page load
    answerEl.textContent = "Ask me anything...";
    answerEl.style.opacity = 1; // Ensure opacity is set to 1 on page load

    shakeBtn.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * answers.length);
        const randomAnswer = answers[randomIndex];
        
        // Fade out the answer, update text, and fade in
        answerEl.style.opacity = 0;
        setTimeout(() => {
            answerEl.textContent = randomAnswer;
            answerEl.style.opacity = 1;
        }, 300); // Fade out duration in ms
    });
});


