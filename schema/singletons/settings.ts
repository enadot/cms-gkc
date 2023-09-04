import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "settings",
  title: "Site Settings",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Site Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Meta Description",
      type: "text",
      validation: (Rule) =>
        Rule.required().max(260).warning("Maximum 260 characters recommended."),
      description: "Enter a brief meta description (up to 260 characters).",
    }),
    defineField({
      name: "keywords",
      title: "Meta keywords",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),
  ],
});
