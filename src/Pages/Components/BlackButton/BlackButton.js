 import './BlackButton.css'


function BlackButton(props) {

  return (
    <button onClick={props.onClick} id = {props.id} style = {{minWidth:props.minWidth,width: props.width,height:props.height,fontSize:props.fSize}} type = {props.type} className="BlackButton">
        {props.title}
    </button>
  );
}

export default BlackButton;