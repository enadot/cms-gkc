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
    }),
    defineField({
      type: "string",
      name: "programName",
      title: "Program Name",
      description: "The name of the program",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "priceGroup",
      type: "rating",
      validation: (rule) => rule.min(1).max(10),
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
