// Components
import { Label, Stack, StackItem, Text } from "@fluentui/react";
import Top from "./Top";

// Utils
import { v4 as uuidv4 } from "uuid";

// Styles
import { containerStackTokens } from "@/styles/styles";

// Stores
import useSiteStore from "@/stores/site";
import { shallow } from "zustand/shallow";

export default function Languages() {
  const resume = useSiteStore((state) => state.resume, shallow);

  if (!resume.languages) {
    return null;
  }

  return (
    <article style={{marginBottom: "2rem"}}>
      <Stack tokens={containerStackTokens}>
        <header>
          <StackItem>
            <Top iconName="Chat">Sprachen</Top>
          </StackItem>
        </header>

        {resume.languages.map((language) => {
          return (
            <section key={uuidv4()}>
              <StackItem>
                <header>
                  <Label>{language.language}</Label>
                </header>
                <section>
                  <Text block>{language.fluency}</Text>
                </section>
              </StackItem>
            </section>
          );
        })}
      </Stack>
    </article>
  );
}
