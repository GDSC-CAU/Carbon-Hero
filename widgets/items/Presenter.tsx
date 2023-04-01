import {
  Box,
  Button,
  Container,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  SimpleGrid,
  Spacer,
  Tooltip,
  useDisclosure
} from "@chakra-ui/react";
import ItemSpecCard from "../../components/ItemSpecCard";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import ItemCards from "./itemcards";
import {ItemDataInterface, ItemSelectInterface} from "../../models/items.interface";

interface Props {
  sceneTitle?: string;
  data: ItemDataInterface[];
  select: (arg1?: any, arg2?: any) => any;
  itemSelected: ItemSelectInterface;
  currItem: ItemDataInterface;
  getCurrItem: (arg1?: any) => any;
  getLastSelection: (arg1?: any) => any;
  phase: number;
}

const Presenter = ( props : Props) => {

    const { width, height } = useWindowDimensions();
    const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: false, })
    
    return (
        <Container> 
            <Tooltip label='Select item'>
                <Button
                  position={"fixed"}
                  right={"2.5%"}
                  bottom={"10%"}
                  zIndex={100}
                  onClick={onOpen}
                  padding={10}
                  fontSize={"lg"}
                  fontWeight={"extrabold"}
                >Take Action!</Button>
            </Tooltip>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay bgColor='blackAlpha.700' />
                <ModalContent 
                    p='1%' 
                    minHeight={height!/100*95} 
                    minWidth={width!/100*95} 
                    alignSelf='center'
                    backgroundColor='whiteAlpha.800'
                    opacity='50%'>
                <ModalBody >
                    <ModalCloseButton backgroundColor='white'/>
                    <SimpleGrid spacing='1%'>  
                        <Heading size='lg' > {props.sceneTitle} </Heading> 
                        <Box minWidth="90%" minHeight={height!/100*55}>
                            <ItemCards
                                phase={props.phase}
                                property={props.data}
                                getCurrItem={props.getCurrItem}
                                selected={props.itemSelected}> </ItemCards>
                        </Box>
                        <Box minWidth={width!/100*90} minHeight={height!/100*20}> 
                            <ItemSpecCard 
                                property={props.currItem} 
                                select={props.select} 
                                selected={props.itemSelected}
                                getLastSelection={props.getLastSelection}></ItemSpecCard>
                        </Box>
                    </SimpleGrid>
                    <Spacer/>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Container>
    );
}

export default Presenter
