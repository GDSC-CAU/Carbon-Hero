import type {NextPage} from 'next'
import Head from "next/head";
import {ChakraProvider} from "@chakra-ui/provider";
import GlobeContainer from "../widgets/globe/Container";
import GreenHouseEffectStatsContainer from "../widgets/GreenHouseEffectStats/Container";
import {customTheme} from "../theme/theme";
import PlayTimeContainer from "../widgets/playtimeIndicator/Container";
import ItemsMenuContainer from "../widgets/items/Container";
import {useFirebaseAuthState} from "../hooks/useFirebase";
import AuthContainer from "../widgets/auth/Container";
import HelpTextContainer from "../widgets/helptext/Container";

const Main: NextPage<any> = () => {
    const {user} = useFirebaseAuthState();
    return (
        <>
          <Head>
              <title>CarbonHero</title>
              <meta name="description" content="Education game for Global Warming" />
              <link rel="icon" href="/planet-earth.png" />
          </Head>
          <ChakraProvider theme={customTheme}>
            {user ?
              <>
                <GreenHouseEffectStatsContainer />
                <PlayTimeContainer />
                <GlobeContainer />
                <HelpTextContainer />
                <ItemsMenuContainer />
              </>
              :
              <AuthContainer />
            }
          </ChakraProvider>
        </>
    );
}

export default Main
