import author from "./singletons/author";
import blockContent from "./objects/blockContent";
import category from "./singletons/category";
import bathroom from "./documents/bathroom";
import catalog from "./documents/catalog";
import interiorValue from "./documents/interiorValue";
import kitchen from "./documents/kitchen";
import post from "./documents/post";
import project from "./documents/project";
import landingPage from "./documents/landingPage";
import program from "./documents/program";
import accessibleImage from "./objects/accessibleImage";
import { ratingType } from "./rating/ratingType";
import { brandType } from "./brand/brandType";
import home from "./singletons/home";
import settings from "./singletons/settings";
import color from "./documents/color";
import twoColumnImages from "./objects/twoColumnImages";

export default [
  home,
  settings,
  program,
  color,
  category,
  kitchen,
  bathroom,
  interiorValue,
  project,
  catalog,
  post,
  landingPage,
  author,
  blockContent,
  accessibleImage,
  twoColumnImages,
  ratingType,
  brandType,
];
