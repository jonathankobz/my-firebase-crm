import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js';
import { getFirestore, doc, setDoc } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js';
import { firebaseConfig } from '../src/firebase/firebaseConfig.js';  // Adjust path if necessary

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

document.getElementById('add-user-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('user-email').value;
    const password = document.getElementById('user-password').value;
    const role = document.getElementById('user-role').value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Add user to Firestore
        await setDoc(doc(db, 'users', user.uid), {
            email: email,
            role: role,
            permissions: role === 'admin' ? ['create', 'edit', 'delete'] : ['read']
        });

        console.log('User added successfully');
    } catch (error) {
        console.error('Error adding user:', error);
    }
});
