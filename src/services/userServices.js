import { signInWithEmailAndPassword } from 'firebase/auth'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export async function login(email, password) {
try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    return userCredential

} catch(err){
    console.log(err.message);
}
}

export async function register(email, password) {
try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    return userCredential

} catch(err){
    console.log(err.message);
}
}