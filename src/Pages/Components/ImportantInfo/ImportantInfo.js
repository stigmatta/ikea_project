import './ImportantInfo.css'

export default function ImportantInfo(props){
    return(
        <div className='Important'>
            <div className='image'><img src = {props.src}></img></div>
            <div className='text'>
                <h1>{props.title}</h1>
                <span>{props.description}</span>
            </div>
        </div>
    )
}