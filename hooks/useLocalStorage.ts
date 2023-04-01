// useLocalStorage.js

interface LocalData {
    key: string;
    initialState: any;
}
  
function useLocalStorage({key, initialState}:LocalData) {
  // const [state, setState] = useState(
  //   () => JSON.parse(window.localStorage.getItem(key)) || initialState
  // );
  //
  // useEffect(() => {
  //   window.localStorage.setItem(key, JSON.stringify(state));
  // }, [key, state]);
  //
  // return [state, setState];
}

export default useLocalStorage;