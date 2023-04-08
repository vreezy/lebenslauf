// Components
import { Stack, StackItem, Text } from "@fluentui/react";
import Badges from "./Badges";

// Utils
import { v4 as uuidv4 } from "uuid";

// Styles
import { containerStackTokens } from "@/styles/styles";

// Stores
import useSiteStore from "@/stores/site";
import { shallow } from "zustand/shallow";

export default function Interests() {
  const resume = useSiteStore((state) => state.resume, shallow);

  if (!resume.interests) {
    return null;
  }

  return (
    <Stack tokens={containerStackTokens}>
      {resume.interests.map((interest) => {
        return (
          <StackItem key={uuidv4()}>
            <Text block>{interest.name}</Text>
            <Badges>{interest.keywords}</Badges>
          </StackItem>
        );
      })}
    </Stack>
  );
}
