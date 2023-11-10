import type { StoryObj, Meta } from '@storybook/html';

import { avatar } from './indice';
import type {AvatarProps} from './indice';

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
const meta = {
  title: 'App/Avatar',
  tags: ['autodocs'],
  render: (args) => {
    return avatar(args);
  },
  argTypes: {
    link: {description: 'endereço para o link do logo'},
    imgSrc: {description: 'endereço para a imgaem do logo'},
    descricao: {description: 'descrição da imagem do logo'}
  }
} satisfies Meta<AvatarProps>;

export default meta;
type Story = StoryObj;

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const Primary: Story = {
  args: {
    link: 'github.com', 
    imgSrc: 'https://github.githubassets.com/assets/mona-loading-dark-7701a7b97370.gif', 
    descricao: 'Octocat from Github '
  }
};

