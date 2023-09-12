import { CalendarIcon } from "@sanity/icons";
export default {
  name: "post",
  title: "Blog Posts",
  icon: CalendarIcon,
  type: "document",
  fields: [
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      options: {
        dateFormat: "MMMM DD, YYYY",
        timeFormat: "h:mm A",
        calendarTodayLabel: "Today",
      },
      initialValue: new Date().toISOString(),
    },

    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    },

    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      
    
    },

    {
      name: "title",
      title: "Title",
      description: `Make it as enticing as possible to convert users in social feeds and Google searches. Ideally between 15 and 70 characters`,
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    },
    {
      name: "metaDescription",
      title: "Short paragraph for SEO & social sharing (meta description)",
      description: `⚡️ Optional but highly encouraged as it'll help you convert more visitors from Google & SocialDistance. Ideally between 70 and 160 characters`,
      type: "text",
    },

    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
