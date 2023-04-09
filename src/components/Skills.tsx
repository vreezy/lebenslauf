// Components
import { Label, Stack, StackItem, Text } from "@fluentui/react";
import Badges from "./Badges";

// Utils
import { v4 as uuidv4 } from "uuid";

// Stores
import useSiteStore from "@/stores/site";
import { shallow } from "zustand/shallow";

// Styles
import { containerStackTokens } from "@/styles/styles";
import Top from "./Top";

export default function Skills() {
  const resume = useSiteStore((state) => state.resume, shallow);

  if (!resume.skills) {
    return null;
  }

  return (
    <Stack tokens={containerStackTokens}>
      <StackItem>
        <Top iconName="CheckList">Soft Skills</Top>
      </StackItem>

      {resume.skills.map((skill) => {
        return (
          <StackItem key={uuidv4()}>
            <Label>
              {skill.name}
            </Label>

            <Badges>{skill.keywords}</Badges>
          </StackItem>
        );
      })}
    </Stack>
  );
}
