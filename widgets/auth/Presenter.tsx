import {User} from "firebase/auth";
import CommonButton from "../../components/CommonButton";

interface Props {
  user: User | null | undefined;
  signIn:  (args?: any) => any;
  signOut: (args?: any) => any;
}

const Presenter = ({ user, signIn, signOut }: Props) => {
    return (
      user ?
      <CommonButton label={"SignOut"} onClick={() => signOut()}/>
      :
      <CommonButton label={"Sign In To Play"} onClick={() => signIn()}/>
    );
}

export default Presenter
