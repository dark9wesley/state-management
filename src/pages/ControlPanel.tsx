
import { useCallback, useState } from "react";
import Counter from "./Counter";
import Summary from "./Summary";

function ControlPanel() {
  const [summary, setSummary] = useState (0)

  return <div>
    <Counter counterCaption={'First'} />
    <Counter counterCaption={'Second'}/>
    <Counter counterCaption={'Third'}/>
    <hr />
    <Summary summary={summary}/>
  </div>;
}

export default ControlPanel;
