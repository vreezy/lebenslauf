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

export default function Work() {
  const resume = useSiteStore((state) => state.resume, shallow);

  if (!resume.work) {
    return null;
  }

  return (
    <section>
      <Stack tokens={containerStackTokens}>
        <header>
          <StackItem>
            <Top iconName="Work">Berufserfahrung</Top>
          </StackItem>
        </header>
        {resume.work.map((work) => {
          return (
            <article key={uuidv4()}>
              <StackItem style={{ marginBottom: "25px" }}>
                <Stack tokens={containerStackTokens}>
                  <header>
                    <StackItem>
                      <Stack horizontal horizontalAlign="space-between">
                        <StackItem>
                          <TopLink
                            href={work.url}
                            title={work.name}
                            aria-label={work.name}
                          >
                            {work.name}
                          </TopLink>
                        </StackItem>
                        <StackItem>
                          <DateBlock
                            startDate={work.startDate}
                            endDate={work.endDate}
                          />
                        </StackItem>
                      </Stack>
                    </StackItem>
                  </header>
                  <section>
                    <StackItem>
                      <Stack horizontal horizontalAlign="space-between">
                        <StackItem>
                          <Text block>
                            {work.position} in {work.location}
                          </Text>
                        </StackItem>
                        <StackItem></StackItem>
                      </Stack>
                    </StackItem>
                  </section>
                  <section>
                    <StackItem>
                      <Text block>{work.description}</Text>
                    </StackItem>
                  </section>
                  <section>
                    <StackItem>
                      <Text block>{work.summary}</Text>
                    </StackItem>
                  </section>
                  <section>
                    <StackItem>
                      <List>{work.highlights}</List>
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
