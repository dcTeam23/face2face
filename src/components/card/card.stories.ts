import type { StoryObj, Meta } from "@storybook/html";

import { card } from "./index";
import type { CardProps } from "./index";

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
const meta = {
  title: "App/Card",
  tags: ["autodocs"],
  render: (args) => {
    return card(args);
  },
  argTypes: {
    nome: { description: "nome do profile" },
    cargo: { description: "cargo do profile" },
    img: { description: "imagem do profile" },
    expanded: { description: "alterar vizualizacao do profile" },
  },
} satisfies Meta<CardProps>;

export default meta;
type Story = StoryObj;

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const Primary: Story = {
  args: {
    nome: "Daniel Machado",
    cargo: "developer",
    img: "https://avatars.githubusercontent.com/u/88352602?v=4",
  },
};

export const Expanded: Story = {
  args: {
    expanded: true,
    nome: "Daniel Machado",
    cargo: "developer",
    img: "https://avatars.githubusercontent.com/u/88352602?v=4",
  },
};
