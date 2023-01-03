import { useUsers } from '../store.js';

function Users() {
	const fetchUsers = useUsers(state => state?.fetchUsers);
	const isLoading = useUsers(state => state?.loading);
	const users = useUsers(state => state?.usersResponse);

	return (
		<>
			<button
				style={{width: 124}}
				onClick={() => fetchUsers('https://randomuser.me/api/?results=10')}
			>
				{isLoading ? 'Loading...' : 'Fetch users'}
			</button>
			<ul>
				{
					users.results?.map((user) => {
						const { email, login } = user;
						const { uuid: id } = login;

						return (
							<li key={id}>{email}</li>
						);
					})
				}
			</ul>
		</>
	);
}

export default Users;
