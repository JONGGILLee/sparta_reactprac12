import React from "react";
import styled from "styled-components";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";

const Spinner = (props) => {
  return (
    <Outter>
      <EnergySavingsLeafIcon style={{ color: "orange", fontSize: "200px" }} />
    </Outter>
  );
};

const Outter = styled.div`
  background: #ab87ec;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Spinner;
