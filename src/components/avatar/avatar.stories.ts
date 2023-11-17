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
    imgSrc: 'https://github.com/jmtannus/face2face/assets/61756665/2abb68b3-794b-4ade-8784-c973c231a395', 
    descricao: 'Avatar'
  }
};

