export default function Singer({singer}) {
    return (
        <div id={singer.id}>
            <h3>{singer.name}</h3>
            <p>{singer.age}</p>
        </div>
    )
}