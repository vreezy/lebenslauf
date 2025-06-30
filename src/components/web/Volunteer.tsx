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
                          <DateBlock
                            startDate={volunteer.startDate}
                            endDate={volunteer.endDate}
                          />
                        </StackItem>
                      </Stack>
                    </StackItem>
                  </header>
                  {volunteer.position &&
                    <section>
                      <StackItem>
                        <Text block>{volunteer.position}</Text>
                      </StackItem>
                    </section>
                  }
                  {volunteer.summary &&
                    <section>
                      <StackItem>
                        <Text block>{volunteer.summary}</Text>
                      </StackItem>
                    </section>
                  }
                  {volunteer.highlights && volunteer.highlights.length > 0 &&
                    <section>
                      <StackItem>
                        <List>{volunteer.highlights}</List>
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
