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
  ////// both of these result in the following error:
  
  /// FirebaseError: Firebase: No Firebase App '[DEFAULT]' has been created - call Firebase App.initializeApp() (app/no-app)
  
  //const app = getApp()
  //const auth = getAuth(app);  
  
  //const auth = getAuth()

  const doSignUp = (email, pw) => {
    console.log(email)
    console.log(pw)
    console.log(auth)

    createUserWithEmailAndPassword(auth, email, password)
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