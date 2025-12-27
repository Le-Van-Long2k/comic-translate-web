import { Button, HStack, VStack } from "@chakra-ui/react";
import React from "react";

function StatusGroup() {
  return (
    <HStack justify="space-around">
      <Button variant="outline" colorPalette="green">
        Translate
      </Button>
      <Button variant="outline" colorPalette="red">
        Cancel
      </Button>
    </HStack>
  );
}

export default StatusGroup;
