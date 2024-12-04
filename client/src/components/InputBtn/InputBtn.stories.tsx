import { ComponentType, ReactNode } from "react";
import { expect, userEvent, within } from "@storybook/test";
import { Meta, StoryObj } from "@storybook/react";
import InputBtn from "./InputBtn";

const meta = {
  title: 'components/InputBtn',
  component: InputBtn,
  parameters: {
    controls: { exclude: /^(placeholder|buttonLabel|id|onClickHandle|btnType|type|name|children)$/g },
  },
  decorators: [
    (Story: ComponentType) => (
      <div style={{ height: '130vh' }}>
        <Story />
      </div>
    ),
  ],
  play: async ({ canvasElement }) => {
    const { getByRole } = within(canvasElement);

    // Interact with the input
    const input = getByRole('textbox');
    await userEvent.type(input, 'test input', { delay: 100 }); // Simulates typing into the input
    expect(input).toHaveValue('test input'); // Verifies the value of the input

    // Interact with the button
    const button = getByRole('button');

    // Mock console.log for testing
    const originalConsoleLog = console.log;
    let logCaptured = false;

    console.log = (...args: any[]) => {
      if (args[0] === "Button clicked!") {
        logCaptured = true;
      }
      originalConsoleLog(...args);
    };

    try {
      await userEvent.click(button); // Simulates button click

      // Verify the click action by checking the captured log
      expect(logCaptured).toBe(true); // Ensures "Button clicked!" was logged
    } finally {
      // Restore the original console.log
      console.log = originalConsoleLog;
    }
  },
} satisfies Meta<typeof InputBtn>;

export default meta;

type Story = StoryObj<typeof meta>;

// Story version
export const Default: Story = {
  args: {
    placeholder: "default",
    buttonLabel: 'Button',
    id: 'btn',
  },
}

// Component Story version
export const ButtonWithInputIcon = (): ReactNode => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <InputBtn
      placeholder="button Text"
      buttonLabel="click"
      id="btn"
      onClickHandle={handleClick}
      inputIcon="arrow-left"
    />
  );
};

export const ButtonWithIcon = (): ReactNode => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <InputBtn
      placeholder="button Text"
      buttonLabel="click"
      id="btn"
      onClickHandle={handleClick}
      buttonIcon="at"
    />
  );
};
