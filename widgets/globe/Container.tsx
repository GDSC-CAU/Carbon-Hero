import Error from "./Error";
import Loading from "./Loading";
import Presenter from "./Presenter";
import useGlobe from "../../hooks/useGlobe";

import {useGreenHouseGases} from "../../hooks/useGreenHouseGases";

const GlobeContainer = () => {
    const { isSuccess, globe, countries, polygonData, globeData } = useGlobe();
    const {greenHouseGases} = useGreenHouseGases();
    if (isSuccess) {
        return (
          <Presenter
            globe={globe}
            countries={countries}
            currentGreenHouseGases={greenHouseGases}
            polygonData={polygonData}
            globeData={globeData}
        />
        )
    }

    if (!isSuccess) {
        return <Error />
    }

    return <Loading />
}

export default GlobeContainer
