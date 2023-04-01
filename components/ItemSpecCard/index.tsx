import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
  useDisclosure,
  useToast
} from '@chakra-ui/react'
import {StarIcon} from '@chakra-ui/icons'
import {ItemDataInterface, ItemSelectInterface} from '../../models/items.interface';
import {useRef} from "react";

interface itemsSpec {
    property: ItemDataInterface;
    select: (arg1?: any, arg2?: any) => any;
    selected: ItemSelectInterface;
    getLastSelection: (arg1?: any) => any;
};

const ItemSpecCard = ({
    property, select,selected,
    getLastSelection}:itemsSpec) => {
        
    const toast = useToast()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef(null)
    const itemType = property.type;

    const myClick=()=>{
        
        // 선택된 tier 업데이트
        onClose();
        let new_select = selected
        new_select[property.type][property.group-1] += 1
        select(new_select);

        getLastSelection(property);
    }
   
    function str(type: any) {
        throw new Error('Function not implemented.');
    }

    return (
        <Card minH='100%' direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline'>
            {
            Object.keys(property).length === 0 
            ?
            <>
            <Stack>
                <CardBody alignItems='center'>
                    <Heading alignSelf='center' size='ml' textColor='gray.400'>Select an item</Heading>
                </CardBody>
            </Stack>
            </>
            :
              <>
            <Image 
                objectFit='cover'
                maxW={{ base: '100%', sm: '20%'}}
                src={property.img}
                alt={property.name}/>
            <Stack>
                <CardBody>
                    <Badge colorScheme='teal' fontSize='md'>
                        {Array(4).fill('').map((_, i) => (
                            <StarIcon
                                key={i}
                                color={i < property.tier ? 'teal.500' : 'gray.300'}
                            />
                        ))}
                    </Badge>
                    <Heading paddingTop='1%' size='md'> {property.name} </Heading>
                    <Text fontSize='lg' py='1%'> {property.story} </Text>
                    <Text fontSize={"md"}>{"Type of Green House Gas: " + property.greenGasType.toUpperCase()}</Text>
                    <Text fontSize={"md"}>{"Is Decreased by: " + property.concentration+"%"}</Text>
                </CardBody>
                <CardFooter>
                    {   
                        selected && (property.tier > (selected[itemType][property.group-1]-1)) ?
                        <>
                        <Button variant='solid' colorScheme='blue' onClick={onOpen}> Select</Button>
                        <AlertDialog
                            isOpen={isOpen}
                            leastDestructiveRef={cancelRef}
                            onClose={onClose}
                        > 
                            <AlertDialogOverlay>
                            <AlertDialogContent>
                                <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                                Select Item
                                </AlertDialogHeader>

                                <AlertDialogBody>
                                {`Are you sure? You can't undo this action afterwards.`}
                                </AlertDialogBody>

                                <AlertDialogFooter>
                                <Button ref={cancelRef} onClick={onClose}>
                                    Cancel
                                </Button>
                                <Button colorScheme='green' onClick={myClick} ml={3}>
                                    Select
                                </Button>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                            </AlertDialogOverlay>
                        </AlertDialog>
                        </>
                        :<Button variant='solid' colorScheme='gray'
                            onClick={() =>
                                toast({
                                title: 'Already selected.',
                                description: "The item is used.",
                                status: 'success',
                                duration: 3000,
                                isClosable: true,
                                })
                            }> Select</Button>
                    }   
                </CardFooter>
            </Stack>
            </>
            }
        </Card>  
    )
}

export default ItemSpecCard

