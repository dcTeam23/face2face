import type { StoryObj, Meta } from '@storybook/html';
import type { CardProps } from './index';
import { card } from './index';
// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
const meta = {
  title: 'App/card',
  tags: ['autodocs'],
  render: (args) => {
    return card(args);
  },
  argTypes: {
    nome: {cargo: 'nome do profile'},
    cargo: {description: 'descrição da imagem do logo'},img: {description: 'descrição da imagem do logo'}
  }
} satisfies Meta<CardProps>;

export default meta;
type Story = StoryObj;

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const Primary: Story = {
  args: { 
    nome: ' Mr. Abraão Alves',
    cargo: 'The King of TypeScript',
    img: 'https://avatars.githubusercontent.com/u/608731?v=4', 
    
  }
};



