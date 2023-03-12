import { useState, useEffect } from 'react';

type WindowDimentions = {
    width: number | undefined;
    height: number | undefined;
};

const useWindowDimensions = (): WindowDimentions => {
    const [windowDimensions, setWindowDimensions] = useState<WindowDimentions>({
        width: undefined,
        height: undefined,
    });
    useEffect(() => {
        function handleResize(): void {
            setWindowDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return (): void => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    return windowDimensions;
};

export default useWindowDimensions;


// // Hook
// function WindowSize() {

//     const [windowSize, setWindowSize] = useState({width:0, height:0})
//     useEffect(() => {
//         const handleResize = () => setWindowSize({width:window.innerWidth, height:window.innerHeight})
//         window.addEventListener('resize', handleResize)
//         return () => window.removeEventListener('resize', handleResize)
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [])
//     return windowSize
//   }

// export default WindowSize