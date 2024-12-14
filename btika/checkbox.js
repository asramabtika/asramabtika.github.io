// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBitfNnTmiFr2O8NC9L4JccqamkwrgQx2M",
  authDomain: "btika-bfe28.firebaseapp.com",
  databaseURL: "https://btika-bfe28-default-rtdb.firebaseio.com",
  projectId: "btika-bfe28",
  storageBucket: "btika-bfe28.firebasestorage.app",
  messagingSenderId: "498019828505",
  appId: "1:498019828505:web:bf1547af6b9dfbe01b7b88",
  measurementId: "G-1QZJ0LQX9M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const checkboxRef = ref(database, 'checkboxStatus');

// Ambil status awal dari Firebase
onValue(checkboxRef, snapshot => {
    const data = snapshot.val();
    if (data) {
        checkboxes.forEach(checkbox => {
            checkbox.checked = data[checkbox.id] || false;
        });
    }
});

// Simpan status ke Firebase saat checkbox diubah
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        set(ref(database, `checkboxStatus/${checkbox.id}`), checkbox.checked);
    });
});
