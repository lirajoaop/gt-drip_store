import HomeBanner from "../components/HomeBanner";
import HomeCollections from "../components/HomeCollections";
import SpecialOffer from "../components/SpecialOffer";
import TrendingProducts from "../components/TrendingProducts";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <HomeCollections />
      <TrendingProducts />
      <SpecialOffer />
    </>
  );
}
