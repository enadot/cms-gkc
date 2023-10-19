import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "home",
  type: "document",
  groups: [
    {
      name: "seo",
      title: "SEO",
    },
    {
      name: "info",
      title: "Information",
    },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Site Title",
      type: "string",
      group: "seo",
    }),
    defineField({
      name: "description",
      title: "Meta Description",
      type: "text",
      group: "seo",
      validation: (Rule) =>
        Rule.required().max(260).warning("Maximum 260 characters recommended."),
      description: "Enter a brief meta description (up to 260 characters).",
    }),
    defineField({
      name: "keywords",
      title: "Meta keywords",
      type: "array",
      group: "seo",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),
    defineField({
      name: "hero",
      title: "Hero Slider",
      type: "array",
      of: [{ type: "sliderImage" }],
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",

      of: [{ type: "string" }],
    }),
  ],
});
