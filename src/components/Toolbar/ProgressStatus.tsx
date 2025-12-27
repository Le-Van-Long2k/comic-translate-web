import { AbsoluteCenter, Box, Progress, Stack, Text } from "@chakra-ui/react";
import React from "react";

function ProgressStatus() {
  return (
    <Stack>
      <Progress.Root variant="outline" colorPalette="blue">
        <Progress.Track h="13px">
          <Progress.Range />
          <AbsoluteCenter>
            <Text fontSize="14px">40%</Text>
          </AbsoluteCenter>
        </Progress.Track>
      </Progress.Root>
    </Stack>
  );
}

export default ProgressStatus;
