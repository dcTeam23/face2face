import type { StoryObj, Meta } from '@storybook/html';

import { CardProps, card } from './card';

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
const meta = {
  title: 'App/Card',
  tags: ['autodocs'],
  render: (args) => {
    return card(args);
  },
  argTypes: {

    nome: {description: 'nome do profile'},
    cargo: {description: 'cargo do profile'},
    img: {description: 'endereço para a imgaem do logo'},
  }
} satisfies Meta<CardProps>;

export default meta;
type Story = StoryObj;

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const Primary: Story = {
  args: {
   nome: 'Paulo Luan',
   cargo: 'Student Full Stack Developer',
   img: 'https://avatars.githubusercontent.com/u/116959774?v=4',
  }
};