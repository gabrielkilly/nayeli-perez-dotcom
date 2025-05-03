import type { Meta, StoryObj } from '@storybook/react';
import IntroImageBanner from './IntroImageBanner';

const meta: Meta<typeof IntroImageBanner> = {
  component: IntroImageBanner,
  title: 'Components/IntroImageBanner',
  argTypes: {
    imageSources: {
      control: 'object',
      description: 'An array of image source URLs to display in the banner',
      table: {
        type: { summary: 'string[]' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof IntroImageBanner>;

export const Default: Story = {
  args: {
    imageSources: [
      'key-record-page-redesign.png',
      'key-record-page-redesign.png',
    ],
  },
};

export const OneImage: Story = {
    args: {
      imageSources: [
        'key-record-page-redesign.png',
      ],
    },
  };