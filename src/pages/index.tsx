import { Banner } from "@/components/Banner";
import { Connecting } from "@/components/Connecting";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Heading } from "@/components/Heading";
import { HomeContainer, IntroductionSection } from "@/components/Home";
import { LinkButton } from "@/components/LinkButton";
import { Main } from "@/components/Main";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gustavo Souza | Home</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Header />
        <HomeContainer>
          <div>
            <Heading>Creative, UI/UX Designer and Developer </Heading>
          </div>
          <LinkButton>My Works</LinkButton>
        </HomeContainer>
        <Banner />
        <IntroductionSection>
          <Heading>
            Taking your business to the next level connecting code and design
          </Heading>
          <Connecting />
        </IntroductionSection>
        <Footer />
      </Main>
    </>
  );
}
