import { Article } from '../components/Article';
import { Banner } from '../components/Banner';
import { Event } from '../components/Event';
import { Freebook } from '../components/Freebook';
import { Program } from '../components/Program';

export const Home = () => {
  return (
    <>
      <Banner />
      <Event />
      <Program />
      <Freebook />
      <Article />
    </>
  );
};
