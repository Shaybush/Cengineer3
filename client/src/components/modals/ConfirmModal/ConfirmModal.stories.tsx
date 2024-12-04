import { ReactNode, useState } from "react";
import { expect, userEvent, within } from "@storybook/test";
import { Meta } from "@storybook/react";
import ConfirmModal from "./ConfirmModal";

const meta = {
  title: "components/ConfirmModal",
  component: ConfirmModal,
  parameters: {
    controls: { exclude: /^(isOpen|onClose|children)$/g },
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Story />
      </div>
    ),
  ],
  play: async ({ canvasElement }) => {
    const { getByRole, queryByRole } = within(canvasElement);

    // Open Modal
    const openButton = getByRole("button", { name: "Open Modal" });
    await userEvent.click(openButton);

    // Ensure Modal Opens
    const modal = getByRole("dialog");
    expect(modal).toBeInTheDocument();

    // Interact with Modal Content
    const closeModalButton = getByRole("button", { name: "Close Modal" });
    expect(closeModalButton).toBeInTheDocument();

    // Close Modal
    await userEvent.click(closeModalButton);

    // Ensure Modal Closes
    expect(queryByRole("dialog")).not.toBeInTheDocument();
  },
} satisfies Meta<typeof ConfirmModal>;

export default meta;

export const ButtonWithInputImage = (): ReactNode => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="p-4">
      <button
        onClick={openModal}
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Open Modal
      </button>

      <ConfirmModal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-2xl font-bold mb-4">Modal Title</h2>
        <p className="mb-4">This is the modal content. You can put any React components or HTML here.</p>
        <button
          onClick={closeModal}
          className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
        >
          Close Modal
        </button>
      </ConfirmModal>
    </div>
  );
};
