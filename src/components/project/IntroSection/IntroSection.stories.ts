import type { Meta, StoryObj } from '@storybook/react';
import IntroSection from './IntroSection';
import { Default as HeaderLabelCardStory } from '@/components/project/HeaderLabelCard/HeaderLabelCard.stories';
import { Default as IntroImageBannerStory } from '@/components/project/IntroImageBanner/IntroImageBanner.stories';

const meta: Meta<typeof IntroSection> = {
  component: IntroSection,
  title: 'Components/IntroSection',
};

export default meta;
type Story = StoryObj<typeof IntroSection>;

/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
export const Default: Story = {
  args: {
    introContent: {
        title: 'Project: Re-designing Gantri’s core building blocks, Parts and Stocks, for improved efficiency',
        description: 'At Gantri, I lead design for our Manufacturing Execution System. Our MES is home-grown and built for 3D printing (additive) manufacturing. Jobs, parts and stocks (i) are the building blocks of Gantri\'s MES system.\n\nOver time, Part and Stock details pages had become exceedingly dense. In early 2023, I led a redesign of the Stocks and Parts details pages.',
        imageSources: IntroImageBannerStory.args?.imageSources!,
        details: {
            ...HeaderLabelCardStory.args?.cardContent!
        },
    }
  },
};