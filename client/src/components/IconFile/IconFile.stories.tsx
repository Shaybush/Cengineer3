import { Meta, StoryObj } from '@storybook/react';
import { expect, within, userEvent } from '@storybook/test';
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
  play: async ({ canvasElement, args }) => {
    const { getByRole } = within(canvasElement);

    // Check for image presence
    const img = getByRole('img', { name: 'icon' });
    await expect(img).toHaveAttribute('src', args.iconSrc || '');
    await expect(img).toHaveAttribute('width', args.width?.toString() || '16');
    await expect(img).toHaveAttribute('height', args.height?.toString() || '16');
    
    // If link is provided, test its existence
    if (args.link) {
      const link = canvasElement.querySelector('a');
      expect(link).toHaveAttribute('href', args.link);
      userEvent.click(link!); // Simulate user clicking the link
    }
  },
} satisfies Meta<typeof IconFile>;

export default meta;

type Story = StoryObj<typeof meta>;

// Default Story
export const Default: Story = {
  args: {
    styleClass: 'icon-class',
    width: 24,
    height: 24,
    iconSrc: 'home', // Replace with a valid key from `iconConfig`
  },
};

// Linked Icon
export const LinkedIcon: Story = {
  args: {
    styleClass: 'icon-class',
    width: 32,
    height: 32,
    iconSrc: 'settings', // Replace with a valid key from `iconConfig`
    link: '/settings',
  },
};
