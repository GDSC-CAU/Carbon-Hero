import {useEffect, useRef, useState} from "react";
import {GlobeData} from "../models/globe-layer.types";
import {FeatureCollection, PolygonData} from "../models/polygon-layer.types";
import GeoData from '../data/ne_110m_admin_0_countries.json';
import {GlobeMethods} from "react-globe.gl";

const initialGlobeData: GlobeData = {
  containerData: {
    width: 0,
    height: 0,
    backgroundColor: '#000',
    backgroundImageUrl: "/night-sky.png"
  },
  globeLayerData: {
    globeImageUrl: "https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg",
    bumpImageUrl: "/earth-topology.png",
  }
}

const initialPolygonData: PolygonData = {
  polygonsData: [],
  polygonLabel: '',
  polygonCapColor: '#fc2e1b',
  polygonSideColor: '#000'
};

const useGlobe = () => {
  const globe = useRef<GlobeMethods | undefined>();
  const [isSuccess, setIsSuccess] = useState<boolean>(true);
  const [countries, setCountries] = useState<FeatureCollection>(GeoData);
  const [globeData, setGlobeData] = useState<GlobeData>(initialGlobeData)
  const [polygonData, setPolygonData] = useState<PolygonData>(initialPolygonData);

  useEffect(() => {
    globeData.containerData.width = window.innerWidth;
    globeData.containerData.height = window.innerHeight;
    setGlobeData((prevData) => {
      return {
        containerData: {
          ...prevData.containerData,
          width: window.innerWidth,
          height: window.innerHeight
        },
        globeLayerData: {
          ...prevData.globeLayerData
        }
      }
    });
  }, []);

  return {
    isSuccess,
    globe,
    countries,
    polygonData,
    globeData
  }
}

export default useGlobe;