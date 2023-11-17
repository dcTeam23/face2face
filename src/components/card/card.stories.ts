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
    nome: 'Osvaldo Holanda',
    cargo: 'Web Developer',
    img: 'https://avatars.githubusercontent.com/u/103774096?s=400&u=4fe9f493354559b971033b9dc7852c7f966f1264&v=4',
  },
};

