import BackUpGroup from "../components/Toolbar/BackUpGroup";
import ImageProcessGroup from "../components/Toolbar/ImageProcessGroup";
import ProgressStatus from "../components/Toolbar/ProgressStatus";
import { Stack } from "@chakra-ui/react";
import StatusGroup from "../components/Toolbar/StatusGroup";
import ModeGroup from "../components/Toolbar/ModeGroup";

function MainToolbar() {
  return (
    <Stack direction="row">
      <Stack flex={5}>
        <BackUpGroup></BackUpGroup>
      </Stack>
      <Stack flex={80} direction="column" ml="20px" mr="20px">
        <Stack flex={60}>
          <ImageProcessGroup></ImageProcessGroup>
        </Stack>
        <Stack flex={40}>
          <ProgressStatus></ProgressStatus>
        </Stack>
      </Stack>
      <Stack flex={15} direction="column">
        <Stack flex={50}>
          <StatusGroup></StatusGroup>
        </Stack>
        <Stack flex={50} bg="gray.900" borderRadius="xl">
          <ModeGroup></ModeGroup>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default MainToolbar;
