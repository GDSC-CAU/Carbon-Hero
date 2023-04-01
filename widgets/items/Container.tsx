import useLink from "../../hooks/useLink";
import Error from "./Error";
import Loading from "./Loading";
import Presenter from "./Presenter";
import {ItemContext} from "../../hooks/useLastSelectionContext";
import {useActionItems} from "../../hooks/useActionItems";

const ItemsMenuContainer = () => {
    const { isSuccess, isError, sceneData } = useLink({
        sceneName: "Actions needed for saving earth",
        nextPage: ""
    });

    const {
        select,
        getItemSelect,
        currItem,
        getCurrItem,
        getLastSelection,
        lastSelection,
        setLastSelection,
        data,
        phase
    } = useActionItems();

    if (isSuccess) {
        return (
              <ItemContext.Provider value={{lastSelection, setLastSelection}}>
                <Presenter 
                    sceneTitle={sceneData.sceneName} 
                    data={data}
                    
                    itemSelected={select}
                    select={getItemSelect}

                    currItem={currItem}
                    getCurrItem={getCurrItem}
                    
                    getLastSelection={getLastSelection}
                    phase={phase}
                    />            
              </ItemContext.Provider>
        )
    }       

    if (isError) {
        return <Error />
    }

    return <Loading />
}

export default ItemsMenuContainer
