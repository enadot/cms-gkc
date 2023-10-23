import { defineType } from "sanity";

export default defineType({
  name: "subMenuItem",
  type: "object",
  fields: [
    {
      name: "link",
      title: "Page (href)",
      type: "reference",
      to: [{ type: "post" }],
      description: "Select the page this nav link should point to",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "text",
      type: "string",
      description: "Enter the text of the nav link",
      validation: (Rule) => Rule.required(),
    },

    {
      name: "image",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
  ],
});
