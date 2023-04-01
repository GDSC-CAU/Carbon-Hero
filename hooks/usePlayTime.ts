import {onValue, set} from "firebase/database";
import {useEffect, useState} from "react";
import {playTimeRef} from "./utils/dbRefs";

export const usePlayTime = () => {
  const [playTime, setPlayTime] = useState(2023);

  useEffect(() => {
    onValue(playTimeRef(), (snapshot) => {
      if (!snapshot.exists()) return;
      const playtime = snapshot.val();
      setPlayTime(playtime);
    })
  }, []);

  return {playTime}
}

export const updatePlayTimeOnDB = (newPlayTime?: number) => {
  set(playTimeRef(), newPlayTime || 2023);
}