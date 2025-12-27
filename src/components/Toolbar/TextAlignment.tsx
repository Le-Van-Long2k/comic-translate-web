import { IconButton, Stack } from "@chakra-ui/react";
import { FaAlignJustify, FaAlignLeft, FaAlignRight } from "react-icons/fa6";

function TextAlignment() {
  return (
    <Stack gap="2" justify="space-between" direction="row">
      <IconButton variant="outline">
        <FaAlignLeft />
      </IconButton>
      <IconButton variant="outline">
        <FaAlignJustify />
      </IconButton>
      <IconButton variant="outline">
        <FaAlignRight />
      </IconButton>
    </Stack>
  );
}

export default TextAlignment;
