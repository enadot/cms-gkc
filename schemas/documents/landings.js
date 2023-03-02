import { DocumentIcon } from '@sanity/icons';
export default {
  name: 'landings',
  title: 'Landings',
  icon: DocumentIcon,
  type: 'document',
  fields: [
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      options: {
        dateFormat: 'MMMM DD, YYYY',
        timeFormat: 'h:mm A',
        calendarTodayLabel: 'Today',
      },
      initialValue: new Date().toISOString(),
    },

    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
    },

    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      options: {
        includeFromRelated: 'tags',
        layout: 'tags',
      },
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
