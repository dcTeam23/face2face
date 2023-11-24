import type { StoryObj, Meta } from "@storybook/html";
import type { BoardProps } from "./index";
import { board } from "./index";
// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
const meta = {
  title: "App/Board",
  tags: ["autodocs"],
  render: (args) => {
    return board(args);
  },
  argTypes: {
    perfil: { cargo: "profile" },
    list: { description: "list of profiles" },
    mode: { description: "mode style"}
  },
} satisfies Meta<BoardProps>;

export default meta;
type Story = StoryObj;

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const Primary: Story = {
  args: {
    mode: 'light',
    perfil: {
      nome: " Mr. Abraão Alves",
      cargo: "The King of TypeScript",
      img: "https://avatars.githubusercontent.com/u/608731?v=4",
    },
    list: [
      {
        img: "https://avatars.githubusercontent.com/u/135337339?s=96&v=4",
        nome: "Breno Oliveira",
      },
      {
        img: "https://avatars.githubusercontent.com/u/134713721?s=96&v=4",
        nome: "Cecilio Antunes",
      },
      {
        img: "https://avatars.githubusercontent.com/u/88352602?s=96&v=4",
        nome: "Daniel Pinheiro Machado",
      },
      {
        img: "https://avatars.githubusercontent.com/u/126329530?s=96&v=4",
        nome: "Davi Portela",
      },
    ],
  },
};
