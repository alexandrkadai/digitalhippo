import { CollectionConfig } from 'payload/types';

const Users: CollectionConfig = {
  slug: 'users',
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
