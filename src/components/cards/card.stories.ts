import type { StoryObj, Meta } from '@storybook/html';
import type { CardProps } from './index';
import { card } from './index';
// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
const meta = {
  title: 'App/Card',
  tags: ['autodocs'],
  render: (args) => {
    return card(args);
  },
  argTypes: {
    nome: {description: 'nome do profile', defaultValue: {summary: "Profile Name"}, },
    cargo: {description: 'cargo do profile', defaultValue: {summary: "Profile Role"}},
    img: {description: 'URL da imagem do profile', defaultValue: {summary: "Profile image"}},
    expanded: {description: 'Card em modo expandido', defaultValue: {summary: "False"}} ,
    SquareC: {description: 'Imagem quadrada', defaultValue: {summary: "False"}}
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
    expanded: false,
    SquareC: false 
  }
};

export const Secondary: Story = {
  args: { 
    nome: ' Mr. Abraão Alves',
    cargo: 'The King of TypeScript',
    img: 'https://avatars.githubusercontent.com/u/608731?v=4', 
    expanded: true,
  }
};