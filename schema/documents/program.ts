import { defineField, defineType } from "sanity";
import { ThListIcon as Icon } from "@sanity/icons";
import { cabinetBrowserGroups } from "schema/groups";

const priceGroupOptions = [];

for (let i = 1; i <= 10; i++) {
  priceGroupOptions.push({
    title: `${i}`,
    value: `${i}`,
  });
}

export default defineType({
  name: "program",
  title: "Programs",
  type: "document",
  icon: Icon,
  preview: { select: { title: "programName", subtitle: "description" } },
  groups: [
    {
      name: "media",
      title: "Media",
    },
    {
      name: "style",
      title: "Style",
    },
    {
      name: "info",
      title: "Information",
    },
    {
      name: "cleaning",
      title: "Cleaning",
    },
  ],
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  // Title, Price Group, Description, Main Image, Finishes, Line availability

  fields: [
    defineField({
      type: "boolean",
      name: "discontinued",
      title: "Discontinued?",
      initialValue: false,

      description: "Check if this is program discontinued",
    }),
    defineField({
      title: "Brand",
      name: "brand",
      type: "brand",
      group: "info",
    }),
    defineField({
      type: "string",
      name: "programName",
      title: "Program Name",
      group: "info",
      description: "The name of the program",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "priceGroup",
      type: "rating",
      group: "info",
      validation: (rule) => rule.min(1).max(10),
    }),
    defineField({
      name: "name",
      title: "Finishes",
      description: "Type in all the finishes available for this program",
      type: "array",
      group: "info",
      of: [{ type: "string" }],
      options: { layout: "tags" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Is Finish type is textured?",
      name: "finishType",
      description: "If yes, toggle on this button (Default set to: 'solid')",
      type: "boolean",
      group: "style",
      initialValue: false,
    }),
    defineField({
      title: "Type",
      name: "type",
      type: "array",
      group: "style",
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
      name: "image",
      title: "Main image",
      description: "This image will be used on the program page",
      type: "image",
      group: "media",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessibility.",
        },
      ],
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      group: "info",

      description: "This description will be used on the program page",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      title: "Line Availability",
      name: "lines",
      description: "Select the lines this program is available in",
      type: "array",
      group: "info",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Primo", value: "primo" },
          { title: "Contino", value: "contino" },
          { title: "Evo", value: "evo" },
          { title: "Avance", value: "avance" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
