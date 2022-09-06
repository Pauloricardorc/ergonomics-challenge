import type { NextPage } from "next";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/countdown";
import { ExperienceBar } from "../components/Experiencebar";
import { Profile } from "../components/Profile";
import Head from "next/head";

import styles from "../styles/pages/Home.module.css";
import { ChallengeBox } from "../components/ChallangeBox";
import { CountdownProvider } from "../contexts/CountdownContext";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | move.it</title>
      </Head>
      <ExperienceBar />

      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  );
};

export default Home;
