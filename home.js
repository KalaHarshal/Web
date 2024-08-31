
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
