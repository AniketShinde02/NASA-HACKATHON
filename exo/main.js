// Add interactive behavior to show more details on click
document.addEventListener('DOMContentLoaded', () => {
    const planetCards = document.querySelectorAll('.planet-card');

    planetCards.forEach(card => {
        card.addEventListener('click', () => {
            // Toggle the active class
            card.classList.toggle('active');
            
            // Add detailed descriptions dynamically
            if (!card.querySelector('.detail')) {
                const detailText = document.createElement('p');
                detailText.className = 'detail';
                
                if (card.id === 'gas-giant') {
                    detailText.textContent = 'Gas giants are massive planets composed mostly of hydrogen and helium. Jupiter and Saturn are examples.';
                } else if (card.id === 'neptunian') {
                    detailText.textContent = 'Neptunian planets are similar in composition to Neptune and Uranus, made mostly of icy materials and gases.';
                } else if (card.id === 'super-earth') {
                    detailText.textContent = 'Super-Earths are rocky planets with masses higher than Earth but lower than ice giants. They may or may not have atmospheres.';
                } else if (card.id === 'terrestrial') {
                    detailText.textContent = 'Terrestrial planets are Earth-like worlds with solid surfaces, such as Mercury, Venus, Earth, and Mars.';
                }

                card.appendChild(detailText);
            }
        });
    });
});
