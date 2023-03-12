import {FC, useState, useEffect} from "react";
import styles from "../../../styles/Story.module.css";
import { SimpleGrid, VStack, ChakraProvider, Button, Spacer, Flex, Badge, Text, Box } from "@chakra-ui/react";


type StoryBoxProps = {
    content: string;
  };

  
const StoryBox: FC<StoryBoxProps> = ({ content }) => (
    <div className={styles.story_box}>
        <Box bg='tomato' p='1%'>
            <p className={styles.story_txt}>
            <Text fontSize='xl' color='white'>{content}</Text>
            </p>
        </Box>
    </div>
);

export default StoryBox;
