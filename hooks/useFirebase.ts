import {useAuthState, useSignInWithGoogle, useSignOut} from "react-firebase-hooks/auth";
import {auth} from "./utils/dbRefs";

export const useFirebaseSignIn = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const signIn = () => signInWithGoogle();
  return {signIn, user, loading, error};
}

export const useFirebaseSignOut = () => {
  const [signOut, loading, error] = useSignOut(auth);
  return {signOut, loading, error};
}

export const useFirebaseAuthState = () => {
  const [user, loading, error] = useAuthState(auth);
  return {user, loading, error};
}
