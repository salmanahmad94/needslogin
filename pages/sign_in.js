import Layout from '@/components/layout';
import TWSignIn from '@/components/TailwindSignIn';
import {
  withAuthUser,
  withAuthUserTokenSSR,
  AuthAction,
} from 'next-firebase-auth'

const SignIn = () => {
  return (
    <Layout>
      <div>
        <TWSignIn />
      </div>
    </Layout>      
  )
}

export const getServerSideProps = withAuthUserTokenSSR({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
})()

export default withAuthUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
})(SignIn)