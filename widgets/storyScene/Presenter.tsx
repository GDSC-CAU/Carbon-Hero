import {Center} from "@chakra-ui/layout";
import {Card, CardBody, CardFooter, CardHeader, Text} from "@chakra-ui/react";
import Heading2 from "../../components/Heading2";
import {STORY_TXT} from "../../data/main_story";
import {User} from "firebase/auth";
import LinkToNext from "../../components/LinkToNext";
import AuthContainer from "../auth/Container";

interface Props {
  sceneTitle?: string;
  user: User | null | undefined;
  labelForLinkToNext?: string;
}

const Presenter = ({
  sceneTitle,
  user,
  labelForLinkToNext
                   }: Props) => {

  return ( 
    <Center w={'100vw'} h={'100vh'} backgroundImage={'url(https://firebasestorage.googleapis.com/v0/b/green-5be28.appspot.com/o/globe-1849404.png?alt=media&token=11913eda-8200-4877-834d-f5622b989f4d)'} backgroundRepeat={'no-repeat'} backgroundPosition={'center'}>
      <Card w={"50%"} boxShadow='xs' p='6' rounded='md' bg='white'>
        <CardHeader>
          <Heading2 label={"Story is..."} />
        </CardHeader>
        <CardBody>
          <Text>{STORY_TXT}</Text>
        </CardBody>
        <CardFooter>
          {user ? <LinkToNext label={"Play Game"} nextPageRoute={labelForLinkToNext} /> : <AuthContainer />}
        </CardFooter>
      </Card>
    </Center>
    );
}

export default Presenter
