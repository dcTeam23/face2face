import type { StoryObj, Meta } from '@storybook/html';

import type { CardProps } from './index';
import { card } from './index';

// Mais sobre como configurar histórias em: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
const meta = {
  title: 'App/Card',
  tags: ['autodocs'],    
  render: (args) => {
    return card(args);
  },
  argTypes: {
    nome: {description: 'nome do objeto de avatar'},
    cargo: {description: 'cargo do objeto de avatar'},
    img: {description: 'endereço para img do avatar'},
  }
} satisfies Meta<CardProps>;

export default meta;
// Mais sobre como escrever histórias com argumentos: with args: https://storybook.js.org/docs/html/writing-stories/args
type Story = StoryObj;
export const Primary: Story = {
    args: {
        nome: 'Janna Tannus',
        cargo: 'Desenvolvedora FrontEnd',
        imagem: 'https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833564.jpg?w=826&t=st=1699886896~exp=1699887496~hmac=3c0017e78aac70da1e95fb8109f694eaf1db0cd5d9c6f565bd45fd36fab5cc84',
    },
};


