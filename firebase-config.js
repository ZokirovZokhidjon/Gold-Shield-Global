import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAUtEbaQy4Xsbf26qoJfIc_biHCl2Yo2OM",
  authDomain: "gold-shield-b97ad.firebaseapp.com",
  projectId: "gold-shield-b97ad",
  storageBucket: "gold-shield-b97ad.firebasestorage.app",
  messagingSenderId: "603859006579",
  appId: "1:603859006579:web:95ae1b041f53dea252e606",
  measurementId: "G-G42S6EQ3J1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);

# Docker has specific installation instructions for each operating system.
# Please refer to the official documentation at https://docker.com/get-started/

# Pull the Node.js Docker image:
docker pull node:24-slim

# Create a Node.js container and start a Shell session:
docker run -it --rm --entrypoint sh node:24-slim

# Verify the Node.js version:
node -v # Should print "v24.18.0".

# Verify npm version:
npm -v # Should print "11.16.0".
