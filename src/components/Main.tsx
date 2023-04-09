// Components
import { IStackTokens, Stack, StackItem } from "@fluentui/react";
import { Container } from "react-bootstrap";
import About from "@/components/About";
import Certificates from "@/components/Certificates";
import Skills from "@/components/Skills";
import Loading from "./Loading";
import Interests from "./Interests";
import Languages from "./Languages";
import Summary from "./Summary";
import Work from "./Work";
import Volunteer from "./Volunteer";
import Education from "./Education";

// Stores
import useSiteStore from "@/stores/site";
import { shallow } from "zustand/shallow";

// Styles
import "bootstrap/dist/css/bootstrap.css";

export default function Main() {
  const isLoading = useSiteStore((state) => state.isLoading, shallow);
  const isError = useSiteStore((state) => state.isError, shallow);

  if (isError) {
    return (
      <main>
        <Container>Unknown Error</Container>
      </main>
    );
  }

  if (isLoading) {
    return (
      <main>
        <Container>
          <Loading />
        </Container>
      </main>
    );
  }

  const mainTokens: IStackTokens = {
    childrenGap: 20,
  };

  return (
    <main
      className="container"
      style={{ maxWidth: "900px", marginTop: "20px" }}
    >
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12">
          <Stack tokens={mainTokens}>
            <About />
            <Certificates />
            <Skills />
            <Languages />
            <Interests />
          </Stack>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12">
          <Stack tokens={mainTokens}>
            <Summary />
            <Work />
            <Volunteer />
            <Education />
          </Stack>
        </div>
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
