// Mobile Nav
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Workflow Animation
const workflowSteps = document.querySelectorAll('.workflow-step');
let currentStep = 0;

function animateWorkflow() {
    workflowSteps.forEach((step, index) => {
        if (index === currentStep) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });
    currentStep = (currentStep + 1) % workflowSteps.length;
}

setInterval(animateWorkflow, 1500);

// Interactive Demo
const optimizeBtn = document.getElementById('optimize-btn');
const promptTextarea = document.getElementById('prompt-textarea');
const optimizedPromptOutput = document.getElementById('optimized-prompt-output');
const resultingOutput = document.getElementById('resulting-output');

const sampleOutputs = {
    "a futuristic city": "A sprawling metropolis of shimmering chrome towers that pierce the clouds, with flying vehicles weaving through neon-lit canyons and holographic advertisements flickering in the perpetual twilight.",
    "a friendly robot": "A small, round robot with large, expressive digital eyes, a cheerful synthesized voice, and a multi-tool appendage that it uses to help with household chores.",
    "a magical forest": "A forest where the trees have silver leaves that chime in the wind, the ground is covered in glowing moss, and mythical creatures peek from behind ancient, moss-covered stones.",
};

optimizeBtn.addEventListener('click', () => {
    const prompt = promptTextarea.value.toLowerCase();
    let optimizedPrompt = `Generate a detailed, vivid, and imaginative description of ${prompt}. Focus on sensory details, unique features, and a strong sense of atmosphere.`;
    
    let output = "I'm sorry, I don't have a pre-written output for that prompt. Try one of the examples!";
    for (const key in sampleOutputs) {
        if (prompt.includes(key)) {
            output = sampleOutputs[key];
            break;
        }
    }

    optimizedPromptOutput.textContent = optimizedPrompt;
    resultingOutput.textContent = output;
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
