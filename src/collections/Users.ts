import { CollectionConfig } from 'payload/types';

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: 'role',
      type: 'select',
      options: [
<<<<<<< HEAD
        { label: 'Admin', value: 'admin' },
        { label: 'User', value: 'user' },
=======
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'User',
          value: 'User',
        },
>>>>>>> save-my-work
      ],
    },
  ],
};
