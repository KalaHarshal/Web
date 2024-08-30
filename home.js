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

