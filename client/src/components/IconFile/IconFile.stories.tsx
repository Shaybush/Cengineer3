import { Meta, StoryObj } from '@storybook/react';
import IconFile from './IconFile';
import { MemoryRouter } from 'react-router-dom';

const meta = {
  title: 'components/IconFile',
  component: IconFile,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  parameters: {
    controls: { exclude: /^(link|iconSrc)$/ },
  },
} satisfies Meta<typeof IconFile>;

export default meta;

type Story = StoryObj<typeof meta>;

// Default Story
export const Default: Story = {
  args: {
    width: 24,
    height: 24,
    iconSrc: 'at',
  },
};

// Linked Icon
export const LinkedIcon: Story = {
  args: {
    styleClass: 'icon-class',
    width: 32,
    height: 32,
    iconSrc: 'lock',
    link: '/settings',
  },
};
