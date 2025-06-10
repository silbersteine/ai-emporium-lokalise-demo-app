import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";
import { Suspense } from 'react';

import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import i18next from 'i18next';

i18next
  .use(Backend) 
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    // debug: true,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
    backend: {
      loadPath: 'locales/{{lng}}.json'
    }
  });

const Home = () => {
  return (
    <div suppressHydrationWarning>
      <Head>
        <title>The Marketing Masters - Elevate Your Brand with Expert Strategies</title>
        <meta
          name="description"
          content="The Marketing Masters provides expert marketing strategies and tools to help your brand grow and succeed."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Marketing Masters Benefits"
        title="Why choose The Marketing Masters?">
        The Marketing Masters offers proven marketing solutions tailored for startups and growing businesses.
        Gain access to expert insights, powerful tools, and a supportive community all in one place.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Watch our video"
        title="Discover how we can help you grow">
        Watch our demo video to see how The Marketing Masters can unlock your brand’s full potential.
        Marketing studies show videos increase conversion rates significantly—don’t miss out!
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="What our clients say about us">
        Hear from successful brands and marketing leaders who have transformed their business with our platform.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Have questions? We’ve got answers. Find out everything you need to know to get started quickly and confidently.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </div>
  );
}

export default Home;
