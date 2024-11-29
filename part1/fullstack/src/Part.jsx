export default function Part({course, part, exercise}){
    return(
        <div>
            <h1>{course}</h1>
            <p>{part}</p>
            <p>{exercise}</p>
        </div>
    )
}
