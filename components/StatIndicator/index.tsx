import {Stat, StatArrow, StatHelpText, StatLabel, StatNumber} from "@chakra-ui/stat";

interface Props {
    label: string;
    statNumber: number;
    changeRate: number;
}
const DisplayedStatNumber = (label: string, statNum: number): string => {
  if (label === "GreenHouseEffect") return statNum.toFixed(3) + "%";
  else if (label !== "Cfcs") {
    const statNumberInPPM = statNum * 10000;
    const indicatorNumber = statNumberInPPM.toFixed(3);
    return indicatorNumber + "(ppm)";
  }
  else {
    const statNumberInPPM = statNum * 10000000;
    const indicatorNumber = statNumberInPPM.toFixed(3);
    return indicatorNumber + "(ppb)";
  }
}
const StatIndicator = ({
  label,
  statNumber,
  changeRate
                       }: Props) => {
  let displayedStatNumber = "";


  return (
      <Stat variant={"great"}>
          <StatLabel>{label.toUpperCase()}</StatLabel>
          <StatNumber>{DisplayedStatNumber(label, statNumber)}</StatNumber>
          <StatHelpText>
              <StatArrow type={changeRate >= 0 ? "increase" : "decrease"} />
              {changeRate.toFixed(3)+'%'}
          </StatHelpText>
      </Stat>
    )
}

export default StatIndicator
