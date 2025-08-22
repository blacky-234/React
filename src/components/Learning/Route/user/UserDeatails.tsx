import { useParams } from "react-router-dom"

export const UserDetails = () => {
    const { userId } = useParams<{ userId: string }>();

    return (
        <div>
            <h2>User Details for User ID: {userId}</h2>
        </div>
    )
}