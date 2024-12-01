
const verifyEmailTemplate = ({name, verifyEmailUrl}) =>{
    return `
    <main>
     <h1>rems<span style="color: rgb(192,108,223);">Vento</span></h1>
     <h2 style="margin: 1rem 0;">Hi ${name}</h2>,

     <div>
     <h3 style="margin-top: 1rem;">Click the button below to verify your email</h3>
     <a style="padding: 0.5rem 1rem; background:  rgb(192,108,223); color: white; border-radius: 2rem"  href=${verifyEmailUrl}>Verify Email</a>
     </div>
    </main>
    `
}


export default verifyEmailTemplate;