const localServer = 'http://localhost:5173'
const baseServer = 'http://127.0.0.1:8000'

// path('signup/', views.Signup.as_view()),
// path('login/', views.Login.as_view()),
// path('validatesession/', views.ValidateSession.as_view()),
// path('patch/', views.UpdateProfile.as_view()),
// path('fetchprofile/', views.FetchProfilePrivate.as_view()),
// path('search/', views.Search.as_view()),

const urls = {
	validateSession: baseServer + '/validatesession/',
	fetchProfile: baseServer + '/fetchprofile/',

	userSettings: localServer + '/user/',
}

const allowedNonAuth = [
	'/',
	'/account/signup',
	'/account/login',
]

const notAllowedAuth = [
	'/account/signup',
	'/account/login',
]

export { allowedNonAuth, notAllowedAuth, baseServer, urls }
