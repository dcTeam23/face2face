import type { StoryObj, Meta } from '@storybook/html';

import { counter } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
const meta = {
  title: 'App/Counter',
  tags: ['autodocs'],
  parameters:{
    layout: 'fullscreen'
  },
  render: () => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return counter();
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const Primary: Story = {
  args: {},
};

