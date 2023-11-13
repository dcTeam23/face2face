import type { StoryObj, Meta } from '@storybook/html';
import { card } from './index';
import type { CardProps } from './index';

const meta = {
  title: 'App/Card',
  tags: ['autodocs'],    
  render: (args) => {
    return card(args);
  },
  argTypes: {
    nome: {description: 'nome do profile'},
    cargo: {description: 'cargo do profile'},
    img: {description: 'img do profile'},
  }
} satisfies Meta<CardProps>;

export default meta;

type Story = StoryObj;
export const Primary: Story = {
    args: {
        nome: 'Janaina Tannus',
        cargo: 'Desenvolvedora FrontEnd',
        imagem: 'https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833564.jpg?w=740&t=st=1699884088~exp=1699884688~hmac=1baef96a2de438acd045cb7e4ee76001b63b44da2ab07d183cbf838326e70ef8',
    },
};


