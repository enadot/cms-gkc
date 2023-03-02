import { TagIcon } from '@sanity/icons';
export default {
  name: 'bathroom',
  title: 'Bathroom',
  icon: TagIcon,
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'tag',
      title: 'tag',
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
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
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
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'firsttitle',
      title: 'First Title',
      type: 'string',
    },
    {
      name: 'firstparagraph',
      title: 'First Paragraph',
      type: 'string',
    },
    {
      name: 'firstImage',
      title: 'First image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'secondImage',
      title: 'Second image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'thirdImage',
      title: 'Third image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'secondtitle',
      title: 'Second Title',
      type: 'string',
    },
    {
      name: 'secondparagraph',
      title: 'Second Paragraph',
      type: 'string',
    },

    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
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
