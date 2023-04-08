
import { Stack, StackItem, Link, Text, IStackTokens} from "@fluentui/react";


import { v4 as uuidv4 } from 'uuid';
import useSiteStore from "@/stores/site";
import { shallow } from "zustand/shallow";
import { containerStackTokens } from "@/styles/styles";

export default function Skills() {
  const resume = useSiteStore((state) => state.resume, shallow);

  if (!resume.skills) {
    return null;
  }

  return (
    <Stack tokens={containerStackTokens}>
      {resume.skills.map(skill => {
          return (
            <StackItem key={uuidv4()}>
              <Text block>{skill.name} - {skill.level}</Text>
              
                {skill.keywords && skill.keywords.map(keyword => {
                  return (
                    <span key={uuidv4()} className="badge rounded-pill text-bg-secondary">{keyword}</span>
                  )
                })}
              
            </StackItem>
          )
        })}

    </Stack>
  );
}
