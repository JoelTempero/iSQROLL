// ============================================
// iSQROLL - Firebase Configuration
// ============================================

const firebaseConfig = {
    apiKey: "AIzaSyAcoxIIpNjOcpkz-BaJ6e35kXiui68J_KY",
    authDomain: "isqroll-7f137.firebaseapp.com",
    projectId: "isqroll-7f137",
    storageBucket: "isqroll-7f137.firebasestorage.app",
    messagingSenderId: "814828798686",
    appId: "1:814828798686:web:1e7e386cf9b9f429bab84f",
    measurementId: "G-TE86CB9GSD"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize services
const db = firebase.firestore();
const auth = firebase.auth();

// Demo credentials
const DEMO_CREDENTIALS = {
    email: 'demo@isqroll.co.nz',
    password: 'demo123'
};

console.log('🔥 Firebase initialized');
