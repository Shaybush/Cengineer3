'use client';

import axios from 'axios';
import React, { useState, useEffect } from 'react';

export interface ITodoModel {
	id: number;
	userId: number;
	title: string;
	completed: boolean;
}

export default function Dashboard() {
	const [todos, setTodos] = useState<ITodoModel[]>([]);
	const [newTodo, setNewTodo] = useState('');

	useEffect(() => {
		axios<ITodoModel[]>('https://jsonplaceholder.typicode.com/todos?_limit=5', { method: 'GET' }).then((todosData) =>
			setTodos(todosData.data)
		);
	}, []);

	const addTodo = (e: React.FormEvent) => {
		e.preventDefault();
		if (newTodo.trim()) {
			const newTodoItem = {
				id: Date.now(),
				userId: Date.now(),
				title: newTodo.trim(),
				completed: false,
			};
			setTodos([...todos, newTodoItem]);
			setNewTodo('');
		}
	};

	const toggleTodo = (id: number) => {
		setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
	};

	return (
		<div className='max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl'>
			<h1 className='text-2xl font-bold mb-4'>Simple Todo App</h1>
			<form onSubmit={addTodo} className='mb-4'>
				<input
					type='text'
					className='w-full p-2 border rounded'
					placeholder='Add a new todo'
					value={newTodo}
					onChange={(e) => setNewTodo(e.target.value)}
				/>
				<button type='submit' className='mt-2 w-full p-2 bg-blue-500 text-white rounded'>
					Add Todo
				</button>
			</form>
			<ul>
				{todos.map((todo) => (
					<li key={todo.id} className='flex items-center mb-2'>
						<input type='checkbox' checked={todo.completed} onChange={() => toggleTodo(todo.id)} className='mr-2' />
						<span className={todo.completed ? 'line-through' : ''}>{todo.title}</span>
					</li>
				))}
			</ul>
		</div>
	);
}
