import Error from "./Error";
import Loading from "./Loading";
import Presenter from "./Presenter";

const HelpTextContainer = () => {
    const success = true
    const error = true

    if (success) {
        return <Presenter />
    }

    if (error) {
        return <Error />
    }

    return <Loading />
}

export default HelpTextContainer
