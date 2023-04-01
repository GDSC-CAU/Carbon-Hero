import Error from "./Error";
import Loading from "./Loading";
import Presenter from "./Presenter";
import {useFirebaseAuthState, useFirebaseSignIn, useFirebaseSignOut} from "../../hooks/useFirebase";

const AuthContainer = () => {
    const {signIn, error} = useFirebaseSignIn();
    const {signOut, loading} = useFirebaseSignOut();
    const {user} = useFirebaseAuthState();

    if (error) return <Error />

    if (loading) return <Loading />

    return <Presenter user={user} signIn={signIn} signOut={signOut} />
}

export default AuthContainer
