import { Meta, StoryObj } from "@storybook/react";
import BeforeAfterCard from "./BeforeAfterCard";

const meta: Meta<typeof BeforeAfterCard> = {
  component: BeforeAfterCard,
  title: 'Components/BeforeAfterCard',
};

export default meta;
type Story = StoryObj<typeof BeforeAfterCard>;

export const Default: Story = {
  args: {
    cardContent: {
        title: "Stock Details Page",
        beforeImageSrc: "https://placehold.co/500x750/maroon/white",
        afterImageSrc: "https://placehold.co/500x750/maroon/white"
    }
  },
};