import page from "page"
import { html, render } from "lite-html"


export default function ctxEnhancer(ctx, next) {
    
    ctx.render = () => render(template, mainEl)


    next()
}