import {ChakraProvider} from "@chakra-ui/react";
import type {NextPage} from 'next';
import Head from "next/head";
import styles from "../styles/Items.module.css";
import ItemsMenuContainer from '../widgets/items/Container';

const Items: NextPage = () => {
    return (
        <ChakraProvider>
            <div className={styles.container}>
                <Head>
                    <title>CarbonHero</title>
                    <meta name="description" content="Education game for Global Warming"/>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>
                <main className={styles.main}>
                    <ItemsMenuContainer/>
                </main>
            </div>
        </ChakraProvider>
    )
}

export default Items
