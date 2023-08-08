import { useState } from "react";
import { Reset } from "./Reset";
import { Output } from "./Output";
import { SelectPercentage } from "./SelectPercentage";
import { BillInput } from "./BillInput";

export function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  let tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <BillInput bill={bill} setBill={setBill} />
      <SelectPercentage percen={percentage1} setPercen={setPercentage1}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage percen={percentage2} setPercen={setPercentage2}>
        How did your friend like the service?
      </SelectPercentage>

      {bill && (
        <>
          <Output bill={bill} tip={tip} /> <Reset handleReset={handleReset} />{" "}
        </>
      )}
    </div>
  );
}
