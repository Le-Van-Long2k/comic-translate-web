import { Card, Image, Text, IconButton, Flex } from "@chakra-ui/react";
import { IoMdCloseCircleOutline } from "react-icons/io";

type ImageFileItemProps = {
  src: string;
  name: string;
  selected?: boolean;
  onClick?: () => void;
  onDelete?: () => void;
};

function ImageFileItem({
  src,
  name,
  selected = false,
  onClick,
  onDelete,
}: ImageFileItemProps) {
  return (
    <Card.Root
      size="sm"
      borderRadius="lg"
      border="ButtonShadow"
      cursor="pointer"
      bg={selected ? "blue.900" : "transparent"}
      _hover={{ bg: selected ? "blue.800" : "blue.900" }}
      onClick={onClick}
    >
      <Card.Body p={2}>
        <Flex align="center" gap={3}>
          <Image
            src={src}
            alt={name}
            boxSize="48px"
            objectFit="cover"
            borderRadius="md"
          />

          <Text flex={1} fontSize="sm">
            {name}
          </Text>

          <IconButton
            aria-label="Remove image"
            variant="ghost"
            size="sm"
            color="gray.500"
            onClick={(e) => {
              e.stopPropagation(); // ❗ không select khi xoá
              onDelete?.();
            }}
          >
            <IoMdCloseCircleOutline size={18} />
          </IconButton>
        </Flex>
      </Card.Body>
    </Card.Root>
  );
}

export default ImageFileItem;
