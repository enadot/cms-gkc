import { defineType } from "sanity";
import { TwoColumnImagesPreview } from "./TwoColumnImagesPreview";

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
          name: "credit",
          type: "string",
          title: "Photographer Credit",
          description: "Optional: add here the name of the photographer",
        },
      ],
    },
  ],
  preview: {
    select: {
      leftImage: "leftImage",
      rightImage: "rightImage",
    },
  },
  components: {
    preview: TwoColumnImagesPreview,
  },
});
