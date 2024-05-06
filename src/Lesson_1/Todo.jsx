export default function Todo({task, isDone}) {
    // if(isDone) {
    //     return <li>Finished Task: {task}</li>
    // }
    // return <li>Work on: {task}</li>

    return (
        <li>{isDone ? 'Finished Task: ':'Work on: '} {task}</li>
    )
}