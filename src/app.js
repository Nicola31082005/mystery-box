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
import { adminView } from "./views/admin/adminPage.js";
import { updateProfilePictureView } from "./views/userProfileView/updatePictureView.js";

//middlewares
page(ctxEnhancer)
page(layoutView)

//routes
page('/', homeView)
page('/login', loginView)
page('/register', registerView)
page('/boxes', boxesView)
page('/boxes/surprise', suprisePage)
page('/about', aboutView)
page('/about/learn-more', learnMore)
page('/profile', profileView)
page('/profile/picture', updateProfilePictureView)

page('/admin',adminView)




// start page
page.start()