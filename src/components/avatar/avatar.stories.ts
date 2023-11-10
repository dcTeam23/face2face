import type { StoryObj, Meta } from '@storybook/html';

import { avatar } from './index';
import type {avatarProps} from './index';

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
const meta = {
  title: 'App/avatar',
  tags: ['autodocs'],
  render: (args) => {
    return avatar(args);
  },
  argTypes: {
    link: {description: 'endereço para o link do avatar'},
    imgSrc: {description: 'endereço para a imagem do avatar'},
    descricao: {description: 'descrição da imagem do avatar'}
  }
} satisfies Meta<avatarProps>;

export default meta;
type Story = StoryObj;

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const Primary: Story = {
  args: {
    link: 'github.com', 
    imgSrc: 'https://avatars.githubusercontent.com/u/61756665?v=4', 
    descricao: 'Octocat from Github '
  }
};

