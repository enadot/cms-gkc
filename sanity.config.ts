// sanity.config.ts

import { visionTool } from "@sanity/vision";
import { cloudinarySchemaPlugin } from "sanity-plugin-cloudinary";
import { apiVersion, dataset, projectId } from "./lib/sanity.api";
import { tags } from "sanity-plugin-tags";
import { settingsPlugin, siteSettingsStructure } from "./plugins/deskStructure";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { Logo } from "./plugins/logo/Logo";
import settings from "./schemas/settings";
import events from "./schemas/pages/events";
import catering from "./schemas/pages/catering";
import about from "./schemas/pages/about";
import { theme } from "https://themer.sanity.build/api/hues?default=a5ab9c&primary=674148;300;darkest:101112&transparent=b8beaf;lightest:fff&positive=539d6b;400;lightest:fff;darkest:101112&caution=lightest:fff;darkest:101112&critical=lightest:fff;darkest:101112&lightest=fdfdfb&darkest=674148";

import contact from "./schemas/pages/contact";
import allMenus from "./schemas/menus/menus";
import menus from "./schemas/pages/menus";
import {
  brunch,
  lunch,
  dinner,
  drinks,
  catering as cateringMenu,
} from "./lib/constants/sanityAllMenus";
import menuItems from "./schemas/menus/menuItems";

const title = process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || "Levantine";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  title,
  theme: theme,
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
      ...[brunch, lunch, dinner, drinks, cateringMenu],
    ],
  },
  plugins: [
    deskTool({
      // Use the combined structure for 'settingsType'
      structure: siteSettingsStructure([settings]),
    }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    settingsPlugin({ type: settings.name }),
    // Add the "Open preview" action

    cloudinarySchemaPlugin(),
    tags({}),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  studio: {
    components: {
      logo: Logo,
    },
  },
});
