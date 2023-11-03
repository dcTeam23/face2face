import type { StoryObj, Meta } from '@storybook/html';
import { logo } from './logo.js';

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
const meta = {
    title: 'App/Logo',
    tags: ['autodocs'],
    render: () => {
        // You can either use a function to create DOM elements or use a plain html string!
        // return `<div>${label}</div>`;
        return logo("google.com", "../../../public/vite.svg", "Vite");
    },

    argTypes: {
        Logo: {
            control: { type: 'select' },
            options: ['Vite', 'JavaScript'],
        },
    }
} satisfies Meta;

export default meta;
type Story = StoryObj;

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const Vite: Story = {
    args: {
        Logo: "Vite"
    },
};