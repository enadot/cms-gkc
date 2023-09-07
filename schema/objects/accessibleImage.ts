import { defineType } from "sanity";

export default defineType({
  name: "accessibleImage",
  title: "Image",
  type: "image",
  options: {
    hotspot: true,
    metadata: ["blurhash", "palette", "location"],
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
      description: "Optional: Add a short description for this image",
    },
    {
      name: "credit",
      type: "string",
      title: "Photographer Credit",
      description: "Optional: add here the name of the photographer",
    },
  ],
});
