// Components
import { Stack, StackItem, Text } from "@fluentui/react";
import Top from "./Top";
import DateField from "./DateField";
import List from "./List";
import TopLink from "./TopLink";

// Utils
import { v4 as uuidv4 } from "uuid";

// Styles
import { containerStackTokens } from "@/styles/styles";

// Stores
import useSiteStore from "@/stores/site";
import { shallow } from "zustand/shallow";

export default function Volunteer() {
  const resume = useSiteStore((state) => state.resume, shallow);

  if (!resume.volunteer) {
    return null;
  }

  return (
    <section>
      <Stack tokens={containerStackTokens}>
        <header>
          <Top iconName="Heart">Ehrenamtliche Erfahrung</Top>
        </header>
        {resume.volunteer.map((volunteer) => {
          return (
            <article key={uuidv4()}>
              <StackItem style={{ marginBottom: "25px" }}>
                <Stack tokens={containerStackTokens}>
                  <header>
                    <StackItem>
                      <Stack horizontal horizontalAlign="space-between">
                        <StackItem>
                          <TopLink
                            href={volunteer.url}
                            title={volunteer.organization}
                            aria-label={volunteer.organization}
                          >
                            {volunteer.organization}
                          </TopLink>
                        </StackItem>
                        <StackItem>
                          <Text block>
                            <DateField
                              dateString={volunteer.startDate}
                              type="start"
                            />
                            {" - "}
                            <DateField
                              dateString={volunteer.endDate}
                              type="end"
                            />
                          </Text>
                        </StackItem>
                      </Stack>
                    </StackItem>
                  </header>
                  <section>
                    <StackItem>
                      <Text block>{volunteer.position}</Text>
                    </StackItem>
                  </section>
                  <section>
                    <StackItem>
                      <Text block>{volunteer.summary}</Text>
                    </StackItem>
                  </section>
                  <section>
                    <StackItem>
                      <List>{volunteer.highlights}</List>
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
