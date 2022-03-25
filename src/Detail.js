import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteBucket } from "./redux/modules/bucket";

const Detail = (props) => {
  const history = useHistory();

  const params = useParams();
  const bucket_index = params.index_num;
  const bucket_list = useSelector((state) => state.bucket.list);
  const dispatch = useDispatch();

  console.log(bucket_list);
  console.log(bucket_index);
  console.log(bucket_list[bucket_index]);
  return (
    <>
      <div>
        <h1>{bucket_list[bucket_index]}</h1>
        <button
          onClick={() => {
            console.log("삭제하기 버튼 누름");
            dispatch(deleteBucket(bucket_index));
            history.goBack();
          }}
        >
          삭제!
        </button>
      </div>
    </>
  );
};

export default Detail;
