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
    link: {description: 'endereço para o link do Avatar'},
    imgSrc: {description: 'endereço para a imagem do Avatar'},
    descricao: {description: 'descrição da imagem do Avatar'}
  }
} satisfies Meta<AvatarProps>;

export default meta;
type Story = StoryObj;

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const Primary: Story = {
  args: {
    link: 'https://github.com/jmtannus', 
    imgSrc: 'https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833564.jpg?w=826&t=st=1699886896~exp=1699887496~hmac=3c0017e78aac70da1e95fb8109f694eaf1db0cd5d9c6f565bd45fd36fab5cc84', 
    descricao: 'Avatar'
  }
};

