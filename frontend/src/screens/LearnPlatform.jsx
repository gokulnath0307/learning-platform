import React, { useEffect, useState } from "react";
import learningplatformdata from "../data/learningplatformdata.json";
import { useSearchParams } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Content } from "../components/Content";
export default function LearnPlatform() {
  const [searchparams] = useSearchParams();
  const [data, setData] = useState({});
  const [topicIndex, setTopicIndex] = useState(0);
  useEffect(() => {
    const userlearn = searchparams.get("learn");
    let filterData = learningplatformdata.find((v) => v.key === userlearn);
    setData(filterData);
  }, [searchparams]);
  
  return (
    <div>
      <Navbar data={data} setTopicIndex={setTopicIndex}/>
      <Content data={data} setTopicIndex={setTopicIndex} topicIndex={topicIndex}/>
    </div>
  );
}
