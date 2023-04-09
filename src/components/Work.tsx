// Components
import { Link, Stack, StackItem, Text } from "@fluentui/react";

// Utils
import { v4 as uuidv4 } from "uuid";

// Styles
import { containerStackTokens } from "@/styles/styles";

// Stores
import useSiteStore from "@/stores/site";
import { shallow } from "zustand/shallow";
import Top from "./Top";
import DateField from "./DateField";
import List from "./List";

export default function Work() {
  const resume = useSiteStore((state) => state.resume, shallow);

  if (!resume.work) {
    return null;
  }
 
  return (
    <Stack tokens={containerStackTokens}>
      <Top>Berufserfahrung</Top>
      {resume.work.map((work) => {
        return (
          <StackItem key={uuidv4()}>
            <Stack tokens={containerStackTokens}>
              <StackItem>
                <Text block>
                  <Link href={work.url}>{work.name}</Link>{" "}
                  <DateField dateString={work.startDate} type="start"/>
                  {" - "}
                  <DateField dateString={work.endDate} type="end"/>
                </Text>
                <Text block>{work.position}</Text>
                <Text block>{work.location}</Text>
              </StackItem>

              <StackItem>
                <Text block>{work.summary}</Text>
                <Text block>{work.description}</Text>
              </StackItem>

              <StackItem>
                <List>{work.highlights}</List>
     
              </StackItem>
            </Stack>
          </StackItem>
        );
      })}
    </Stack>
  );
}