import { defineField, defineType } from "sanity";

import { TiersIcon } from "@sanity/icons";
import { finishBrowserGroups } from ".././groups";

export default defineType({
  name: "finish",
  title: "Finishes",
  type: "document",
  icon: TiersIcon,
  preview: { select: { title: "name", subtitle: "description" } },
  groups: finishBrowserGroups,
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
      name: "name",
      title: "Finish Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Type",
      name: "type",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "grid",
        list: [
          { title: "Laminate", value: "laminate" },
          { title: "Texture Laminate", value: "texture_laminate" },
          { title: "Paint", value: "paint" },
          { title: "Lacquer", value: "lacquer" },
          { title: "Fénix", value: "fénix" },
          { title: "Glass", value: "glass" },
          { title: "Wood Veneer", value: "wood_veneer" },
          { title: "Ceramic", value: "ceramic" },
          { title: "Aluminum Coated", value: "aluminum_coated" },
          { title: "Stone Look", value: "stone_look" },
          { title: "Metal Coated", value: "metal_coated" },
          { title: "Concrete", value: "concrete" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Texture",
      name: "texture",
      type: "string",
      group: "style",
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
      group: "style",
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
      group: "style",
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
      group: "media",
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
      group: "material",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "materialLong",
      title: "Material (Long)",
      type: "text",
      group: "material",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Sheen",
      name: "sheen",
      description: "Select all that apply",
      type: "array",
      group: "style",
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
      group: "cleaning",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
