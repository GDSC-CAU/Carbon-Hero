import {Card, CardBody, CardFooter, CardHeader, Heading, Text} from "@chakra-ui/react";
import LinkToNext from "../LinkToNext";
import {Center} from "@chakra-ui/layout";

interface Props {}

const gameOverMessage = `
Good Job! You did what should be done for saving the Earth.
This game is over now, but please keep taking actions like what you saw 
while playing this game.
Because of your efforts, the Earth is a little bit better. 
In order for you and your descendants to live on Earth for so many years to come, 
the efforts of people like you are desperately needed.
`;
const GameOverSign = ({}: Props) => {
    return (
      <Center position={"fixed"} left={0} top={0} zIndex={100} width={"100%"} height={"100%"}>
        <Card width={"2xl"} height={"2xl"}>
            <CardHeader>
                <Heading size='xl'>Game Over!</Heading>
            </CardHeader>
            <CardBody>
                <Text fontSize={"lg"}>
                    {gameOverMessage}
                </Text>
            </CardBody>
            <CardFooter>
                <LinkToNext label={"Check the result"} nextPageRoute={"/ending"} />
            </CardFooter>
        </Card>
      </Center>
    )
}

export default GameOverSign
