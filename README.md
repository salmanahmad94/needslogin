I am trying to set up firebase authentication in Next using https://github.com/gladly-team/next-firebase-auth and a sample custom login UI from https://tailwindui.com/components/application-ui/forms/sign-in-forms

I am getting an error on lines 20 - 23 of pages/sign_up.js:

FirebaseError: Firebase: No Firebase App '[DEFAULT]' has been created - call Firebase App.initializeApp() (app/no-app)

However, next-firebase-auth should already have initiated the Firebase app for me, as mentioned on line 7 here:
https://github.com/gladly-team/next-firebase-auth/blob/main/example/components/FirebaseAuth.js
I just can't figure out how to access it