import { auth } from "../../firebase"


export default async function (ctx, next) {
    
    ctx.isAuthenticated = () => !!auth.currentUser
    ctx.getUser = () => auth.currentUser
    next()
}