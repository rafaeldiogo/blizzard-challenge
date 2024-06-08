import BannerHero from "./BannerHero";
import Menu from "./Menu";

const Layout = () => {
  return (
    <div className="bg-cover bg-[url('./assets/bg-banner.png')]">
      <Menu />
      <BannerHero />
    </div>
  );
};

export default Layout;
