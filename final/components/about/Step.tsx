import { FC } from "react";

const Step: FC = () => {
  return (
    <ul className="steps">
      <li className="step step-primary">Register</li>
      <li className="step step-primary">Choose plan</li>
      <li className="step">Purchase</li>
      <li className="step">Receive Product</li>
    </ul>
  );
};

export default Step;
