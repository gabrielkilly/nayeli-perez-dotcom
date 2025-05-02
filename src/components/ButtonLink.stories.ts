import type { Meta, StoryObj } from '@storybook/react';
 
import ButtonLink, { ButtonIcon } from './ButtonLink';
 
const meta: Meta<typeof ButtonLink> = {
  component: ButtonLink,
};
 
export default meta;
type Story = StoryObj<typeof ButtonLink>;

export const Default: Story = {
  args: {
    title: "Default",
    url: "/test",
  }
};

export const Download: Story = {
  args: {
    title: "Default",
    url: "/test",
    icon: ButtonIcon.Download
  }
};