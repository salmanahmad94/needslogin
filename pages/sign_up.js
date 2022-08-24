import React, { useState, useEffect }from 'react';
import Layout from '@/components/layout';
import TWSignUp from '@/components/TailwindSignUp';
import {
  withAuthUser,
  withAuthUserTokenSSR,
  AuthAction,
} from 'next-firebase-auth'
import { initializeApp, getApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {

  // Set an undefined firebaseAuthObject as the component's state to be used by the client side code.

  const [ firebaseAuthObject, setFirebaseAuthObject ] = useState();
  ////// both of these result in the following error:
  
  /// FirebaseError: Firebase: No Firebase App '[DEFAULT]' has been created - call Firebase App.initializeApp() (app/no-app)
  
  /// However, next-firebase-auth should have taken care of the initalizing already, as called out here:
  /// https://github.com/gladly-team/next-firebase-auth/blob/main/example/components/FirebaseAuth.js
  
  //const app = getApp()
  // const auth = getAuth(app);  

  // Once the component loads, initiate the Firebase auth object. It must be called in useEffect because it guarantees that once the component has loaded,
  // any cookies/sessions by the next-firebase-auth for initializing its own Firebase object  will already be set. This way, we can use the same Firebase SDK being used by next-firebase-auth.

  useEffect(() => {
    const auth = getAuth()
    setFirebaseAuthObject(auth);
  }, [getAuth])

  const doSignUp = (email, pw) => {
    console.log(email)
    console.log(pw)

    createUserWithEmailAndPassword(firebaseAuthObject, email, pw) // Pass firebaseAuthObject from state to signup function.
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      alert(user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(error.message)
      // ..
    });
  }

  return (
    <Layout>
      <div>
        <TWSignUp onSignUp={(email, pw) => doSignUp(email, pw)} />
      </div>
    </Layout>      
  )
}

/*export const getServerSideProps = withAuthUserTokenSSR({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
})()*/

export default withAuthUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
})(SignUp)