import { Meta, StoryObj } from '@storybook/react';
import Loader from './Loader';

const meta = {
  title: 'components/Loader',
  component: Loader,
  decorators: [
    (Story) => (
        <Story />
    ),
  ],
} satisfies Meta<typeof Loader>;

export default meta;

type Story = StoryObj<typeof meta>;

// Default Story
export const Default: Story = {};
