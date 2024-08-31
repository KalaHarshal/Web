// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.0/firebase-app.js";
import { getStorage, ref, listAll, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.8.0/firebase-storage.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.0/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyA58xwDbLD6mZy0Te3O_8qQTwroRv2aVdo",
    authDomain: "aimers-746d3.firebaseapp.com",
    databaseURL: "https://aimers-746d3-default-rtdb.firebaseio.com",
    projectId: "aimers-746d3",
    storageBucket: "aimers-746d3.appspot.com",
    messagingSenderId: "1025462992037",
    appId: "1:1025462992037:web:52090a34e091c752e5214c",
    measurementId: "G-J7268LLZD7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

// Function to list all images in a specific folder
export async function fetchAllImages(folderPath) {
    const listRef = ref(storage, folderPath);

    try {
        const res = await listAll(listRef);
        const urls = await Promise.all(res.items.map(async (itemRef) => {
            const url = await getDownloadURL(itemRef);
            return { url, name: itemRef.name }; // Optional: include image name for sorting or display
        }));
        return urls;
    } catch (error) {
        console.error("Error listing images:", error);
    }
}
