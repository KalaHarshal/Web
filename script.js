// Basic script for any future interactivity (optional)
document.addEventListener("DOMContentLoaded", () => {
    console.log("Header section loaded successfully.");
});
// Smooth scroll to a section when "Get Started" is clicked
document.querySelector('.cta-button').addEventListener('click', function(event) {
    event.preventDefault();
     window.location.href='login.html';
    });

// Simple scroll animation for feature cards
window.addEventListener('scroll', () => {
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (cardPosition < screenPosition) {
            card.classList.add('active');
        }
    });
});
// Smooth scrolling to "How It Works" section
document.querySelector('.cta-button').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.how-it-works-section').scrollIntoView({ behavior: 'smooth' });
});

document.addEventListener('DOMContentLoaded', function() {
    // Simulating real-time data updates with setInterval
    setInterval(() => {
        document.getElementById('offices-monitored').innerText = getRandomNumber(1000, 1500);
        document.getElementById('alerts-generated').innerText = getRandomNumber(300, 500);
        document.getElementById('compliance-percentage').innerText = getRandomNumber(85, 95) + '%';
        document.getElementById('recent-activities').innerText = getRandomNumber(20, 30);
    }, 3000);
});

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Auto slide every 5 seconds
setInterval(nextSlide, 5000);

  
// script.js

// Example data update function for live data
function updateLiveData() {
    // These would typically come from an API
    const data = {
        postOfficesMonitored: 120,
        alertsGenerated: 45,
        compliancePercentage: '78%',
        recentActivities: 8
    };

    document.getElementById('post-offices-monitored').textContent = data.postOfficesMonitored;
    document.getElementById('alerts-generated').textContent = data.alertsGenerated;
    document.getElementById('compliance-percentage').textContent = data.compliancePercentage;
    document.getElementById('recent-activities').textContent = data.recentActivities;
}

// Example function to initialize map
function initializeMap() {
    // Implement map initialization here (e.g., using Google Maps API)
    console.log('Map would be initialized here.');
}

// Initialize data and map
window.onload = function() {
    updateLiveData();
    initializeMap();
};

// Simulated data for demonstration
document.addEventListener('DOMContentLoaded', () => {
    const monitoredCount = document.getElementById('monitored-count');
    const alertsCount = document.getElementById('alerts-count');
    const compliancePercentage = document.getElementById('compliance-percentage');
    const recentActivities = document.getElementById('recent-activities');
    
    // Simulate fetching data
    setTimeout(() => {
        monitoredCount.textContent = '120';
        alertsCount.textContent = '45';
        compliancePercentage.textContent = '88%';
        recentActivities.textContent = '12';
    }, 1000); // Delay for demo purposes
});
