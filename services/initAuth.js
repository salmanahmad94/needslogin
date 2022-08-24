import { init } from 'next-firebase-auth'

const initAuth = () => {
  init({
    debug: true, // Set to true to get live updates from next-firebase-auth package about what it's doing.
    authPageURL: '/sign_in',
    appPageURL: '/',
    loginAPIEndpoint: '/api/login', // required
    logoutAPIEndpoint: '/api/logout', // required
    onLoginRequestError: (err) => {
      console.error(err)
    },
    onLogoutRequestError: (err) => {
      console.error(err)
    },
    //firebaseAuthEmulatorHost: 'localhost:9099',


    // SET THIS ADMIN CONFIG 
    // Must be used for any API calls since they happen on the server. The package next-firebase-auth uses FirebaseAdmin under the hood to set cookies which must be initiated using this configuration option.
    // https://firebase.google.com/docs/admin/setup#initialize-sdk
    
    firebaseAdminInitConfig: { 
      credential: {
        projectId: 'immersifieddev',
        clientEmail: 'example-abc123@my-example-app.iam.gserviceaccount.com', // INSERT YOUR CLIENT EMAIL
        // The private key must not be accessible on the client side.
        privateKey: process.env.FIREBASE_PRIVATE_KEY ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n') : undefined, // GET PRIVATE KEY FROM .ENV.LOCAL FILE: https://github.com/gladly-team/next-firebase-auth/discussions/95#discussioncomment-997495
      },
      databaseURL: 'https://immersifieddev.firebaseio.com',
    },
    // Use application default credentials (takes precedence over firebaseAdminInitConfig if set)
    // useFirebaseAdminDefaultCredential: true,
    firebaseClientInitConfig: {
      apiKey: 'AIzaSyDpyosmzmYlDeDPZbpeMzJfeMeEzkgx3BE', // required
      authDomain: 'immersifieddev.firebaseapp.com',
      databaseURL: 'https:/immersifieddev.firebaseio.com',
      projectId: 'immersifieddev',
    },
    cookies: {
      name: 'ExampleApp', // required
      // Keys are required unless you set `signed` to `false`.
      // The keys cannot be accessible on the client side.
      /*
      keys: [
        process.env.COOKIE_SECRET_CURRENT,
        process.env.COOKIE_SECRET_PREVIOUS,
      ],*/
      httpOnly: true,
      maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
      overwrite: true,
      path: '/',
      sameSite: 'strict',
      secure: false, // set this to false in local (non-HTTPS) development
      signed: false,
    },
    onVerifyTokenError: (err) => {
      console.error(err)
    },
    onTokenRefreshError: (err) => {
      console.error(err)
    },
  })
}

export default initAuth