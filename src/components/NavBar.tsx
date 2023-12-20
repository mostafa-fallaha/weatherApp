import { HStack, Image, Box } from "@chakra-ui/react";
import SearchTimeZone from "./SearchTimeZone";

interface Props {
  onSearch: (searchText: string) => void;
}

function NavBAR({ onSearch }: Props) {
  return (
    <HStack padding={"10px"}>
      <Image src="https://openweathermap.org/img/wn/02d@2x.png" width={100} />
      <Box flex={1}>
        <SearchTimeZone onSearch={onSearch} />
      </Box>
      <Image src="https://openweathermap.org/img/wn/11d@2x.png" width={100} />
    </HStack>
  );
}

export default NavBAR;
