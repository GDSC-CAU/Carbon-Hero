import {Heading} from "@chakra-ui/react";

interface Heading1Props {
    label?: string;
    size?: string;
}

const Heading1 = ({
  label = "Heading1",
  size = '4xl'
                  }: Heading1Props) => {
    return(
      <Heading as='h1' size={size} fontSize={'4rem'} fontWeight={'bold'}>
        {label}
      </Heading>
    );
}

export default Heading1
