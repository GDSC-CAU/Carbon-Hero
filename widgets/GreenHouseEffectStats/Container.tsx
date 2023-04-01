import Error from "./Error";
import Loading from "./Loading";
import Presenter from "./Presenter";

import {useGreenHouseGases} from "../../hooks/useGreenHouseGases";

const GreenHouseEffectStatsContainer = () => {
    const success = true
    const error = false;
    const {greenHouseEffect, greenHouseGases, greenHouseEffectChangeRate} = useGreenHouseGases();
    if (success) {
        return (
          <Presenter
          greenHouseEffectChangeRate={greenHouseEffectChangeRate}
          greenHouseEffect={greenHouseEffect}
          greenHouseGases={greenHouseGases}
        />
        )
    }

    if (error) {
        return <Error />
    }

    return <Loading />
}

export default GreenHouseEffectStatsContainer
