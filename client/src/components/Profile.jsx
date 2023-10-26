

export default function Profile(props){
    return(
        <>
            <h1>User Profile</h1>
            <h1>{props.user.email}</h1>
            <h1>{props.user.name}</h1>
        </>
    )
}
