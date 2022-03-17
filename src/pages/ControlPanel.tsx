
import { useCallback, useState } from "react";
import Counter from "./Counter";
import Summary from "./Summary";

function ControlPanel() {
  const [summary, setSummary] = useState (0)

  const changeSummary = (prevValue: number, value: number) => {
    const changeValue = value - prevValue;
    setSummary(summary + changeValue)
  }

  return <div>
    <Counter changeSummary={changeSummary}/>
    <Counter changeSummary={changeSummary}/>
    <Counter changeSummary={changeSummary}/>
    <hr />
    <Summary summary={summary}/>
  </div>;
}

export default ControlPanel;
