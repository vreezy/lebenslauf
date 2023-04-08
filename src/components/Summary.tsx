// Components
import { Stack, StackItem, Text } from "@fluentui/react";

// Stores
import useSiteStore from "@/stores/site";
import { shallow } from "zustand/shallow";

// Styles
import { containerStackTokens } from "@/styles/styles";

export default function Summary() {
  const resume = useSiteStore((state) => state.resume, shallow);

  if (!resume.basics) {
    return null;
  }

  return (
    <Stack tokens={containerStackTokens}>
      <StackItem>
        <Text block>{resume.basics.summary}</Text>
      </StackItem>
    </Stack>
  );
}
