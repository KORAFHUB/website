import { useState } from "react";
import styles, { layout } from "../style";

const Checkbox = ({ label }) => {
    const [isChecked, setIsChecked] = useState(false);
    return (
      <div className="checkbox-wrapper">
        <label>
          <input type="checkbox" checked={isChecked} />
          <span className={`${styles.paragraph}`}>{label}</span>
        </label>
      </div>
    );
  };

  export default Checkbox;