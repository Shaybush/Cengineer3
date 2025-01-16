import '@testing-library/jest-dom';
import axios from 'axios';
import { todosMockData } from './mock/todos-mock.data';
import { render } from '@testing-library/react';
import Dashboard from './Dashboard';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Dashboard component', () => {
	beforeEach(() => {
		mockedAxios.get.mockResolvedValue({ data: todosMockData });
	});

	test('Renders the Dashboard component', () => {
		render(<Dashboard />);
		expect(true).toBe(true);
	});
});
