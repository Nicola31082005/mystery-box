import page from "page";
import { homeView } from "./views/homeView.js";
import { layoutView } from "./middleware/layoutMiddleware.js";
import { boxesView } from "./views/boxesView.js";

page(layoutView)
page('/', homeView)
page('/boxes', boxesView)
// page('/features', featuresView)




// start page
page.start()