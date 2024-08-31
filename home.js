
// Add interactivity if needed
// home.js
import { storage } from './firebase.js';
import { ref, getDownloadURL } from 'firebase/storage';
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



async function fetchImage(imagePath) {
    const imageRef = ref(storage, imagePath);
    try {
        const url = await getDownloadURL(imageRef);
        return url;
    } catch (error) {
        console.error("Error fetching image:", error);
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    const imagePath = 'images/example.jpg'; // Adjust the path as needed
    const imageUrl = await fetchImage(imagePath);

    if (imageUrl) {
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        imgElement.alt = 'Example Image';
        document.querySelector('.content').appendChild(imgElement); // Append image to .content
    }
});
document.getElementById('logout-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Show a confirmation alert before logging out
    const confirmLogout = confirm("Are you sure you want to log out?");

    if (confirmLogout) {
        // Perform any additional logout logic here if needed

        // Redirect to the login page
        window.location.href = 'login.html';
    } else {
        // If the user cancels the logout, do nothing
        return;
    }
});
