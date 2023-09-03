import { defineType } from "sanity";

export default defineType({
  name: "accessibleImage",
  title: "Image",
  type: "image",
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: "alt",
      type: "string",
      title: "Alternative text",
      description: "Alternative text is required.",
      validation: (Rule) => [Rule.required()],
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "caption",
      type: "string",
      title: "Caption",
      options: {
        isHighlighted: true,
      },
    },
  ],
});
