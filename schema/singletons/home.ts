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
      name: "media",
    },
    {
      name: "content",
    },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Homepage Title",
      description: "The <title/> of the homepage.",
      type: "string",
      group: "seo",
    }),
    defineField({
      name: "description",
      title: "Meta Description",
      type: "text",
      group: "seo",
      rows: 4,
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
      group: "media",
      description: "The main hero slider on the homepage.",
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
