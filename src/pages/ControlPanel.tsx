import Counter from "./Counter";
import Summary from "./Summary";

function ControlPanel() {

  return <div>
    <Counter name={'First'}/>
    <Counter name={'Second'}/>
    <Counter name={'Third'}/>
    <hr />
    <Summary/>
  </div>;
}

export default ControlPanel;
