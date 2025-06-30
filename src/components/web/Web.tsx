// Components
import { IStackTokens, Stack, Text, FontIcon} from "@fluentui/react";
import About from "@/components/web/About";
import Certificates from "@/components/web/Certificates";
import Skills from "@/components/web/Skills";
import Loading from "../shared/Loading";
import Interests from "./Interests";
import Languages from "./Languages";
import Summary from "./Summary";
import Work from "./Work";
import Volunteer from "./Volunteer";
import Education from "./Education";

// Stores
import useSiteStore from "@/stores/site";
import { shallow } from "zustand/shallow";
import { containerStyles } from "@/styles/styles";

export default function Web() {
  const isLoading = useSiteStore((state) => state.isLoading, shallow);
  const isError = useSiteStore((state) => state.isError, shallow);

  if (isError) {
    return (
      <main className="container">
        Unknown Error
      </main>
    );
  }

  if (isLoading) {
    return (
      <main className="container">
        <Loading />
      </main>
    );
  }

  const mainTokens: IStackTokens = {
    childrenGap: 20,
  };

  return (
    <main
      className="container"
      style={{ ...containerStyles, marginTop: "20px" }}
    >
      {/* <section className="onlyPrint row" style={{padding: "20px"}}>
        <Text block style={{ fontStyle: "italic", fontSize: "larger"}}><FontIcon aria-label="Info" iconName="Info"/> Die neuste Version dieses Lebenslaufes finden Sie immer unter &quot;https://lebenslauf.vreezy.de&quot;.</Text>
      </section> */}

      {/* <div className="row">
        <Title />
      </div> */}

      <div className="row">
        <section className="col-lg-4 col-md-4 col-sm-12">
          <Stack tokens={mainTokens}>
            <About />
            <Certificates />
            <Skills />
            <Languages />
            <Interests />
          </Stack>
        </section>
        <section className="col-lg-8 col-md-8 col-sm-12">
          <Stack tokens={mainTokens}>
            <Summary />
            <Work />
            <Volunteer />
            <Education />
          </Stack>
        </section>
      </div>

      <section className={"container"}>
        {/* <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className={styles.vercelLogo}
        width={100}
        height={24}
        priority
      /> */}
      </section>
    </main>
  );
}

