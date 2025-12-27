import { HStack, IconButton } from "@chakra-ui/react";
import { MdOutlineRotateLeft, MdRotateRight } from "react-icons/md";

function BackUpGroup() {
  return (
    <HStack align="center" justify="center">
      <IconButton aria-label="Undo" variant="outline" size="lg" rounded="full">
        <MdOutlineRotateLeft />
      </IconButton>
      <IconButton aria-label="Redo" variant="outline" size="lg" rounded="full">
        <MdRotateRight />
      </IconButton>
    </HStack>
  );
}

export default BackUpGroup;
