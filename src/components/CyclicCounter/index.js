import React, { useState } from "react";

import { CyclicWrapper, CyclicButton } from "./style";

const CyclicCounter = (props) => {
  const [buttonText, setButtonText] = useState(0);

  return (
    <CyclicWrapper>
      <CyclicButton onClick={() => setButtonText((buttonText + 1) % 4)}>
        {buttonText}
      </CyclicButton>
    </CyclicWrapper>
  );
};

export default CyclicCounter;
