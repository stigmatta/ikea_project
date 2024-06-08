 import './BlackButton.css'


function BlackButton(props) {

  return (
    <button id = {props.id} style = {{width: props.width,height:props.height}} type = {props.type} className="BlackButton">
        {props.title}
    </button>
  );
}

export default BlackButton;