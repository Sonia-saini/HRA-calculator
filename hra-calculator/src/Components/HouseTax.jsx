import React, { useState } from "react";
import "../App.css";
function HouseTax() {
  const [hraReceived, setHraReceived] = useState("");
  const [rentPaid, setRentPaid] = useState("");
  const [basicSalary, setBasicSalary] = useState("");
  const [commission, setCommission] = useState("");
  const [taxableHRA, setTaxableHRA] = useState("");
  const [da, setDa] = useState("");
  const [visitedinput, setVisitedinput] = useState([]);
  const [exemptedHRA, setExemptedHRA] = useState("");
  const [metroCity, setMetroCity] = useState(false);

  const Calculate = () => {
    const totalSalary = basicSalary + commission + da;
    const case1 = metroCity ? totalSalary * 0.5 : totalSalary * 0.4;
    const case2 =
      rentPaid - totalSalary * 0.1 > 0 ? rentPaid - totalSalary * 0.1 : 0;
    const case3 = hraReceived;
    let x =
      hraReceived >= rentPaid ? Math.min(case1, case2, case3) : hraReceived;
    hraReceived >= rentPaid
      ? setTaxableHRA(hraReceived - Math.min(case1, case2, case3))
      : setTaxableHRA("0");

    setExemptedHRA(x);
  };

  const Reset = () => {
    setBasicSalary("");
    setHraReceived("");
    setRentPaid("");
    setCommission("");
    setDa("");
    setTaxableHRA("");
    setExemptedHRA("");
    setMetroCity("");
    setVisitedinput([]);
  };

  const handleInputvisit = (value) => {
    if (!visitedinput.includes(value)) {
      setVisitedinput((pre) => [...pre, value]);
    }
  };
  console.log(
    basicSalary,
    basicSalary !== undefined && basicSalary !== "NaN",
    isNaN(basicSalary)
  );
  return (
    <div className="main">
      <h4 className="calculator-heading">HOUSE RENT ALLOWANCE</h4>
      <form>
        <div className="grey-row content">
          <label>Basic Salary</label>
          <input
            type="text"
            maxLength={17}
            value={
              !isNaN(basicSalary)
                ? Number(basicSalary) > 0 &&
                  visitedinput[visitedinput.length - 1] !== "basicSalary"
                  ? Number(basicSalary).toFixed(2)
                  : basicSalary
                : ""
            }
            onChange={(e) => setBasicSalary(parseInt(e.target.value))}
            onClick={() => handleInputvisit("basicSalary")}
            className={`${
              visitedinput.includes("basicSalary") && !basicSalary
                ? "visited"
                : ""
            }`}
          />
        </div>
        <div className="content">
          <label>DA forming part of salary</label>
          <input
            type="text"
            maxLength={17}
            value={
              !isNaN(da)
                ? Number(da) > 0 &&
                  visitedinput[visitedinput.length - 1] !== "da"
                  ? Number(da).toFixed(2)
                  : da
                : ""
            }
            onChange={(e) => setDa(parseInt(e.target.value))}
            onClick={() => handleInputvisit("da")}
            className={`${visitedinput.includes("da") && !da ? "visited" : ""}`}
          />
        </div>
        <div className="grey-row content">
          <label>Commission (as % of turnover achieved by the employee)</label>
          <input
            type="text"
            maxLength={17}
            value={
              !isNaN(commission)
                ? Number(commission) > 0 &&
                  visitedinput[visitedinput.length - 1] !== "commission"
                  ? Number(commission).toFixed(2)
                  : commission
                : ""
            }
            onChange={(e) => setCommission(parseInt(e.target.value))}
            onClick={() => handleInputvisit("commission")}
            className={`${
              visitedinput.includes("commission") && !commission
                ? "visited"
                : ""
            }`}
          />
        </div>

        <div className="content">
          <label>HRA Received</label>
          <input
            type="text"
            maxLength={17}
            value={
              !isNaN(hraReceived)
                ? Number(hraReceived) > 0 &&
                  visitedinput[visitedinput.length - 1] !== "hraReceived"
                  ? Number(hraReceived).toFixed(2)
                  : hraReceived
                : ""
            }
            onChange={(e) => setHraReceived(parseInt(e.target.value))}
            onClick={() => handleInputvisit("hraReceived")}
            className={`${
              visitedinput.includes("hraReceived") && !hraReceived
                ? "visited"
                : ""
            }`}
          />
        </div>

        <div className="grey-row content">
          <label>Rent Paid</label>
          <input
            type="text"
            maxLength={17}
            value={
              !isNaN(rentPaid)
                ? Number(rentPaid) > 0 &&
                  visitedinput[visitedinput.length - 1] !== "rent"
                  ? Number(rentPaid).toFixed(2)
                  : rentPaid
                : ""
            }
            onChange={(e) => setRentPaid(parseInt(e.target.value))}
            onClick={() => handleInputvisit("rent")}
            className={`${
              visitedinput.includes("rent") && !rentPaid ? "visited" : ""
            }`}
          />
        </div>
        <div className="content">
          <label>Tick if residing in metro city</label>
          <div>
            <input
              type="checkbox"
              checked={metroCity}
              onChange={(e) => setMetroCity(e.target.checked)}
            />
            <span className="checkbox-text">(Tick if Yes)</span>
          </div>
        </div>
        <div className="grey-row content">
          <label>Exempted House Rent Allowance</label>
          <input
            type="text"
            value={
              Number(exemptedHRA) > 0
                ? Number(exemptedHRA).toFixed(2)
                : exemptedHRA
            }
            disabled
            className="disabled"
          />
        </div>
        <div className="content">
          <label>Taxable House Rent Allowance</label>
          <input
            type="text"
            value={
              Number(taxableHRA) > 0
                ? Number(taxableHRA).toFixed(2)
                : taxableHRA
            }
            disabled
            className="disabled"
          />
        </div>
      </form>

      <div className="flex-center">
        <button className="calculate btn" onClick={Calculate}>
          Calculate
        </button>
        <button className="reset btn" onClick={Reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default HouseTax;
