import { auth } from "../../firebase"


export default async function (ctx, next) {
    
   // Set up the listener for authentication state changes
  auth.onAuthStateChanged(user => {
    // Store the user in ctx when authentication state changes
    ctx.isAuthenticated = !!user;
    
    // Re-render the page with the updated auth state
    ctx.render(ctx.bodyTemplate);
  });

  ctx.getUser = () => auth.currentUser;

  // Pass control to the next middleware
  next();
}