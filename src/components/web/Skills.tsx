// Components
import { Label, Stack, StackItem } from "@fluentui/react";
import Badges from "./Badges";
import Top from "./Top";

// Utils
import { v4 as uuidv4 } from "uuid";

// Stores
import useSiteStore from "@/stores/site";
import { shallow } from "zustand/shallow";

// Styles
import { containerStackTokens } from "@/styles/styles";

export default function Skills() {
  const resume = useSiteStore((state) => state.resume, shallow);

  if (!resume.skills) {
    return null;
  }

  return (
    <article>
      <Stack tokens={containerStackTokens}>
        <header>
          <StackItem>
            <Top iconName="CheckList">Soft Skills</Top>
          </StackItem>
        </header>

        {resume.skills.map((skill) => {
          return (
            <section key={uuidv4()}>
              <StackItem>
                <header>
                  <Label>{skill.name}</Label>
                </header>
                <section>
                  <Badges>{skill.keywords}</Badges>
                </section>
              </StackItem>
            </section>
          );
        })}
      </Stack>
    </article>
  );
}
