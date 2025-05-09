import { Meta, StoryObj } from "@storybook/react";
import PresentationPager from "./PresentationPager";

const meta: Meta<typeof PresentationPager> = {
  component: PresentationPager,
  title: 'Components/PresentationPager',
};

export default meta;
type Story = StoryObj<typeof PresentationPager>;

export const Default: Story = {
  args: {
    pagerContent: {
        items: [
            {
                description: "Workers must scroll through dense lists of tasks to verify that they are taking the right action on the right item.",
                imageSrc: "https://placehold.co/400x300/maroon/white"
            },
            {
                description: "Supervisors struggle to find discrepancy or delay reasons when reviewing pages.",
                imageSrc: "https://placehold.co/400x300/gray/white"
            },
            {
                description: "Supervisors must scroll through an abundance of detailed information to uncover which parts or stocks actually require attention or special action.",
                imageSrc: "https://placehold.co/400x300/green/white"
            }
        ],
    }
  },
};