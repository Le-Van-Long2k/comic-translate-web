import {
  Stack,
  Select,
  Textarea,
  createListCollection,
  Portal,
} from "@chakra-ui/react";
import React from "react";

const originalLanguages = createListCollection({
  items: [
    { label: "English", value: "English" },
    { label: "Chinese", value: "Chinese" },
    { label: "Japanese", value: "Japanese" },
    { label: "Korean", value: "Korean" },
  ],
});

const translateLanguages = createListCollection({
  items: [
    { label: "Vietnamese", value: "Vietnamese" },
    { label: "English", value: "English" },
  ],
});

function Translation() {
  return (
    <Stack direction="row" h="100%" w="100%" gap={2}>
      {/* LEFT */}
      <Stack flex={50} direction="column" gap={1} bg="gray.900" padding="0.5px">
        <Select.Root collection={originalLanguages} size="sm">
          <Select.HiddenSelect />
          {/* <Select.Label>Select language</Select.Label> */}
          <Select.Control>
            <Select.Trigger>
              <Select.ValueText placeholder="Select original language" />
            </Select.Trigger>
            <Select.IndicatorGroup>
              <Select.Indicator />
            </Select.IndicatorGroup>
          </Select.Control>
          <Portal>
            <Select.Positioner>
              <Select.Content>
                {originalLanguages.items.map((language) => (
                  <Select.Item item={language} key={language.value}>
                    {language.label}
                    <Select.ItemIndicator />
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Positioner>
          </Portal>
        </Select.Root>
        <Textarea flex={90} resize="none" placeholder="Original" />
      </Stack>

      {/* RIGHT */}
      <Stack flex={50} direction="column" gap={1} bg="gray.900" padding="0.5px">
        <Select.Root collection={translateLanguages} size="sm">
          <Select.HiddenSelect />
          {/* <Select.Label>Select language</Select.Label> */}
          <Select.Control>
            <Select.Trigger>
              <Select.ValueText placeholder="Select translate language" />
            </Select.Trigger>
            <Select.IndicatorGroup>
              <Select.Indicator />
            </Select.IndicatorGroup>
          </Select.Control>
          <Portal>
            <Select.Positioner>
              <Select.Content>
                {translateLanguages.items.map((language) => (
                  <Select.Item item={language} key={language.value}>
                    {language.label}
                    <Select.ItemIndicator />
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Positioner>
          </Portal>
        </Select.Root>
        <Textarea flex={90} resize="none" placeholder="Translate" />
      </Stack>
    </Stack>
  );
}

export default Translation;
