import { HStack, Show, Switch, Text, useColorMode } from "@chakra-ui/react";

function ColorSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack width={{ base: "30px", lg: "140px" }}>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Show above="lg">
        <Text whiteSpace="nowrap">Dark Mode</Text>
      </Show>
    </HStack>
  );
}

export default ColorSwitch;
