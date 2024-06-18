import logoDiabloIVLarge from "../assets/bannerhero/images/diabloiv-logo.png";
import logoHearthstoneLarge from "../assets/bannerhero/images/hearthstone-logo.png";
import logoWowLarge from "../assets/bannerhero/images/wow-logo.png";

import logoPreviewDiabloIV from "../assets/bannerhero/images/diablo-animation-cover.png";
import logoPreviewHearthstone from "../assets/bannerhero/images/hearthstone-animation-cover.png";
import logoPreviewWow from "../assets/bannerhero/images/wow-animation-cover.png";

import gifDiabloIV from "../assets/bannerhero/images/diablo-animation.gif";
import gifHearthstone from "../assets/bannerhero/images/hearthstone-animation.gif";
import gifWow from "../assets/bannerhero/images/wow-animation.gif";

export type BannerHeroItem = {
  title: string;
  subtitle: string;
  textButton: string;
  icon: string;
  previewGif: string;
  altPreviewGif: string;
  gif: string;
  altGif: string;
  alt: string;
};

export const mapBannerHeroes: BannerHeroItem[] = [
  {
    title: "Retorne à escuridão com o game Diablo IV",
    subtitle: "O retorno de Lilith traz uma era de escuridão e sofrimento",
    textButton: "Jogar agora",
    icon: logoDiabloIVLarge,
    previewGif: logoPreviewDiabloIV,
    altPreviewGif: "diablo-animation-cover",
    gif: gifDiabloIV,
    altGif: "diablo-animation.gif",
    alt: "diabloiv-icon",
  },
  {
    title: "Novo pacote de expansão de Hearthstone",
    subtitle: "A Horda e a Aliança se encontraram no Vale Alterac para lutar",
    textButton: "Reserve agora na pré-venda",
    previewGif: logoPreviewHearthstone,
    altPreviewGif: "hearthstone-animation-cover",
    gif: gifHearthstone,
    altGif: "hearthstone-animation",
    icon: logoHearthstoneLarge,
    alt: "hearthstone-icon",
  },
  {
    title: "Desbrave as Terras Sombrias em Shadowlands! ",
    subtitle: "O que jaz além do mundo que você conhece?",
    textButton: "Reserve agora na pré-venda",
    previewGif: logoPreviewWow,
    altPreviewGif: "wow-animation-cover",
    gif: gifWow,
    altGif: "wow-animation",
    icon: logoWowLarge,
    alt: "wow-icon",
  },
];
