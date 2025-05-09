import { Meta, StoryObj } from "@storybook/react";
import BasicCard from "./BasicCard";

const meta: Meta<typeof BasicCard> = {
  component: BasicCard,
  title: 'Components/BasicCard',
};

export default meta;
type Story = StoryObj<typeof BasicCard>;

export const Default: Story = {
  args: {
    cardContent: {
        title: "New details page template introudced",
        description: "Workers must scroll through dense lists of tasks to verify that they are taking the right action on the right item.",
        imageSrc: "https://placehold.co/500x500/maroon/white",
    }
  },
};