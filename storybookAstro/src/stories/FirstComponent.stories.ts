import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FirstComponent } from '../components/FirstComponent';

const meta: Meta<typeof FirstComponent> = {
    component: FirstComponent,
};
export default meta;

type Story = StoryObj<typeof FirstComponent>;

export const Primary: Story = {
    args: {
        info: "Este es un contenido de ejemplo para FirstComponent.",
    },
};
