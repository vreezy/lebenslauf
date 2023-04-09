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

export default function Volunteer() {
  const resume = useSiteStore((state) => state.resume, shallow);

  if (!resume.volunteer) {
    return null;
  }

  return (
    <Stack tokens={containerStackTokens}>
      <Top>Ehrenamtliche Erfahrung</Top>
      {resume.volunteer.map((volunteer) => {
        return (
          <section key={uuidv4()}>
            <StackItem>
              <Stack tokens={containerStackTokens}>
                <StackItem>
                  <Stack horizontal horizontalAlign="space-between">
                    <StackItem>
                      <header>
                        <Text block>
                          <Link href={volunteer.url}>
                            {volunteer.organization}
                          </Link>
                        </Text>
                      </header>
                    </StackItem>
                    <StackItem>
                      <Text block>
                        <DateField
                          dateString={volunteer.startDate}
                          type="start"
                        />
                        {" - "}
                        <DateField dateString={volunteer.endDate} type="end" />
                      </Text>
                    </StackItem>
                  </Stack>

                  <Text block>{volunteer.position}</Text>
                </StackItem>

                <StackItem>
                  <Text block>{volunteer.summary}</Text>
                </StackItem>

                <StackItem>
                  <List>{volunteer.highlights}</List>
                </StackItem>
              </Stack>
            </StackItem>
          </section>
        );
      })}
    </Stack>
  );
}
