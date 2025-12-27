import { HStack, RadioGroup, Stack, Text } from "@chakra-ui/react";

const items = [
  { label: "Manual", value: "1" },
  { label: "Auto", value: "2" },
];

function ModeGroup() {
  return (
    <Stack direction="row" w="100%" justify="space-around" align="center">
      <Text>Mode</Text>
      <RadioGroup.Root defaultValue="1">
        <HStack gap="6">
          {items.map((item) => (
            <RadioGroup.Item key={item.value} value={item.value}>
              <RadioGroup.ItemHiddenInput />
              <RadioGroup.ItemIndicator />
              <RadioGroup.ItemText>{item.label}</RadioGroup.ItemText>
            </RadioGroup.Item>
          ))}
        </HStack>
      </RadioGroup.Root>
    </Stack>
  );
}

export default ModeGroup;
