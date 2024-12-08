import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth'
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

export async function logout() {
try{ 
    const response = await signOut(auth)
    return response
} catch(err){
    console.log(err.message);
    
}
 


}