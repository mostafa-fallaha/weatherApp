import { HStack, Image, Box } from "@chakra-ui/react";
import SearchTimeZone from "./SearchTimeZone";
import ColorSwitch from "./ColorSwitch";

interface Props {
  onSearch: (searchText: string) => void;
}

function NavBAR({ onSearch }: Props) {
  return (
    <HStack padding={"10px"} width={"100%"}>
      <Image
        src="https://openweathermap.org/img/wn/02d@2x.png"
        width={{ base: "50px", lg: 100 }}
      />
      <Box flex={1}>
        <SearchTimeZone onSearch={onSearch} />
      </Box>
      {/* <Image src="https://openweathermap.org/img/wn/11d@2x.png" width={100} /> */}
      <ColorSwitch />
    </HStack>
  );
}

export default NavBAR;
