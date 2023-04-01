import type {NextPage} from 'next'
import Head from "next/head";
import StorySceneContainer from "../widgets/storyScene/Container";
import {ChakraProvider} from "@chakra-ui/react";

const Story: NextPage = () => {

    return (
        <ChakraProvider>
            <Head>
                <title>CarbonHero</title>
                <meta name="description" content="Education game for Global Warming" />
                <link rel="icon" href="/planet-earth.png" />
            </Head>
            <StorySceneContainer/>
        </ChakraProvider>
    );
}

export default Story
