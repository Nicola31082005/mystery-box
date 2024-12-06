import { html } from "lite-html"


const layoutTemplate = (body) => html`




${body}
`

export function layoutView(ctx, next) {
    
    ctx.render = (template) => layoutTemplate(template)  


    next()
}