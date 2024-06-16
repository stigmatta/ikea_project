import './TransparentButton.css'


function TransparentButton(props) {

  return (
    <button id = {props.id} type = {props.type} className="TransparentButton" style = {{width:props.width,height:props.height,fontSize:props.fontSize,marginTop:props.marginTop}}>
        {props.title}
        <img src = {props.img}></img>
    </button>
  );
}

export default TransparentButton;