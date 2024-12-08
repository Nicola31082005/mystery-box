import page from "page";
import { homeView } from "./views/homeView.js";
import { layoutView } from "./middleware/layoutMiddleware.js";
import { boxesView } from "./views/boxesView.js";
import { loginView } from "./views/loginView.js";

page(layoutView)
page('/', homeView)
page('/boxes', boxesView)
page('/login', loginView)

// page('/features', featuresView)




// start page
page.start()