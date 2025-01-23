import '@testing-library/jest-dom';
import axios from 'axios';
import { todosMockData } from './mock/todos-mock.data';
import { render, screen, act, fireEvent } from '@testing-library/react';
import Dashboard from './Dashboard';

jest.mock('axios');
const mockedAxios = axios as jest.MockedFunction<typeof axios>;

describe('Dashboard component', () => {
	beforeEach(async () => {
		mockedAxios.mockResolvedValue({ data: todosMockData });
		await act(async () => {
			render(<Dashboard />);
		});
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	test('Ensures elements are rendered to the DOM', async () => {
		const todoElement = await screen.findByText('delectus aut autem');
		expect(todoElement).toBeInTheDocument();
	});

	test('Ensures element inserted successfully and rendered to the DOM', async () => {
		// Get input field and button
		const input = screen.getByRole('textbox');
		const addButton = screen.getByRole('button', { name: /add/i });

		// Simulate user typing in the input field
		fireEvent.change(input, { target: { value: 'New Todo Item' } });
		expect(input).toHaveValue('New Todo Item');

		// Simulate button click to add a new todo
		fireEvent.click(addButton);

		// Check that the new todo item is rendered
		const newTodo = await screen.findByText('New Todo Item');
		expect(newTodo).toBeInTheDocument();
	});

	test('Ensures after checking the checkbox, the state and UI update correctly', async () => {
		// Locate the first todo's checkbox and label
		const firstCheckbox = screen.getAllByRole('checkbox')[0];
		const firstTodoLabel = await screen.findByText('delectus aut autem');

		// Verify initial state
		expect(firstCheckbox).not.toBeChecked();
		expect(firstTodoLabel).not.toHaveClass('line-through');

		// Simulate checking the checkbox
		fireEvent.click(firstCheckbox);

		// Verify updated state and UI
		expect(firstCheckbox).toBeChecked();
		expect(firstTodoLabel).toHaveClass('line-through');
	});
});
