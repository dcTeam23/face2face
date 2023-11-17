import type { StoryObj, Meta } from "@storybook/html";

import { avatar } from "./index";
import type { AvatarProps } from "./index";

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
const meta = {
  title: "App/Avatar",
  tags: ["autodocs"],
  render: (args) => {
    return avatar(args);
  },
  argTypes: {
    imgSrc: { description: "endereço para a imgaem do avatar" },
    descricao: { description: "descrição da imagem do avatar" },
    square: { description: "descrição da imagem do avatar" },
  },
} satisfies Meta<AvatarProps>;

export default meta;
type Story = StoryObj;

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const Primary: Story = {
  args: {
    imgSrc: "https://avatars.githubusercontent.com/u/88352602?v=4",
    descricao: "Octocat from Github ",
  },
};

export const Square: Story = {
  args: {
    square: true,
    imgSrc: "https://avatars.githubusercontent.com/u/88352602?v=4",
    descricao: "Octocat from Github ",
  },
};
