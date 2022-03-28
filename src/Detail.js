import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteBucket,
  deleteBucketFB,
  updateBucket,
  updateBucketFB,
} from "./redux/modules/bucket";

const Detail = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();
  const bucket_index = params.index;
  const bucket_list = useSelector((state) => state.bucket.list);

  return (
    <div>
      <h1>{bucket_list[bucket_index].text}</h1>
      <button
        onClick={() => {
          // dispatch(updateBucket(bucket_index));
          dispatch(updateBucketFB(bucket_list[bucket_index].id));
        }}
      >
        완료하기
      </button>
      <button
        onClick={() => {
          dispatch(deleteBucketFB(bucket_list[bucket_index].id));
          history.push("/");
          // 에러 메시지 history.goBack();
        }}
      >
        삭제하기
      </button>
    </div>
  );
};

export default Detail;
