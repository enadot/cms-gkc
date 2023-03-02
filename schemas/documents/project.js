import { CaseIcon } from '@sanity/icons';
export default {
  name: 'project',
  title: 'Projects',
  icon: CaseIcon,
  type: 'document',
  fields: [
    {
      name: 'featured',
      title: 'Featured?',
      description: `Enable if you'd like to feature this project on the homepage`,
      type: 'boolean',
    },
    {
      name: 'title',
      title: 'Title',
      description: 'Enter name for the project',
      type: 'string',
      validation: (rule) => rule.required(),
    },

    {
      name: 'slug',
      title: 'Slug',
      description: 'Click on "Generate" (Alternatively, write down your own)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
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
      name: 'firsttitle',
      title: 'First Title',
      type: 'string',
    },
    {
      name: 'firstparagraph',
      title: 'First Paragraph',
      type: 'text',
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
      type: 'text',
    },
    {
      name: 'fourthImage',
      title: 'Fourth image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'fifthImage',
      title: 'Fifth image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'sixthImage',
      title: 'Sixth image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'seventhImage',
      title: 'Seventh image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
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
