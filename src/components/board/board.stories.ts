import type { StoryObj, Meta } from "@storybook/html";
import type { BoardProps } from "./index";
import { board } from "./index";
// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
const meta = {
  title: "App/Board",
  render: (args) => {
    return board(args);
  },
  argTypes: {
    perfil: { cargo: "profile" },
    list: { description: "list of profiles" },
    mode: {
      description: "mode style",
      control: "select",
      options: ["dark", "light"],
      defaultValue: "light"
    },
  },
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/html/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<BoardProps>;

export default meta;
type Story = StoryObj;

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const Primary: Story = {
  args: {
    mode: "light",
    perfil: {
      nome: " Mr. Abraão Alves",
      cargo: "The King of TypeScript",
      img: "https://avatars.githubusercontent.com/u/608731?v=4",
    },
    list: [
      {
        img: "https://avatars.githubusercontent.com/u/134713721?s=96&v=4",
        nome: "Cecilio Antunes",
      },
      {
        img: "https://avatars.githubusercontent.com/u/88352602?s=96&v=4",
        nome: "Daniel Pinheiro",
      },
      {
        img: "https://avatars.githubusercontent.com/u/126329530?s=96&v=4",
        nome: "Davi Portela",
      },
      {
        img: "https://avatars.githubusercontent.com/u/134714036?s=96&v=4",
        nome: "Rodrigo Neto",
      },
      {
        img: "https://avatars.githubusercontent.com/u/84153149?s=96&v=4",
        nome: "João Vitor",
      },

      {
        img: "https://avatars.githubusercontent.com/u/134714027?s=96&v=4",
        nome: "Tenisson Paiva",
      },
      {
        img: "https://avatars.githubusercontent.com/u/61756665?s=96&v=4",
        nome: "Janaina Tannus",
      },
      {
        img: "https://avatars.githubusercontent.com/u/105735580?s=96&v=4",
        nome: "George Barreira",
        link: "https://github.com/georgebarreira10",
      },
      {
        img: "https://avatars.githubusercontent.com/u/126998848?s=96&v=4",
        nome: "Wendel Braga",
      },
      {
        img: "https://avatars.githubusercontent.com/u/134713736?s=96&v=4",
        nome: "Thiago Duarte",
      },
    ],
  },
};
