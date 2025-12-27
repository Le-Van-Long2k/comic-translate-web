import { IconButton, Stack } from "@chakra-ui/react";
import { FaBold, FaItalic, FaUnderline } from "react-icons/fa";

function TextStyles() {
  return (
    <Stack gap="2" justify="space-between" direction="row">
      <IconButton variant="outline">
        <FaBold />
      </IconButton>
      <IconButton variant="outline">
        <FaItalic />
      </IconButton>
      <IconButton variant="outline">
        <FaUnderline />
      </IconButton>
    </Stack>
  );
}

export default TextStyles;
