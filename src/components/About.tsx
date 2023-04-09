// Components
import {
  Stack,
  StackItem,
  Text,
  ActionButton,
  IIconProps,
  IButtonStyles,
} from "@fluentui/react";
import Top from "./Top";

// Utils
import { v4 as uuidv4 } from "uuid";

// Stores
import useSiteStore from "@/stores/site";
import { shallow } from "zustand/shallow";

// Styles
import { containerStackTokens } from "@/styles/styles";

// Interfaces
import { ResumeSchema } from "@/models/ResumeSchema";

export default function About() {
  const resume = useSiteStore((state) => state.resume, shallow);

  if (!resume.basics) {
    return null;
  }

  function validateAdress(resume: ResumeSchema): boolean {
    if (
      resume.basics?.location?.address &&
      resume.basics?.location?.countryCode &&
      resume.basics?.location?.postalCode &&
      resume.basics?.location?.city
    ) {
      return true;
    }

    return false;
  }

  const websiteIcon: IIconProps = { iconName: "Website" };
  const phoneIcon: IIconProps = { iconName: "Phone" };
  const mailIcon: IIconProps = { iconName: "Mail" };

  const actionButtonStyles: IButtonStyles = {
    label: {
      margin: 0,
    },
    root: {
      padding: 0,
      height: "unset",
    },
  };

  return (
    <article>
      <Stack tokens={containerStackTokens}>
        <header>
          <StackItem>
            <Top iconName="Contact">Über mich</Top>
          </StackItem>
        </header>

        {validateAdress(resume) && (
          <section>
            <StackItem>
              <Text block>{resume.basics.location!.address}</Text>
              <Text block>
                {resume.basics.location!.countryCode}{" "}
                {resume.basics.location!.postalCode}{" "}
                {resume.basics.location!.city}
              </Text>
            </StackItem>
          </section>
        )}

        {resume.basics.email && (
          <section>
            <StackItem>
              <ActionButton
                href={`mailto: ${resume.basics.email}`}
                styles={actionButtonStyles}
                iconProps={mailIcon}
                target="_blank"
              >
                {resume.basics.email}
              </ActionButton>
            </StackItem>
          </section>
        )}

        {resume.basics.phone && (
          <section>
            <StackItem>
              <ActionButton
                href={`tel: ${resume.basics.phone}`}
                styles={actionButtonStyles}
                iconProps={phoneIcon}
                target="_blank"
              >
                {resume.basics.phone}
              </ActionButton>
            </StackItem>
          </section>
        )}
        {resume.basics.url && (
          <section>
            <StackItem>
              <ActionButton
                href={resume.basics.url}
                styles={actionButtonStyles}
                iconProps={websiteIcon}
                target="_blank"
              >
                {resume.basics.url}
              </ActionButton>
            </StackItem>
          </section>
        )}

        {resume.basics?.profiles &&
          resume.basics.profiles.map((profile) => {
            const networkIcon: IIconProps = { iconName: "Website" };
            let username = profile.username;

            switch (profile.network) {
              case "linkedIn":
              case "linkedin":
                networkIcon.iconName = "LinkedInLogo";
                break;
              case "teams":
                networkIcon.iconName = "TeamsLogo";
                break;
              default:
                username = `${profile.network} - ${profile.username}`;
            }

            return (
              <section key={uuidv4()}>
                <StackItem>
                  <ActionButton
                    href={profile.url}
                    styles={actionButtonStyles}
                    iconProps={networkIcon}
                    target="_blank"
                  >
                    {username}
                  </ActionButton>
                </StackItem>
              </section>
            );
          })}
      </Stack>
    </article>
  );
}
