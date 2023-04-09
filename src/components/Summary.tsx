// Components
import { Stack, StackItem, Text } from "@fluentui/react";
import Top from "./Top";

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
    <article>
      <Stack tokens={containerStackTokens}>
        <header>
          <StackItem>
            <Top iconName="TextDocumentShared">Zusammenfassung</Top>
          </StackItem>
        </header>
        <section>
          <StackItem>
            <Text block>{resume.basics.summary}</Text>
          </StackItem>
        </section>
      </Stack>
    </article>
  );
}
