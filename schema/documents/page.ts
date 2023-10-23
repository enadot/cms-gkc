import { DocumentIcon } from "@sanity/icons";
import { defineField } from "sanity";
export default {
  name: "page",
  title: "Pages",
  icon: DocumentIcon,

  type: "document",
  groups: [
    {
      name: "seo",
      title: "SEO",
    },
    {
      name: "content",
    },
  ],
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "Enter the name of the page (CMS purposes only)",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
    },
    defineField({
      name: "title",
      title: "Page Title",
      description: "The <title/> of the page.",
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

    {
      name: "ogImage",
      title: "OG:Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],

  preview: {
    select: {
      title: "name",
      media: "ogImage",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
