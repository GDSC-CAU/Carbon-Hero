import useLink from "../../hooks/useLink";
import Error from "./Error";
import Loading from "./Loading";
import Presenter from "./Presenter";

interface SceneParams {
    path?: string;
}
const LandingSceneContainer = (sceneParams?: SceneParams) => {
    const { isSuccess, isError, sceneData } = useLink({
        sceneName: "Carbon Hero: Save the Earth",
    });

    if (isSuccess) {
        return <Presenter sceneTitle={sceneData.sceneName} nextPageRoute={sceneData.nextPage}/>
    }

    if (isError) {
        return <Error />
    }

    return <Loading />
}

export default LandingSceneContainer
