import { useState, createContext } from "react";

const ApprovalContext = createContext();

export function ApprovalProvider({ children }) {
  const [approvalStatus, setApprovalStatus] = useState();

  return (
    <ApprovalContext.Provider value={{ approvalStatus, setApprovalStatus }}>
      {children}
    </ApprovalContext.Provider>
  );
}

export default ApprovalContext;
