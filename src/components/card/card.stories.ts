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
    nome: 'Yan Felipe',
    cargo: 'Web Development',
    img: 'https://img.freepik.com/psd-gratuitas/ilustracao-3d-de-avatar-ou-perfil-humano_23-2150671116.jpg?t=st=1699623817~exp=1699624417~hmac=cb23c24d0f509f138b36b639fb3bd96346c3269852e92c7fe0d5571e0bbe281d',
  },
};