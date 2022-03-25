import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Detail = (props) => {
  const history = useHistory();

  const params = useParams();
  const bucket_index = params.index_num;
  const bucket_list = useSelector((state) => state.bucket.list);

  console.log(bucket_list);
  console.log(bucket_index);
  console.log(bucket_list[bucket_index]);
  return (
    <>
      <div align="center">{bucket_list[bucket_index]}</div>

      <button
        onClick={() => {
          history.goBack();
        }}
      >
        뒤로가기
      </button>
    </>
  );
};

export default Detail;
