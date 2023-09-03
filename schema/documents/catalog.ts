import { BookIcon } from '@sanity/icons';
export default {
  name: 'catalog',
  title: 'Catalogs',
  icon: BookIcon,
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'Image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'PDF',
      title: 'pdf',
      type: 'file',
    },
  ],
};
