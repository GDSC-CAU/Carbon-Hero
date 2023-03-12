import type { NextPage } from 'next'
import styles from "../styles/Story.module.css";
import Head from "next/head";
import useWindowDimensions from  "../widgets/hello/Screen/screen";
import StoryBox from '../widgets/hello/Screen/StoryBox';
import {FC, useState, useEffect} from "react";

import { SimpleGrid, VStack, ChakraProvider, Button, Spacer, Flex, Badge, Text, Box } from "@chakra-ui/react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
  } from "@chakra-ui/react"


const STORY_TXT = [
{txt: `Global warming is an ongoing environmental crisis that has been intensifying over the past few decades. 
It refers to the long-term increase in the Earth's average surface temperature, caused primarily by the build-up of 
greenhouse gases in the atmosphere, such as carbon dioxide and methane. 
The consequences of global warming include rising sea levels, more frequent and severe natural disasters, 
loss of biodiversity, and adverse impacts on human health and livelihoods. 
Despite international efforts to mitigate global warming, such as the Paris Agreement, 
the concentration of greenhouse gases continues to rise, and urgent action is needed to avoid catastrophic outcomes.`}, 
{txt:`hello next page`},
];

const Story: NextPage = () => {

    const { width, height } = useWindowDimensions();
    const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true, })
    const [ pageIdx, setPageIdx ] = useState(0);

    function pageMove(i:number) :void{
        if (i >= 0 && i < STORY_TXT.length) {
            setPageIdx(i)
        }
    }
   
    return (

        <ChakraProvider>

        <div className={styles.container}>
            <Head>
                <title>CarbonHero</title>
                <meta name="description" content="Education game for Global Warming"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={styles.main}>

                <SimpleGrid spacing={height!/100*80}> 
                    <Flex>
                        <Spacer />
                        <Button onClick={onOpen}>Open Story</Button>
                        <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent p='1%' minHeight={height!/100*25} minWidth={width!/100*80} alignSelf='center'>
                            <ModalBody>
                                <ModalCloseButton />
                                <Flex>
                                <Button variant='solid' height='' onClick={() => pageMove(pageIdx - 1)}> {'<'} </Button>
                                <StoryBox content={STORY_TXT[pageIdx].txt} />
                                <Button variant='solid' height='' onClick={() => pageMove(pageIdx + 1)} > {'>'} </Button>
                                </Flex>
                            </ModalBody>
                            </ModalContent>
                        </Modal>
                        <Spacer />
                    </Flex>
                    
                    <Flex>
                        <Button>Prev</Button> {/* navigate to */}
                        <Spacer />
                        <Button>Next</Button> {/* navigate to */}
                    </Flex>
                    
                </SimpleGrid>
            </main>
        </div>
        </ChakraProvider>
    );
}

export default Story
