import { defineField, defineType } from "sanity";
import { ThListIcon as Icon } from "@sanity/icons";

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
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  // Title, Price Group, Description, Main Image, Finishes, Line availability
  fields: [
    defineField({
      type: "string",
      name: "programName",
      title: "Program Name",
      description: "The name of the program",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      title: "Brand",
      name: "brand",
      type: "string",
      initialValue: "1",
      options: {
        list: [
          { title: "Leicht", value: "leicht" },
          { title: "Nobilia", value: "nobilia" },
          { title: "Team7", value: "team7" },
          { title: "Stosa", value: "stosa" },
        ],
        layout: "radio",
      },
    }),

    defineField({
      type: "boolean",
      name: "discontinued",
      title: "Discontinued?",
      initialValue: false,
      description: "Check if this is program discontinued",
    }),
    defineField({
      name: "image",
      title: "Main image",
      description: "This image will be used on the program page",
      type: "image",
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
      type: "text",
      name: "description",
      title: "Description",
      description: "This description will be used on the program page",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      title: "Price Group",
      name: "priceGroup",
      type: "string",
      initialValue: "1",
      options: {
        list: priceGroupOptions,
      },
    }),
    defineField({
      title: "Line Availability",
      name: "lines",
      description: "Select the lines this program is available in",
      type: "array",
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
