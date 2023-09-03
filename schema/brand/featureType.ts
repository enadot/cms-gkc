import { defineField, defineType } from "sanity";

export const featureType = defineType({
  name: "feature",
  title: "Feature",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "brand",
      type: "brand",
    }),
  ],
});
