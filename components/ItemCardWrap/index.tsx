import {Avatar, AvatarBadge, Wrap, WrapItem} from "@chakra-ui/react";
import {ItemDataInterface} from "../../models/items.interface";

interface Props {
    property: ItemDataInterface[];
    getCurrItem: (arg1?: any) => any;
    selected: number[];
}

const ItemCardWrap = ({property, getCurrItem, selected}: Props) => {
    const myClick = (item:ItemDataInterface) => {
        getCurrItem(item)
    }
    console.log("ItemCardWrap selected", selected)


    return <>
        <Wrap spacing='8%' justify='center' > 
                    {Array(3).fill('').map((_, i) => (
                        <>
                        {selected && <WrapItem padding='1%' minW='30%'>

                        {property.filter((item)=> 
                                item.group===i+1 && item.tier <= selected[i] 
                                ).map((item, idx) => (
                            // eslint-disable-next-line react/jsx-key
                            <Avatar onClick={() => {myClick(item)}}
                            size='2xl' name={item.name} src={item.img} p='1%' ml='1%'>
                                <AvatarBadge boxSize='1.25em' bg='teal.300' textColor='black'> {item.tier} </AvatarBadge>
                            </Avatar>
                        ))}

                        </WrapItem> }
                        </>
                    ))}
            </Wrap>
    </>
}

export default ItemCardWrap
