import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export const useCounter = create(
	persist(
		devtools((set) => ({
		count: 0,
		disabled: true,

		decrement: () => {
			set(state => ({ count: state.count - 1 }));
			set(state => ({ disabled: state.count === 0 }));
		},

		increment: () => {
			set(state => ({ count: state.count + 1 }));
			set(state => ({ disabled: state.count === 0 }));
		},

		reset: () => {
			set({ count: 0, disabled: true });
		},
	}))),
);

export const useUsers = create(
	devtools((set) => ({
		usersResponse: {},
		loading: false,

		fetchUsers: async (url) => {
			try {
				set({ loading: true });
				const response = await fetch(url);
				set({ usersResponse: await response.json() });
			} catch (error) {
				console.log(error);
			} finally {
				set({ loading: false });
			}
		},
	})),
);

export const count = (state) => state.count;
export const increment = (state) => state.increment;
export const decrement = (state) => state.decrement;
export const reset = (state) => state.reset;
export const disabled = (state) => state.disabled;
