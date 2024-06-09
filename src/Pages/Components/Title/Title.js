import './TitleStyle.css'


function Title (props){
  return (
    <div className="title" style = {{marginTop:props.mtop,marginBottom:props.mbottom}}>{props.title}</div>
  )
};

export default Title;
