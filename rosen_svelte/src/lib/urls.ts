const basePath = 'http://127.0.0.1:8000'

const loginURL = `${basePath}/login/`,
signupURL = `${basePath}/signup/`,
// fetchProfileURL = `${basePath}/profile/`,
updateProfileURL = `${basePath}/patch/`,
fetchProfileURL = `${basePath}/fetchprofile/`,
iconsURL = `http://localhost:5173/icons.json`;

export { 
    basePath,
    loginURL,
    signupURL,
    iconsURL,
    fetchProfileURL,
    updateProfileURL,
}