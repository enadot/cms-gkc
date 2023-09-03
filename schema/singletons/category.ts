import { StackCompactIcon } from '@sanity/icons';
export default {
  name: 'category',
  title: 'Categories',
  icon: StackCompactIcon,
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
  ],
};
