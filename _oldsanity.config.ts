// sanity.config.js
import { visionTool } from "@sanity/vision";
import { cloudinarySchemaPlugin } from "sanity-plugin-cloudinary";
import { defineConfig } from "sanity";

import { media } from "sanity-plugin-media";
import { deskTool } from "sanity/desk";
import { siteSettingsStructure } from "./plugins/deskStructure";
import { theme } from "https://themer.sanity.build/api/hues?default=a5ab9c&primary=674148;300;darkest:101112&transparent=b8beaf;lightest:fff&positive=539d6b;400;lightest:fff;darkest:101112&caution=lightest:fff;darkest:101112&critical=lightest:fff;darkest:101112&lightest=fdfdfb&darkest=674148";
import settings from "./schemas/settings";
import events from "./schemas/pages/events";
import about from "./schemas/pages/about";
import catering from "./schemas/pages/catering";
import contact from "./schemas/pages/contact";
import allMenus from "./schemas/menus/menus";
import menus from "./schemas/pages/menus";
import {
  brunch,
  lunch,
  dinner,
  drinks,
  desserts,
} from "./lib/constants/sanityAllMenus";
import menuItems from "./schemas/menus/menuItems";
import { Logo } from "./plugins/logo/Logo";

export default defineConfig({
  name: "levantine-dashboard",
  title: "Levantine NYC Dashboard",
  projectId: "7q87nigs",
  dataset: "production",
  theme: theme,
  plugins: [
    deskTool({
      // Use the combined structure for 'settingsType'
      structure: siteSettingsStructure([settings]),
    }),
    media(),
    visionTool(),
    cloudinarySchemaPlugin(),
  ],
  // tools: (prev) => {
  //   // 👇 Uses environment variables set by Vite in development mode
  //   if (import.meta.env.DEV) {
  //     return prev;
  //   }
  //   return prev.filter((tool) => tool.name !== "vision");
  // },
  schema: {
    types: [
      settings,
      events,
      about,
      menus,
      catering,
      contact,
      allMenus,
      menuItems,
      ...[brunch, lunch, dinner, drinks, desserts],
    ],
  },
  studio: {
    components: {
      logo: Logo,
    },
  },

  // form: {
  //   images: {
  //     assetSources: (previousAssetSources, context) => {
  //       if (context.currentUser?.roles.includes("cloudinaryAccess")) {
  //         //appends Cloudinary as an asset source
  //         return [...previousAssetSources, cloudinaryImageSource];
  //       }
  //       if (context.currentUser?.roles.includes("onlyCloudinaryAccess")) {
  //         // only use Cloudinary as an asset source
  //         return [cloudinaryImageSource];
  //       }
  //       //don't add Cloudinary as an asset sources
  //       return previousAssetSources;
  //     },
  //   },
  // },
});
