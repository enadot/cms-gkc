import { defineField, defineType } from "sanity";

import { TiersIcon } from "@sanity/icons";

export default defineType({
  name: "finish",
  title: "Finishes",
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
      name: "programName",
      title: "Program Name",
      type: "reference",
      to: [{ type: "program" }],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "name",
      title: "Finish Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Texture",
      name: "texture",
      type: "string",
      initialValue: "solid",
      options: {
        list: [
          { title: "Solid", value: "solid" },
          { title: "Pattern", value: "pattern" },
        ],
        layout: "radio",
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
      title: "Door Style",
      name: "doorStyle",
      type: "string",
      initialValue: "slab",
      options: {
        list: [
          { title: "Slab", value: "slab" },
          { title: "Shaker", value: "shaker" },
          { title: "Raised", value: "raised" },
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
      title: "Group",
      name: "group",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Laminates", value: "laminates" },
          { title: "Paints", value: "paints" },
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
