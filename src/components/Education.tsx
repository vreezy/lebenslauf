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

export default function Education() {
  const resume = useSiteStore((state) => state.resume, shallow);

  if (!resume.education) {
    return null;
  }

  return (
    <Stack tokens={containerStackTokens}>
      <StackItem>
        <Top>Ausbildung</Top>
      </StackItem>

      {resume.education.map((education) => {
        return (
          <StackItem key={uuidv4()}>
            <Stack tokens={containerStackTokens}>
              <StackItem>
                <Text block>
                  <Link href={education.url}>{education.institution}</Link>{" "}
                  <DateField dateString={education.startDate} type="start" />
                  {" - "}
                  <DateField dateString={education.endDate} type="end" />
                </Text>
                <Text block>{education.studyType}</Text>
                <Text block>{education.area}</Text>
              </StackItem>

              <StackItem>
                <List>{education.courses}</List>
              </StackItem>
            </Stack>
          </StackItem>
        );
      })}
    </Stack>
  );
}
