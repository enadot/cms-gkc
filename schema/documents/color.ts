import { defineField, defineType } from "sanity";

import { TiersIcon } from "@sanity/icons";
import { cabinetBrowserGroups } from "schema/groups";

export default defineType({
  name: "color",
  title: "Colors",
  type: "document",
  icon: TiersIcon,
  preview: { select: { title: "name", subtitle: "description" } },

  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,

  fields: [
    defineField({
      type: "boolean",
      name: "discontinued",
      title: "Discontinued?",
      initialValue: false,
      description: "Check if this is finish discontinued",
    }),
    defineField({
      name: "colorsFamily",
      type: "string",
      options: {
        list: [
          { title: "Red", value: "red" },
          { title: "Green", value: "green" },
          { title: "Grey", value: "grey" },
        ],
      },
    }),
    defineField({
      title: "Shade",
      name: "shade",
      type: "string",

      initialValue: "light",
      options: {
        list: [
          { title: "Light", value: "light" },
          { title: "Medium", value: "medium" },
          { title: "Dark", value: "dark" },
        ],
      },
    }),

    defineField({
      name: "photo",
      title: "Finish door photo",
      description: "Main image for this finish",
      type: "image",

      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessibility.",
        },
      ],
      options: { hotspot: true },
    }),
    defineField({
      name: "materialShort",
      title: "Material (Short)",
      type: "string",

      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "materialLong",
      title: "Material (Long)",
      type: "text",

      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Sheen",
      name: "sheen",
      description: "Select all that apply",
      type: "array",

      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Matt", value: "matt" },
          { title: "Supermatt", value: "superMatt" },
          { title: "Gloss", value: "gloss" },
          { title: "High Gloss", value: "highGloss" },
          { title: "Satin", value: "satin" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "cleaningInstructions",
      title: "Cleaning Instructions",
      type: "text",

      validation: (Rule) => Rule.required(),
    }),
  ],
});
