<<<<<<< HEAD
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
=======
import { visionTool } from "@sanity/vision";
import { theme } from "https://themer.sanity.build/api/hues?default=darkest:14213d&primary=3f516e;darkest:2b3640&transparent=858494";
import { defineConfig } from "sanity";
import { cloudinaryAssetSourcePlugin } from "sanity-plugin-cloudinary";
import { media } from "sanity-plugin-media";
import { deskTool } from "sanity/desk";
import { defaultDocumentNodeResolver } from "./plugins/deskStructure";
import { apiVersion, dataset, projectId } from "./lib/sanity.api";
import deskStructure from "./plugins/deskStructure";
import schema from "./schema/schema";
import { Logo } from "./plugins/logo/Logo";

const title =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE ||
  "German Kitchen Center Queens";

const singletonActions = new Set(["publish", "discardChanges", "restore"]);
const singletonTypes = new Set(["settings"]);

export default defineConfig({
  name: "gkc-dashboard",
  title,
  projectId,
  dataset,
  theme: theme,
  plugins: [
    deskTool({
      structure: deskStructure,
      defaultDocumentNode: defaultDocumentNodeResolver,
    }),
    media(),
    visionTool({ defaultApiVersion: apiVersion }),
    cloudinaryAssetSourcePlugin(),
  ],

  schema: {
    types: schema,
    // Filter out singleton types from the global “New document” menu options
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
>>>>>>> f91efac5851721f5552623c0d308c127742a78a6
  studio: {
    components: {
      logo: Logo,
    },
  },
});
