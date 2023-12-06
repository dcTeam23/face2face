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
    nome: {cargo: 'Nome do Perfil'},
    cargo: {description: 'Descrição da Imagem do Perfil'},
    img: {description: 'Link (URL) da Imagem do Perfil'},
    bannerColor: {description: 'Cor de Destaque do Card', control: 'text'},
    expanded: { description: 'Formato do Card', control: "boolean"},
    mode: { description: 'Temas: Light ou Dark', control: { type: 'radio' },
    options: ['light', 'dark'], }
  }
} satisfies Meta<CardProps>;

export default meta;
type Story = StoryObj;

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const Card: Story = {
  args: { 
    nome: 'Abraão Alves',
    cargo: 'Software Engineer',
    img: 'https://avatars.githubusercontent.com/u/608731?v=4', 
    bannerColor: '#2F69FE',
    expanded: false,
    mode: 'light'
  }
};

export const CardExpanded: Story = {
  args: { 
    nome: 'Abraão Alves',
    cargo: 'Software Engineer',
    img: 'https://avatars.githubusercontent.com/u/608731?v=4', 
    bannerColor: '#1F57E7',
    expanded: true,
    mode: 'light'
  }
};


