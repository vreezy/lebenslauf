// Components
import { Label, Stack, StackItem, Text } from "@fluentui/react";
import Badges from "./Badges";
import Top from "./Top";

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
    <article>
      <Stack tokens={containerStackTokens}>
        <header>
          <StackItem>
            <Top iconName="Game">Interessen</Top>
          </StackItem>
        </header>
        {resume.interests.map((interest) => {
          return (
            <section key={uuidv4()}>
              <StackItem>
                <header>
                  <Label>{interest.name}</Label>
                </header>
                <section>
                  <Badges>{interest.keywords}</Badges>
                </section>
              </StackItem>
            </section>
          );
        })}
      </Stack>
    </article>
  );
}
