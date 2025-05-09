import { Meta, StoryObj } from "@storybook/react";
import ResultListItems from "./ResultListItems";

const meta: Meta<typeof ResultListItems> = {
  component: ResultListItems,
  title: 'Components/ResultListItems',
};

export default meta;
type Story = StoryObj<typeof ResultListItems>;

export const Default: Story = {
  args: {
    resultContent: {
        items: [
            {
                iconIdentifier: "up",
                title: "Increased ease of use",
                description: "Improved pages enabled team members to easily understand history and next required action for parts and stocks, which increased production efficiency."
            },
            {
                iconIdentifier: "down",
                title: "Reduced time to identify issues by 50%",
                description: "Supervisors were able to identify issues or reasons for delayed parts or stocks 50% faster."
            },
            {
                iconIdentifier: "down",
                title: "Reduced production cycle time by 15%",
                description: "The new statuses and logic enabled the system to accurately reflect real-world failure outcomes (Discarded, Canceled, Failed tasks), which enabled teams to mitigate delays more efficiently."
            }
        ]
    }
  },
};