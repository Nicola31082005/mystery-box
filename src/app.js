import page from "page";
import { homeView } from "./views/homeView.js";
import { layoutView } from "./middleware/layoutMiddleware.js";
import { boxesView } from "./views/boxesView.js";
import { loginView } from "./views/loginView.js";
import { registerView } from "./views/registerView.js";
import ctxEnhancer from "./middleware/ctxEnhancer.js";

//middlewares
page(ctxEnhancer)
page(layoutView)

//routes
page('/', homeView)
page('/boxes', boxesView)
page('/login', loginView)
page('/register',registerView)

// page('/features', featuresView)




// start page
page.start()