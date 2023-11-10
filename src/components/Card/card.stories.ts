import type { StoryObj, Meta } from '@storybook/html';

import {card} from './index';
import type {CardProps} from './index';
import fotoPerfil from './FotoPerfil.jpg'
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
    img: {description: 'endereço para a imagem'}

  }
} satisfies Meta<CardProps>;

export default meta;
type Story = StoryObj;

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const Primary: Story = {
  args: {
    nome: 'Rafael Leite', 
    img: fotoPerfil, 
    cargo: 'Saco de pancada de problemas de codigos '
  }
};

