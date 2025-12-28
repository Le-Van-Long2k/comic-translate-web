import { Button, HStack } from "@chakra-ui/react";
import React from "react";

function ImageProcessGroup() {
  return (
    <HStack justify="center" gap="2">
      <Button variant="outline" colorPalette="blue">
        Detect Text Boxes
      </Button>
      <Button variant="outline" colorPalette="blue">
        Segment Text
      </Button>
      <Button variant="outline" colorPalette="blue">
        Get Translation
      </Button>
      <Button variant="outline" colorPalette="blue">
        Clean Image
      </Button>
      <Button variant="outline" colorPalette="blue">
        Render
      </Button>
    </HStack>
  );
}

export default ImageProcessGroup;
