import { defineType } from "sanity";

export default defineType({
  name: "sliderImage",
  title: "Slider",
  type: "image",
  options: {
    hotspot: true,
    metadata: ["blurhash", "palette", "location"],
  },
  fields: [
    {
      name: "eyebrow",
      type: "string",
      description: "Add here a short text to be displayed on top of the image",
      validation: (Rule) => [Rule.required()],
    },
    {
      name: "title",
      type: "string",
      description: "Add here the main title displayed on the image",
      validation: (Rule) => [Rule.required()],
    },
    {
      name: "paragraph",
      type: "text",
      rows: 3,
      description: "Add here the main title displayed on the image",
      validation: (Rule) => [Rule.required()],
    },
  ],
});
