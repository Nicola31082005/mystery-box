import { auth } from "../../firebase"



export default async function (ctx, next) {
  // Ensure that the Firebase user is initialized before proceeding
  const waitForAuthState = () =>
    new Promise((resolve) => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        unsubscribe(); // Stop listening after we get the state
        resolve(user); // Resolve the promise with the user
      });
    });

  // Wait for Firebase to determine the auth state
  const user = await waitForAuthState();

  // Set up properties in the context
  ctx.isAuthenticated = !!user;
  ctx.getUser = () => user;

  // Pass control to the next middleware or route
  next();
}