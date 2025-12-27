import { createListCollection, Portal, Select, Stack } from "@chakra-ui/react";
import React from "react";

const fontText = createListCollection({
  items: [
    { label: "Arial", value: "Arial" },
    { label: "Time New Roman", value: "Time New Roman" },
  ],
});

const sizeText = createListCollection({
  items: [
    { label: "16", value: "16" },
    { label: "18", value: "18" },
  ],
});

const spacingLine = createListCollection({
  items: [
    { label: "1.0", value: "1.0" },
    { label: "1.2", value: "1.2" },
  ],
});

function TextSetting() {
  return (
    <Stack direction="row" gap={3}>
      <Select.Root collection={fontText} size="sm" flex="60%" bg="gray.800">
        <Select.HiddenSelect />
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder="Select font" />
          </Select.Trigger>
          <Select.IndicatorGroup>
            <Select.Indicator />
          </Select.IndicatorGroup>
        </Select.Control>
        <Portal>
          <Select.Positioner>
            <Select.Content>
              {fontText.items.map((font) => (
                <Select.Item item={font} key={font.value}>
                  {font.label}
                  <Select.ItemIndicator />
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Positioner>
        </Portal>
      </Select.Root>
      <Select.Root collection={sizeText} size="sm" flex="20%" bg="gray.800">
        <Select.HiddenSelect />
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder="size" />
          </Select.Trigger>
          <Select.IndicatorGroup>
            <Select.Indicator />
          </Select.IndicatorGroup>
        </Select.Control>
        <Portal>
          <Select.Positioner>
            <Select.Content>
              {sizeText.items.map((size) => (
                <Select.Item item={size} key={size.value}>
                  {size.label}
                  <Select.ItemIndicator />
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Positioner>
        </Portal>
      </Select.Root>
      <Select.Root collection={spacingLine} size="sm" flex="20%" bg="gray.800">
        <Select.HiddenSelect />
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder="spacing" />
          </Select.Trigger>
          <Select.IndicatorGroup>
            <Select.Indicator />
          </Select.IndicatorGroup>
        </Select.Control>
        <Portal>
          <Select.Positioner>
            <Select.Content>
              {spacingLine.items.map((spacing) => (
                <Select.Item item={spacing} key={spacing.value}>
                  {spacing.label}
                  <Select.ItemIndicator />
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Positioner>
        </Portal>
      </Select.Root>
    </Stack>
  );
}

export default TextSetting;
