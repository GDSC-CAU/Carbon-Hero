import {getDatabase, ref} from "firebase/database";
import {initializeApp} from "firebase/app";
import {firebaseConfig} from "../../configs/firebase.config";
import {browserSessionPersistence, getAuth} from "firebase/auth";

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
auth.setPersistence(browserSessionPersistence);
export const database = getDatabase(firebaseApp);
export const gameStateRef = () =>  ref(database, auth.currentUser?.uid);
export const greenHouseGasesRef = () => ref(database, auth.currentUser?.uid + "/greenHouseGases");
export const personalActivationRef = () => ref(database, auth.currentUser?.uid + "/items/personal");
export const playTimeRef = () => ref(database, auth.currentUser?.uid + "/playtime");
export const enterpriseActivationRef = () => ref(database, auth.currentUser?.uid + "/items/enterprise");
export const countryActivationRef = () => ref(database, auth.currentUser?.uid + "/items/country");
export const actionCountRef = () => ref(database, auth.currentUser?.uid + "/actionCount");
export const itemViewStateRef = () => ref(database, auth.currentUser?.uid + "/itemViewState");
export const phaseRef = () => ref(database, auth.currentUser?.uid + "/phase");