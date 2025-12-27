import React from "react";
import TextSetting from "../components/Toolbar/TextSetting";
import TextColor from "../components/Toolbar/TextColor";
import TextAlignment from "../components/Toolbar/TextAlignment";
import TextStyles from "../components/Toolbar/TextStyles";
import { Stack } from "@chakra-ui/react";

function PropertiesPanel() {
  return (
    <Stack direction="column" w="100%" h="100%" p="2px" bg="gray.900">
      <Stack flex={10}>
        <TextSetting></TextSetting>
      </Stack>
      <Stack flex={10} direction="row" align="center" justify="space-around">
        <TextColor></TextColor>
        <TextAlignment></TextAlignment>
        <TextStyles></TextStyles>
      </Stack>
      <Stack flex={80}></Stack>
    </Stack>
  );
}

export default PropertiesPanel;
