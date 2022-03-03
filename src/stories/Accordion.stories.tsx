import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Accordion } from '@/components/common/index';

export default {
  title: 'Common/Accordion',
  component: Accordion,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
