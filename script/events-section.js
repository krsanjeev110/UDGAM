document.addEventListener('DOMContentLoaded', function() {
    // Get all tab buttons and tracks
    const tabs = document.querySelectorAll('.tab-button');
    const tracks = document.querySelectorAll('.events-track');
    
    // Initialize first tab as active
    if (tabs.length > 0) {
        tabs[0].classList.add('active');
        const firstTrack = document.getElementById('indoorTrack');
        if (firstTrack) {
            firstTrack.classList.add('active');
        }
    }

    // Tab switching functionality
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and tracks
            tabs.forEach(t => t.classList.remove('active'));
            tracks.forEach(track => track.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Show corresponding track
            const targetTrack = document.getElementById(`${tab.dataset.tab}Track`);
            if (targetTrack) {
                targetTrack.classList.add('active');
                // Reset animation
                targetTrack.style.animation = 'none';
                targetTrack.offsetHeight; // Trigger reflow
                targetTrack.style.animation = 'scroll 60s linear infinite';
            }
        });
    });

    // Clone cards for infinite scroll
    tracks.forEach(track => {
        const originalCards = Array.from(track.children);
        // Calculate how many sets of cards we need to clone to fill the screen width
        const totalSets = Math.ceil(10 / originalCards.length);
        
        // Clone cards until we have at least 10 cards
        for (let i = 0; i < totalSets; i++) {
            originalCards.forEach(card => {
                const clone = card.cloneNode(true);
                track.appendChild(clone);
            });
        }
    });
}); 