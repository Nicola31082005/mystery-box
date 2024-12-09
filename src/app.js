import page from "page";
import { homeView } from "./views/homeView.js";
import { layoutView } from "./middleware/layoutMiddleware.js";
import { boxesView } from "./views/boxesView.js";
import { loginView } from "./views/authentication/loginView.js";
import { registerView } from "./views/authentication/registerView.js";
import ctxEnhancer from "./middleware/ctxEnhancer.js";
import { profileView } from "./views/userProfileView/profileView.js";

//middlewares
page(ctxEnhancer)
page(layoutView)

//routes
page('/', homeView)
page('/boxes', boxesView)
page('/login', loginView)
page('/register', registerView)
page('/boxes', boxesView)
page('/profile', profileView)
// page('/features', featuresView)




// start page
page.start()