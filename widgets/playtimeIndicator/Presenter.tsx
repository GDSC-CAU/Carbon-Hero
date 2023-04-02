import { Stat, StatHelpText, StatLabel, StatNumber } from "@chakra-ui/stat";
import GameOverSign from "../../components/GameOverSign";

interface Props {
    playTime: number;
}

const Presenter = ({playTime}: Props) => {
    if (playTime >= 2035) {
      return <GameOverSign />
    }
    return (
      <Stat
        position={"fixed"}
        top={"5%"}
        right={"5%"}
        variant={"great"}
        zIndex={100}
        backgroundColor={"whiteAlpha.900"}
        padding={10}
        borderRadius={"10%"}
        boxShadow={"outline"}
        fontWeight={"extrabold"}
      >
        <StatLabel>This Year is</StatLabel>
        <StatNumber>{playTime}</StatNumber>
        <StatHelpText>{`You can make this world better!`}</StatHelpText>
      </Stat>
    )
}

export default Presenter
