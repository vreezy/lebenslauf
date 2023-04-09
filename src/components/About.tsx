// Components
import {
  Stack,
  StackItem,
  Link,
  Text,
  ActionButton,
  IIconProps,
  IButtonStyles,
} from "@fluentui/react";

// Utils
import { v4 as uuidv4 } from "uuid";

// Stores
import useSiteStore from "@/stores/site";
import { shallow } from "zustand/shallow";

// Styles
import { containerStackTokens } from "@/styles/styles";

// Interfaces
import { ResumeSchema } from "@/models/ResumeSchema";
import Top from "./Top";

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
      height: "unset"
    },
  };

  // TODO: ICONS
  // https://developer.microsoft.com/en-us/fluentui#/controls/web/activityitem ???
  return (
    <section>
      <Stack tokens={containerStackTokens}>
        <StackItem>
          <Top iconName="Contact">Über mich</Top>
        </StackItem>

        {validateAdress(resume) && (
          <StackItem>
            <Text block>{resume.basics.location!.address}</Text>
            <Text block>
              {resume.basics.location!.countryCode}{" "}
              {resume.basics.location!.postalCode}{" "}
              {resume.basics.location!.city}
            </Text>
          </StackItem>
        )}

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

        {resume.basics?.profiles &&
          resume.basics.profiles.map((profile) => {
            
            const networkIcon: IIconProps = { iconName: "Website" };

            switch (profile.network) {
              case "linkedIn":
              case "linkedin":
                networkIcon.iconName = "LinkedInLogo"
                break;
              case "teams":
                networkIcon.iconName = "TeamsLogo"
                break;
              default:
        
            }

            return (
              <StackItem key={uuidv4()}>
                <ActionButton
                  href={profile.url}
                  styles={actionButtonStyles}
                  iconProps={networkIcon}
                  target="_blank"
                >
                  {profile.username}
                </ActionButton>
              </StackItem>
            );
          })}
      </Stack>
    </section>
  );
}
