// Add interactivity if needed

document.addEventListener('DOMContentLoaded', function() {
    console.log('Dashboard loaded');
    // Example: Show alert when an AI analysis is complete
    // document.querySelector('.image-processing').innerText = 'AI Analysis Complete!';
});

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
        document.querySelector('.content').style.marginLeft = '0';
    } else {
        sidebar.classList.add('open');
        document.querySelector('.content').style.marginLeft = '270px'; // Adjust for sidebar width
    }
}

function updateDateTime() {
    const now = new Date();
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    document.getElementById('date-time').innerText = now.toLocaleDateString('en-US', options);
}

// Update date and time every second
setInterval(updateDateTime, 1000);

// Initial call to display the date and time immediately
updateDateTime();
