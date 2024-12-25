document.addEventListener('DOMContentLoaded', () => {
    const speak = () => {
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance('Hi, I am Shreya!');
        utterance.lang = 'en-US';

        // Handle voice selection
        const voices = synth.getVoices();
        if (voices.length > 0) {
            utterance.voice = voices.find(voice => voice.name.includes('Female')) || voices[0];
            synth.speak(utterance);
        } else {
            console.log("Voices not ready. Retrying...");
            setTimeout(speak, 100);
        }
    };

    // Trigger speak as soon as voices are ready
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = speak;
    } else {
        speak(); // Fallback for browsers without onvoiceschanged
    }

    // Initially show the girl's image only
    document.querySelector('.girl').style.display = 'block';
    document.getElementById('greeting').style.opacity = '1';
    document.querySelector('.gift').style.display = 'none';
    
    // Hide the Christmas tree and decorations initially
    document.querySelector('.christmas-tree').style.display = 'none';
    document.querySelector('.santa').style.display = 'none';
    document.querySelector('.gift').style.display = 'none';

    // After a delay, hide the girl's image and show the Christmas tree and decorations
    setTimeout(() => {
        // Hide the girl's image and greeting
        document.querySelector('.girl').style.display = 'none';
        document.getElementById('greeting').style.opacity = '0'; 

        // Show the Christmas tree and greeting
        setTimeout(() => {
            document.getElementById('christmasGreeting').style.opacity = '1'; // Show Christmas greeting
            document.querySelector('.christmas-tree').style.display = 'block'; // Show tree
            document.querySelector('.santa').style.display = 'block'; // Show Santa
            document.querySelector('.gift').style.display = 'block'; // Show gifts
        }, 500);
    }, 6000); // Show Christmas tree after 3 seconds

    // Button click to toggle the gifts visibility
    const btnGift = document.querySelector('.btnGift');
    const giftsContainer = document.querySelector('.gifts-container');
    
    btnGift.addEventListener('click', () => {
        // Toggle the visibility of the gifts
        if (giftsContainer.style.display === 'none' || giftsContainer.style.display === '') {
            giftsContainer.style.display = 'flex';
        } else {
            giftsContainer.style.display = 'none';
        }
    });
});
// Show the gifts container and "Thank You" text after 1 second
setTimeout(function() {
    // const giftsContainer = document.querySelector('.gifts-container');
    const thankYouText = document.getElementById('thankYouText');
    
    // Make gifts container visible
    // giftsContainer.style.display = 'flex';
    
    // Show the "Thank You" text
    thankYouText.style.display = 'block';
}, 9000); // 1000ms = 1 second

