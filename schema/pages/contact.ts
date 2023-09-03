import { defineField, defineType } from "sanity";
import { mainGroups } from "../groups";
import { DocumentIcon } from "@sanity/icons";

export default defineType({
  name: "contact",
  title: "Contact",
  type: "document",
  icon: DocumentIcon,
  preview: { select: { title: "title", subtitle: "description" } },
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  groups: mainGroups,
  fields: [
    defineField({
      type: "object",
      name: "metaData",
      description: "Add meta data for SEO",
      title: "Meta Data",
      group: "seo",
      fields: [
        {
          name: "metaTitle",
          title: "Meta Title",
          description: "Used for the browser tab and search engine results.",
          type: "string",
          validation: (rule) => rule.required(),
        },
        {
          name: "metaDescription",
          title: "Meta description",
          description: "Used for the search engine results.",
          type: "text",
          rows: 6,
        },
      ],
    }),

    defineField({
      type: "object",
      name: "hero",
      title: "Hero Image",
      fieldsets: [{ name: "metaData", title: "Meta Data (SEO)" }],
      fields: [
        {
          type: "cloudinary.asset",
          name: "image",
          title: "Main image",
          description: "Used for the hero / main image on the page.",
        },
        {
          type: "string",
          name: "text",
          title: "Hero Text",
          description: `The page title is used to render as <h1> on the hero image.`,
          fieldset: "metaData",
        },
        {
          title: "Alt Text",
          name: "alt",
          type: "string",
          fieldset: "metaData",
        },
      ],
    }),

    defineField({
      name: "keywords",
      description: "Add relevant keywords for SEO",
      title: "Meta keywords",
      group: "seo",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),
  ],
});
