// Components
import { Stack, StackItem, Text } from "@fluentui/react";

// Stores
import useSiteStore from "@/stores/site";
import { shallow } from "zustand/shallow";

// Styles
import { containerStackTokens } from "@/styles/styles";
import Top from "./Top";

export default function Summary() {
  const resume = useSiteStore((state) => state.resume, shallow);

  if (!resume.basics) {
    return null;
  }

  return (
    <article>
      <Stack tokens={containerStackTokens}>
        <StackItem>
          <Top>Zusammenfassung</Top>
        </StackItem>
        <StackItem>
          <section>
            <Text block>{resume.basics.summary}</Text>
          </section>
        </StackItem>
      </Stack>
    </article>
  );
}
