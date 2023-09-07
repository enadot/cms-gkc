import { defineType } from "sanity";

export default defineType({
  name: "twoColumnImages",
  title: "Two Images (Grid)",
  type: "object",

  fields: [
    {
      name: "leftImage",
      title: "Left Image",
      type: "image",
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
    },
    {
      name: "rightImage",
      title: "Right Image",
      type: "image",
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
    },
  ],
});
