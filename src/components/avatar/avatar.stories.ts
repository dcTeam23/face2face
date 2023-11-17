import type { StoryObj, Meta } from '@storybook/html';
import { AvatarProps, avatar } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
const meta = {
  title: 'App/avatar',
  tags: ['autodocs'],
  render: (args) => {
    return avatar(args);
  },
  argTypes: {
    imgSrc: {description: 'endereço para a imagem do logo'},
    descricao: {description: 'descrição da imagem do logo'}
  }
} satisfies Meta<AvatarProps>;

export default meta;
type Story = StoryObj;

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const Primary: Story = {
  args: { 
    imgSrc: 'https://avatars.githubusercontent.com/u/608731?v=4', 
    descricao: 'Imagem do Avatar'
  }
};
