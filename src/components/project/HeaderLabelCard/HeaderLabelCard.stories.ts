import type { Meta, StoryObj } from '@storybook/react';

import HeaderLabelCard from './HeaderLabelCard';

const meta: Meta<typeof HeaderLabelCard> = {
  component: HeaderLabelCard,
  argTypes: {
    cardContent: {
      control: 'object',
      description: 'Content for the HeaderLabelCard component',
      table: {
        type: { summary: 'object' },
      },
      defaultValue: {
        headersAndLabels: [],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof HeaderLabelCard>;

export const Default: Story = {
  args: {
    cardContent: {
      headersAndLabels: [
        {
          header: 'Role',
          description: 'Lead design for Manufacturing Execution System (MES)',
        },
        {
          header: 'Timeline',
          description: 'February 2023 – March 2024',
        },
        {
          header: 'Collaboration',
          description: 'Head of Product, Production team, 7 Software engineers',
        },
      ],
    },
  },
};