import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Progress = (props) => {
  const bucket_list = useSelector((state) => state.bucket.list);
  console.log(bucket_list);

  let count = 0;
  bucket_list.map((b, idx) => {
    if (b.completed) {
      count++;
    }
  });
  console.log(count);

  return (
    <ProgressBar>
      <Highlight width={(count / bucket_list.length) * 100 + "%"} />
      <DotCircle />
    </ProgressBar>
  );
};

const ProgressBar = styled.div`
  background: #eee;
  width: 100%;
  height: 30px;
  display: flex;
  border-radius: 10px;
`;

const Highlight = styled.div`
  background: #673ab7;
  transition: 1.5s width;
  width: ${(props) => props.width};
  height: 30px;
  border-radius: 10px;
`;

const DotCircle = styled.div`
  width: 30px;
  height: 30px;
  background: #fff;
  border: 5px solid #673ab7;
  border-radius: 20px;
  margin: -5px 0px 0px -15px;
`;

export default Progress;
