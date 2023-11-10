import type { StoryObj, Meta } from '@storybook/html';

import { avatar } from './index';
import type {AvatarProps} from './index';

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
const meta = {
  title: 'App/Avatar',
  tags: ['autodocs'],
  render: (args) => {
    return avatar(args);
  },
  argTypes: {
    imgSrc: {description: 'endereço para a imgaem do logo'},
    descricao: {description: 'descrição da imagem do logo'}
  }
} satisfies Meta<AvatarProps>;

export default meta;
type Story = StoryObj;

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const meuperfil: Story = {
  args: {
    link: 'github.com', 
    imgSrc: 'https://avatars.githubusercontent.com/u/133207241?v=4', 
    descricao: 'Octocat from Github '
  }
};

