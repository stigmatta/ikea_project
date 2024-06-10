import './ImportantInfo.css'

export default function ImportantInfo(props){
    return(
        <div className='Important' style = {{height:props.height}}>
            <div className='image'><img src = {props.src} style={{height:props.height}}></img></div>
            <div className='text' style={{ height: `${props.height}px !important` }}>
                <h1>{props.title}</h1>
                <span>{props.description}</span>
            </div>
        </div>
    )
}