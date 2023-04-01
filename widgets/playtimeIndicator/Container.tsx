import Error from "./Error";
import Loading from "./Loading";
import Presenter from "./Presenter";
import {usePlayTime} from "../../hooks/usePlayTime";

const PlayTimeContainer = () => {
    const success = true
    const error = true
    const {playTime} = usePlayTime();
    if (success) {
        return <Presenter playTime={playTime} />
    }

    if (error) {
        return <Error />
    }

    return <Loading />
}

export default PlayTimeContainer
