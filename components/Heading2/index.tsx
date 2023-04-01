import {Heading} from "@chakra-ui/react";

interface Heading1Props {
    label?: string;
    size?: string;
}

const Heading2 = ({
  label = "Heading2",
  size = 'lg'
                  }: Heading1Props) => {
    return(
      <Heading as='h1' size={size} fontSize={'3rem'} fontWeight={'bold'}>
        {label}
      </Heading>
    );
}

export default Heading2
