import {FC, useState, useEffect} from "react";

const PageMove = (i:number, maxlen:number):number => {
    const [ pageIdx, setPageIdx ] = useState(0);

    useEffect(() => {
        function PageMove(i:number, maxlen:number) :void{
            if (i >= 0 && i < maxlen) {
                setPageIdx(i)
            }
        }
        PageMove(i, maxlen);
    }); // Empty array ensures that effect is only run on mount

    return pageIdx;
};

export default PageMove;
