// sanity.config.js
import { visionTool } from "@sanity/vision";
import { theme } from "https://themer.sanity.build/api/hues?default=darkest:14213d&primary=3f516e;darkest:2b3640&transparent=858494";
import { defineConfig } from "sanity";
import {
  cloudinaryAssetSourcePlugin,
  cloudinaryImageSource,
} from "sanity-plugin-cloudinary";
import { media } from "sanity-plugin-media";
import { deskTool } from "sanity/desk";
import { defaultDocumentNodeResolver } from "./deskStructure";

import deskStructure from "./deskStructure";
import { Logo } from "./plugins/logo/Logo";
import schemas from "./schemas/schema";

export default defineConfig({
  name: "gkc-dashboard",
  title: "German Kitchen Center Queens Dashboard",
  projectId: "dllw832r",
  dataset: "production",
  theme: theme,
  plugins: [
    deskTool({
      structure: deskStructure,
      defaultDocumentNode: defaultDocumentNodeResolver,
    }),
    media(),
    visionTool(),

    cloudinaryAssetSourcePlugin(),
  ],
  tools: (prev) => {
    // 👇 Uses environment variables set by Vite in development mode
    if (import.meta.env.DEV) {
      return prev;
    }
    return prev.filter((tool) => tool.name !== "vision");
  },
  schema: {
    // If you want more content types, you can add them to this array
    types: schemas,
  },
  studio: {
    components: {
      logo: Logo,
    },
  },
  form: {
    images: {
      assetSources: (previousAssetSources, context) => {
        if (context.currentUser?.roles.includes("cloudinaryAccess")) {
          //appends Cloudinary as an asset source
          return [...previousAssetSources, cloudinaryImageSource];
        }
        if (context.currentUser?.roles.includes("onlyCloudinaryAccess")) {
          // only use Cloudinary as an asset source
          return [cloudinaryImageSource];
        }
        //don't add Cloudinary as an asset sources
        return previousAssetSources;
      },
    },
  },
});
