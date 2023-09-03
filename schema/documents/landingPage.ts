import { DocumentIcon } from "@sanity/icons";

export default {
  name: "landingPage",
  title: "Landing Pages",
  icon: DocumentIcon,
  type: "document",
  fields: [
    {
      name: "publishedAt",
      title: "Published at",
      description: "Will automatically fill itself. For record only.",
      type: "datetime",
      options: {
        dateFormat: "MMMM DD, YYYY",
        timeFormat: "h:mm A",
        calendarTodayLabel: "Today",
      },
      initialValue: new Date().toISOString(),
    },

    {
      name: "title",
      title: "Title",
      description: "The main title which will show on the page header section",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      description: "gkcqueens.com/your-slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
    },

    {
      name: "mainImage",
      title: "Main Image",
      description: "Desktop only",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "projectsSlider",
      title: "Projects Slider",
      description:
        "Mobile only - Add/replace images for the main swiper at the header section",
      type: "array",
      of: [{ type: "image" }],
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
