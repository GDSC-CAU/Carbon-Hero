import {Tab, TabList, TabPanel, TabPanels, Tabs, useColorModeValue} from "@chakra-ui/react";
import ItemCardWrap from "../../components/ItemCardWrap";
import {ItemDataInterface, ItemSelectInterface} from "../../models/items.interface";

interface itemsSpec {
    children: React.ReactNode;
    property: ItemDataInterface[];
    getCurrItem: (arg1?: any) => any;
    selected: ItemSelectInterface;
    phase: number;
};

const ItemGroupType = ["person", "enterprise", "country"];
const actionNames = ["Personal Action", "Enterprise Action", "National Action"];
const ItemCards = (props:itemsSpec) => {
    const {phase, getCurrItem, selected, property} = props;
    const colors = useColorModeValue(
      ['blue.100', 'red.100', 'yellow.100'],
      ['blue.900', 'red.900', 'yellow.900'],
    )

    // const [tabIndex, setTabIndex] = useState(0)
    const bg = colors[phase]

    const myClick = () => {
        getCurrItem({});
    }
    return (
      <Tabs isFitted variant='enclosed' bg={bg} borderTopRadius='lg' minH="100%" index={phase}>
          <TabList mb='1em'>
            {actionNames.map((actionName, index) => {
              return <Tab key={index} fontWeight={"bold"} isDisabled={index === phase ? false : true}>{actionName}</Tab>;
            })}
          </TabList>
          <TabPanels>
              {Array(3).fill('').map((_, i) => (
                <TabPanel key={i} padding='1%'>
                  <ItemCardWrap
                    property={property.filter((item)=>
                      item.type===ItemGroupType[i])}
                    getCurrItem={getCurrItem}
                    selected={selected[ItemGroupType[i]]}></ItemCardWrap>
                </TabPanel>
              ))}
          </TabPanels>
      </Tabs>

    )
}

export default ItemCards
