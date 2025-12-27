import { useState } from "react";
import { IconButton, Input } from "@chakra-ui/react";

function TextColor() {
  const [color, setColor] = useState("#00a0b0");

  return (
    <IconButton
      aria-label="Text color"
      size="sm"
      variant="outline"
      ml={2}
      p={1}
    >
      <Input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        p={0}
        w="32px"
        h="32px"
        border="none"
        bg="transparent"
        cursor="pointer"
      />
    </IconButton>
  );
}

export default TextColor;
