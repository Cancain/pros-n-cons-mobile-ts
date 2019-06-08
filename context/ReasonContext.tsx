import React, { useState, ReactNode } from "react";
import Reason from "../Interfaces/Reason";

interface Props {
  children?: ReactNode;
}

const ReasonContext = React.createContext(null);

const ReasonProvider = (props: Props) => {
  const [reasons, setReasons] = useState<Array<Reason>>();

  const addReason = (reason: Reason) => {
    let newReasons: Array<Reason> = [];
    if (reasons) newReasons = reasons;
    newReasons.push(reason);
    setReasons(newReasons);
  };

  return (
    <ReasonContext.Provider
      value={{
        reasons: reasons,
        addReason: (reson: Reason) => addReason(reson)
      }}
    >
      {props.children}
    </ReasonContext.Provider>
  );
};

export default ReasonProvider;
