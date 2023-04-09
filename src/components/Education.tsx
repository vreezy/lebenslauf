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
import TopLink from "./TopLink";

export default function Education() {
  const resume = useSiteStore((state) => state.resume, shallow);

  if (!resume.education) {
    return null;
  }

  return (
    <section>
      <Stack tokens={containerStackTokens}>
        <StackItem>
          <Top iconName="Education">Ausbildung</Top>
        </StackItem>

        {resume.education.map((education) => {
          return (
            <article key={uuidv4()}>
              <StackItem style={{marginBottom: "25px"}}>
                <Stack tokens={containerStackTokens}>
                  <header>
                    <StackItem>
                      <Stack horizontal horizontalAlign="space-between">
                        <StackItem>
                          <TopLink
                            href={education.url}
                            title={education.institution}
                            aria-label={education.institution}
                          >
                            {education.institution}
                          </TopLink>
                        </StackItem>
                        <StackItem>
                          <Text block>
                            <DateField
                              dateString={education.startDate}
                              type="start"
                            />
                            {" - "}
                            <DateField
                              dateString={education.endDate}
                              type="end"
                            />
                          </Text>
                        </StackItem>
                      </Stack>
                    </StackItem>
                  </header>
                  <section>
                    <StackItem>
                      <Text block>{education.studyType}</Text>
                      <Text block>{education.area}</Text>
                    </StackItem>
                  </section>
                  <section>
                    <StackItem>
                      <List>{education.courses}</List>
                    </StackItem>
                  </section>
                </Stack>
              </StackItem>
            </article>
          );
        })}
      </Stack>
    </section>
  );
}
