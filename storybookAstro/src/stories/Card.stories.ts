import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../components/Card';
import { fn } from '@storybook/test';

const meta: Meta<typeof Card> = {
    component: Card,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Primary: Story = {
    args: {
        title: "Título Primario ",
        description: "Una Sana Descripción Primaria",
        onCapture: fn(),
        btnColor: 'green',
    },
};

export const Second = {
    args: {
        title: "Título Secundario",
        description: "Una Sana Descripción Secundaria",
        onCapture: fn(),
        btnColor: 'red',
    },
};

export const Terciario: Story = {
    args: {
        title: "Título Terciario",
        description: "Una Sana Descripción Terciaria",
        onCapture: () => { console.log('Captura realizada'); },
        btnColor: 'gold',
    },
};