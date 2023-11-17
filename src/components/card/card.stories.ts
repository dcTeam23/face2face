    import type { StoryObj, Meta } from '@storybook/html';

    import { card } from './';
    import type { CardProps } from './';

    // More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
    const meta = {
    title: 'App/Card',
    tags: ['autodocs'],
    render: (args) => {
        return card(args);
    },
    argTypes: {
        nome: {description: 'endereço para a imgaem do logo'},
        cargo: {description: 'descrição da imagem do logo'},
        img: {description: 'imagem do avatar'},
        nameHobby: { control: { type: 'select' },
        options: ['academia', 'cozinhar', 'dormir', 'filmes', 'games', 'ler', 'música', 'programar', 'viajar'], }
    }
    } satisfies Meta<CardProps>;

    export default meta;
    type Story = StoryObj;

    // More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
    export const Primary: Story = {
    args: {
        nome: 'Abraão Alves',
        cargo: 'Software Engineer',
        img: 'https://avatars.githubusercontent.com/u/608731?v=4', 
        nameHobby: 'programar'
    }
    };

