// Components
import { Stack, StackItem, Text } from "@fluentui/react";
import Top from "./Top";
import List from "./List";
import TopLink from "./TopLink";
import DateBlock from "./DateBlock";

// Utils
import { v4 as uuidv4 } from "uuid";

// Styles
import { containerStackTokens } from "@/styles/styles";

// Stores
import useSiteStore from "@/stores/site";
import { shallow } from "zustand/shallow";

export default function Education() {
  const resume = useSiteStore((state) => state.resume, shallow);

  if (!resume.education) {
    return null;
  }

  return (
    <section>
      <Stack tokens={containerStackTokens}>
        <header>
          <StackItem>
            <Top iconName="Education">Ausbildung</Top>
          </StackItem>
        </header>

        {resume.education.map((education) => {
          return (
            <article key={uuidv4()}>
              <StackItem style={{ marginBottom: "25px" }}>
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
                          <DateBlock
                            startDate={education.startDate}
                            endDate={education.endDate}
                          />
                        </StackItem>
                      </Stack>
                    </StackItem>
                  </header>
                  {education.studyType &&
                    <section>
                      <StackItem>
                        <Text block>{education.studyType}</Text>
                      </StackItem>
                    </section>
                  }
                  {education.courses && education.courses.length > 0 &&
                    <section>
                      <StackItem>
                        <List>{education.courses}</List>
                      </StackItem>
                    </section>
                  }
                </Stack>
              </StackItem>
            </article>
          );
        })}
      </Stack>
    </section>
  );
}
