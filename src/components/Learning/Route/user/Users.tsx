import { Outlet,useSearchParams } from 'react-router-dom';

export const Users = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const showActiveUser = searchParams.get('filter') === 'active';

    return (
        <div>
            <h2>Users 1</h2>
            <h2>Users 2</h2>
            <h2>Users 3</h2>
            <Outlet />
            <div>
                <button onClick={() => setSearchParams({ filter: 'active' })}>Active User</button>
                <button onClick={() => setSearchParams({})}>Reset Filter</button>
            </div>
            {showActiveUser ? <h2>Active Users</h2> : <h2>All Users</h2>}
        </div>
    )
}