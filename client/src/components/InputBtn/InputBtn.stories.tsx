import { ComponentType, ReactNode } from "react";
import InputBtn from "./InputBtn";
import { fn } from "@storybook/test";
import { Meta, StoryObj } from "@storybook/react";

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
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	args: { onClickHandle: fn() },
} satisfies Meta<typeof InputBtn>;

export default meta;

type Story = StoryObj<typeof meta>;

// option 1
export const Default: Story = {
  args: {
		placeholder: "default",
		buttonLabel: 'Button',
    id: 'btn',
	},
}

// option 2
export const ButtonWithInputImage = (): ReactNode => <InputBtn placeholder="button Text" buttonLabel="click" id="btn" onClickHandle={() => console.log("Clicked!!!")}/>