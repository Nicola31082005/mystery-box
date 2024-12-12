import page from "page";
import { homeView } from "./views/homeView.js";
import { layoutView } from "./middleware/layoutMiddleware.js";
import { boxesView } from "./views/boxesView/boxesView.js";
import { loginView } from "./views/authentication/loginView.js";
import { registerView } from "./views/authentication/registerView.js";
import ctxEnhancer from "./middleware/ctxEnhancer.js";
import { profileView } from "./views/userProfileView/profileView.js";
import { aboutView } from "./views/about/aboutView.js";
import { learnMore } from "./views/about/learn-moreView.js";
import { suprisePage } from "./views/boxesView/surpriseBoxesView.js";

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
page('/about', aboutView)
page('/about/learn-more', learnMore)
page('/boxes/surprise', suprisePage)




// start page
page.start()