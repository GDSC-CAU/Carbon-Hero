import {Button} from "@chakra-ui/react";
import NextLink from "next/link";
import {ArrowForwardIcon} from "@chakra-ui/icons";

interface LinkToNextProps {
    nextPageRoute?: string;
    label?: string;
    color?: string;
}

const LinkToNext = ({
    nextPageRoute,
    label,
    color
                    }: LinkToNextProps) => {
    return (
            <NextLink href={`/${nextPageRoute}`} passHref>
              <Button
                as={'a'}
                fontWeight={'700'}
                fontSize={'1.2rem'}
                padding={'1rem'}
                borderRadius={'10px'}
                backgroundColor={color || 'black'}
                rightIcon={<ArrowForwardIcon/>}
                color={"white"}
              >
                {label || "Next Page"}
              </Button>
            </NextLink>
    );
}

export default LinkToNext
