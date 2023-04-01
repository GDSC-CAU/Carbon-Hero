import Heading1 from "../../components/Heading1";
import Heading2 from "../../components/Heading2";
import LinkToNext from "../../components/LinkToNext";
import {Center} from "@chakra-ui/layout";
import {Card, CardFooter, CardHeader, Container} from "@chakra-ui/react";

interface Props {
  isDefeat?: boolean;
  gasDifference?: number;
}

const Presenter = ({
  isDefeat,
  gasDifference,
}: Props) => {
  if (!isDefeat) {
    return (
      <Center w={'100vw'} h={'100vh'} backgroundImage={'url(/green-earth.jpg)'} backgroundRepeat={'no-repeat'} backgroundPosition={'center'}>
        <Container>
          <Heading1 label={"Congratulation!"} />
          <Card w={"100%"} boxShadow='xs' p='6' rounded='md' >
            <CardHeader padding={6}>
              <Heading2 label={"You saved the earth🌎"} />
              <Heading2 label={"Greenhouse gas is reduced by " + gasDifference?.toFixed(3) + "%"}></Heading2>
            </CardHeader>
            <CardFooter>
              <LinkToNext label={"Go back To Main"} nextPageRoute={""} />
            </CardFooter>
          </Card>
        </Container>
      </Center>
    );
  } else {
    return (
      <Center w={'100vw'} h={'100vh'} backgroundImage={'url(/post-apocalypse.jpg)'} backgroundRepeat={'no-repeat'} backgroundPosition={'center'}>
        <Container>
          <Heading1 label={"You did your best!"} />
          <Card w={"100%"} boxShadow='xs' p='6' rounded='md' >
            <CardHeader padding={6}>
              <Heading2 label={"You'll do better next time."} />
              <Heading2 label={"Greenhouse gas increased by " + gasDifference?.toFixed(3) + "%"}></Heading2>
            </CardHeader>
            <CardFooter>
              <LinkToNext label={"Start game again"} nextPageRoute={""} />
            </CardFooter>
          </Card>
        </Container>
      </Center>
    );
  }
}

export default Presenter
