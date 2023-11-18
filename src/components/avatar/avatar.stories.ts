import type { StoryObj, Meta } from '@storybook/html';
import { AvatarProps, avatar } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
const meta = {
  title: 'App/Avatar',
  tags: ['autodocs'],
  render: (args) => {
    return avatar(args);
  },
  argTypes: {
    imgSrc: {description: 'URL da imagem do avatar'},
    descricao: {description: 'descrição da imagem do logo'},
    square: {description: 'Define as bordas como quadradas', defaultValue: {summary: "False"}}
  }
} satisfies Meta<AvatarProps>;

export default meta;
type Story = StoryObj;

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const Primary: Story = {
  args: { 
    imgSrc: 'https://s2-g1.glbimg.com/gZrnzQkY70EZ2ZP0zwB689bUAak=/0x0:5184x3456/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/9/e/EYKMBXR72tNdkUAgmZzQ/azul-caneta.jpg', 
    descricao: 'Octocat from Github ',
    square: false,
  }
};

export const Secondary: Story = {
  args: { 
    imgSrc: 'https://s2-g1.glbimg.com/gZrnzQkY70EZ2ZP0zwB689bUAak=/0x0:5184x3456/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/9/e/EYKMBXR72tNdkUAgmZzQ/azul-caneta.jpg', 
    descricao: 'Octocat from Github ',
    square: true,
  }
};



