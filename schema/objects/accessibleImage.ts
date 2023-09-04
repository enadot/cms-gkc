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
    },
    {
      name: "caption",
      type: "string",
      title: "Caption",
    },
  ],
});
