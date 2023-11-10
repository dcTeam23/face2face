import type { StoryObj, Meta } from '@storybook/html';

import { CardProps, card } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
const meta = {
  title: 'App/card',
  tags: ['autodocs'],
  render: (args) => {
    return card(args);
  },
  argTypes: {
    nome: {description: 'endereço para o nome do logo'},
    img: {description: 'endereço para a imgaem do logo'},
    cargo: {description: 'descrição da imagem do logo'}
  }
} satisfies Meta<CardProps>;

export default meta;
type Story = StoryObj;

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const Primary: Story = {
  args: {
    nome: 'Polvo', 
    img: 'https://github.githubassets.com/assets/mona-loading-dark-7701a7b97370.gif', 
    cargo: 'Emoji Github'
  }
};

