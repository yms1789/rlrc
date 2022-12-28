import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
function Detail() {
  const { state } = useLocation();
  const [detailData, setDetailData] = useState(null);

  const getDetailData = async (state) => {
    try {
      const response = await axios.get(`/detail/${state}`);
      setDetailData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDetailData(state);
  }, [state]);

  return <div>{detailData}</div>;
}

export default Detail;
