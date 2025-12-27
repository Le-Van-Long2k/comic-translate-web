import Sidebar from "../components/Toolbar/Sidebar";
import CanvasArea from "./CanvasArea";
import AssetsPanel from "./AssetsPanel";
import TranslationPanel from "./TranslationPanel";
import PropertiesPanel from "./PropertiesPanel";
import MainToolbar from "./MainToolbar";
import { Flex, Stack } from "@chakra-ui/react";

function MainPage() {
  return (
    <Stack
      w="100vw"
      h="100vh"
      direction="row"
      minW="1300px"
      minH="600px"
      overflow="auto"
    >
      <Flex
        flex={1}
        direction="column"
        align="stretch"
        bg="gray.800"
        justify="flex-start"
      >
        <Sidebar></Sidebar>
      </Flex>
      <Stack flex={100} direction="column">
        <Stack flex={5} bg="gray.800" padding="5px" borderRadius="md">
          <MainToolbar></MainToolbar>
        </Stack>
        <Stack flex={95} direction="row">
          <Stack flex={20} direction="column" bg="gray.800">
            <AssetsPanel></AssetsPanel>
          </Stack>

          <Stack flex={65} direction="column">
            <CanvasArea></CanvasArea>
          </Stack>

          <Stack flex={25} direction="column" bg="gray.800">
            <Stack flex={50} direction="row" padding="1px">
              <TranslationPanel></TranslationPanel>
            </Stack>
            <Stack flex={50} direction="row" padding="1px">
              <PropertiesPanel></PropertiesPanel>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default MainPage;
