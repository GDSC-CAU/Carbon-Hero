import {useEffect, useState} from "react";

export interface Location {
  latitude: number;
  longitude: number;
  altitude: number;
}
export const useLocation = () => {
  const [location, setLocation] = useState({
    latitude: 0,
    logitude: 0,
    altitude: 2.5
  })
  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      setLocation((preLocation) => {
        return {
          ...preLocation,
          latitude: latitude,
          longitude: longitude
        };
      }),
    []});
  }, []);

  return {location}
}