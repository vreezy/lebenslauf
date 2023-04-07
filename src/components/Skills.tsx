
import { Stack, StackItem, Link, Text, IStackTokens} from "@fluentui/react";

import resume from "resume/resume.json";
import { v4 as uuidv4 } from 'uuid';

export default function Skills() {
  const containerStackTokens: IStackTokens = { childrenGap: 5 };

  return (
    <Stack tokens={containerStackTokens}>
      {resume.skills.map(skill => {
          return (
            <StackItem key={uuidv4()}>
              <Text block>{skill.name} - {skill.level}</Text>
              
                {skill.keywords.map(keyword => {
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
