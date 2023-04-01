import type {NextPage} from 'next'
import Head from "next/head";
import {ChakraProvider} from "@chakra-ui/provider";
import EndingSceneContainer from '../widgets/endingScene/Container';

const Ending: NextPage = () => {
    return (
        <ChakraProvider>
            <Head>
                <title>CarbonHero</title>
                <meta name="description" content="Education game for Global Warming" />
                <link rel="icon" href="/planet-earth.png" />
            </Head>
            <EndingSceneContainer />
        </ChakraProvider>
    );
}

export default Ending
