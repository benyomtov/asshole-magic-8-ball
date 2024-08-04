document.addEventListener('DOMContentLoaded', () => {
    const answers = [
        "Pinocchio shot the sheriff.",
        "Spam is always a pleasure.",
        "A great silence slips on a stone.",
        "*screams like a beast*",
        "An apple approaches at high speed!",
        "Two-finger John ever stuns the onlooker.",
        "A shooting star asked you a question?",
        "Nonsense doesn't like paying taxes.",
        "Sevenworm stole the goods.",
        "Lonely Henry sat down once more.",
        "Too long a stick welcomes spring!",
        "A cat in a hat is a cat in a hat.",
        "He drank life before spitting it out.",
        "I hear that Nancy is very pretty..",
        "He poured rocks in the dungeon of his mind.",
        "He created a pig burger out of beef.",
        "A glittering gem is not enough.",
        "A unicorn will shit on you.",
        "Feces lurks in your soul.",
        "Today, I'll know what brick tastes like."
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


