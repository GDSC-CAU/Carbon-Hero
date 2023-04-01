import {
  Button,
  Divider,
  Heading,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure
} from "@chakra-ui/react";

interface Props {}

const greenHouseGasExplanation = `
Green House Gases are composed of 4 major gases. CO2, N2O, CH4, CFCs.  
Each of the gases has different commitment to green house effect.
There are a few attributes for the green house gases.
Concentration, Absorption, Lifetime, and the Vertical Distribution.
You can check more details about green house gases via following link!
`;

const concentrationExp = `
Concentration means how much gas in the atmosphere.
The more the concentration gets, The hotter the Earth gets.
`;

const absorptionExp = `
Apsorption means how many(various kind of) infrared radio wave
are absorbed by the gas.
If the absorption is high, then the probability to contribute green house effect goes high.
`;

const lifetimeExp = `
Lifetime means how long the gas lives in the atmosphere.
The longer it lives, The hotter the Earth gets.
`

const verticalDistributionExp = `
Vertical Distribution means how the gas is distributed along the atmosphere
in vertical direction. From bottom to top.
It tells us the contribution of gas by each layer of the atmosphere.
`;

const statHelpText = "You can check current state of green house gases on your top left!";
const timeHelpText = "You can check the current year on your top right!";
const itemHelpText = `
You can take actions to decrease the green house effect via a button on the bottom right!
The Action items will tell you what are the actions you can take in the real world.
Please keep in mind! You can save the Earth!
`;
const Presenter = ({}: Props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button
          position={"fixed"}
          left={"2.5%"}
          bottom={"10%"}
          zIndex={100}
          padding={10}
          fontSize={"lg"}
          fontWeight={"extrabold"}
          onClick={onOpen}
        >
          How To Play?
        </Button>
        <Modal isCentered isOpen={isOpen} onClose={onClose} size={"xl"}>
          <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(10px) hue-rotate(90deg)'
          />
          <ModalContent>
            <ModalHeader>
              <Heading>{"How To Play?"}</Heading>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Heading as={"h2"} size={"lg"}>{"What are the Stats?"}</Heading>
              <Text>{statHelpText}</Text>
              <Text>{greenHouseGasExplanation}</Text>
              <Divider height={3}/>
              <Text fontWeight={800}>{concentrationExp}</Text>
              <Divider height={3}/>
              <Text fontWeight={800}>{absorptionExp}</Text>
              <Divider height={3}/>
              <Text fontWeight={800}>{lifetimeExp}</Text>
              <Divider height={3}/>
              <Text fontWeight={800}>{verticalDistributionExp}</Text>
              <Divider height={3}/>
              <Link color={"orange.500"} href={"https://climate.nasa.gov/causes/"} target={"_blank"}>
                {"'Causes of Climate Change' at NASA"}
              </Link>
              <Divider height={3}/>
              <Text>{timeHelpText}</Text>
              <Divider/>
              <Heading as={"h2"} size={"lg"}>{"How to take Climate Actions?"}</Heading>
              <Text>{itemHelpText}</Text>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Back To Game</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}

export default Presenter
