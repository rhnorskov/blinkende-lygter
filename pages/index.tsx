import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Blinkende Lygter</title>
      </Head>

      <video
        autoPlay
        controls
        src="https://rhnorskov-public.s3.eu-central-1.amazonaws.com/Blinkende.lygter.2000.DANISH.1080p.BluRay.x264.TheBaconLord.mp4"
      />
    </>
  );
};

export default Home;
