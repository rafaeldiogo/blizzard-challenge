import BannerHero from "./BannerHero";
import Menu from "./Menu";

const Layout = () => {
  return (
    <div className="bg-cover bg-[url('./assets/bannerhero/images/diabloiv-bg.png')] h-[736px]">
      <Menu />
      <BannerHero />
    </div>
  );
};

export default Layout;
