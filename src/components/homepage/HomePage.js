import Banner from "./banner-footer/Banner";
import Categories from "./categories/Categories";
import TopTrend from "./toptrend/TopTrend";
import Informations from "./banner-footer/Informations";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <TopTrend />
      <Informations />
    </div>
  );
};

export default HomePage;
