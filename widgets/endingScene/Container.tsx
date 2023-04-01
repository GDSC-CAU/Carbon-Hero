import useLink from "../../hooks/useLink";
import Error from "./Error";
import Loading from "./Loading";
import Presenter from "./Presenter";
import {useResult} from "../../hooks/useResult";

const EndingSceneContainer = () => {
    const { isSuccess, isError, sceneData } = useLink({
        sceneName: "Carbon Hero: Save the Planet",
    });

    const {isDefeat, gasDifference} = useResult();

    if (isSuccess) {
        return <Presenter isDefeat={isDefeat} gasDifference={gasDifference} />
    }

    if (isError) {
        return <Error />
    }

    return <Loading />
}

export default EndingSceneContainer
