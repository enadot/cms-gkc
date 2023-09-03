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
  studio: {
    components: {
      logo: Logo,
    },
  },
});
