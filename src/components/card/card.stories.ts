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
    nome: { description: 'Nome do objeto de avatar' },
    img: { description: 'endereço para a imagem do avatar' },
    cargo: { description: 'cargo do objeto de avatar' },
    idade: { description: 'Idade do objeto de avatar' },
    cor: {
      control: { type: 'select' },
      options: ['azul', 'verde', 'vermelho', 'default'],
      default: "default",
      description: "Cor da borda",

    },
    blur: {
      control: {type: 'radio'},
      options: ['blur', "Sem Blur"],   
      description: "Ativação do blur nas informações do card"
    }
  }
} satisfies Meta<CardProps>;

export default meta;
// Mais sobre como escrever histórias com argumentos: with args: https://storybook.js.org/docs/html/writing-stories/args
type Story = StoryObj;
export const Primary: Story = {
    args: {
        nome: 'Janna Tannus',
        cargo: 'Desenvolvedora FrontEnd',
        img: 'https://github.com/jmtannus/face2face/assets/61756665/2abb68b3-794b-4ade-8784-c973c231a395',
    }
}


