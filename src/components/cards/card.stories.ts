import type { StoryObj, Meta } from '@storybook/html';
import type { CardProps } from './index';
import { card } from './index';
// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
const meta = {
  title: 'App/Card',
  tags: ['autodocs'],
  render: (args) => {
    return card(args);
  },
  argTypes: {
    nome: {
      description: 'Nome que ira aparecer no card',
      defaultValue: { summary: "Profile Name" },
    },
    cargo: {
      description: 'Cargo que ira aparecer no card',
      defaultValue: { summary: "Profile Role" }
    },
    img: {
      description: 'URL da imagem do avatar',
      defaultValue: { summary: "Profile image" }
    },
    expanded: {
      description: 'Card em modo expandido',
      defaultValue: { summary: "False" }
    },
    SquareC: {
      description: 'Avatar com as bordas quadradas',
      defaultValue: { summary: "False" }
    },
    Mode: {
      description: "Modo de cores do card",
      control: { type: 'radio' },
      options: ['light', 'dark'],
      defaultValue: { summary: "Light" }
    }
  }
} satisfies Meta<CardProps>;

export default meta;
type Story = StoryObj;

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const Primary: Story = {
  args: {
    nome: ' Mr. Abraão Alves',
    cargo: 'The King of TypeScript',
    img: 'https://avatars.githubusercontent.com/u/608731?v=4',
    expanded: false,
    SquareC: false,
    Mode: 'light'
  }
};

export const Secondary: Story = {
  args: {
    nome: ' Mr. Abraão Alves',
    cargo: 'The King of TypeScript',
    img: 'https://avatars.githubusercontent.com/u/608731?v=4',
    expanded: true,
    SquareC: true,
    Mode: 'light'
  }
};