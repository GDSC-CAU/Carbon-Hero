import useLink from "../../hooks/useLink";
import Error from "./Error";
import Loading from "./Loading";
import Presenter from "./Presenter";
import {useFirebaseAuthState} from "../../hooks/useFirebase";

interface SceneParams {
    path?: string;
}
const StorySceneContainer = () => {
    const { isSuccess, isError, sceneData } = useLink({
        sceneName: "story",
        nextPage: "main"
    });
    const {user, loading, error} = useFirebaseAuthState();

    if (isSuccess) {
        return <Presenter
                user={user}
                sceneTitle={sceneData.sceneName} 
                labelForLinkToNext={sceneData.nextPage}
        />
    }

    if (isError) {
        return <Error />
    }

    return <Loading />
}

export default StorySceneContainer
