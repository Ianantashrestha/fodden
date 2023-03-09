import { useState } from "react";
import { Column } from "../../../system";
import CSVReader from "react-csv-reader";
import ReactFlow, { Controls, Background } from "reactflow";
import "reactflow/dist/style.css";
const CSV = () => {
  const [nodes, setNodes] = useState([]);
  const handleCSVUpload = (data: any) => {
    const columnDatas: any = data[0];
    let finalData: any = [];
    let position = 0;
    columnDatas?.map((item: any, index: number) => {
      let obj: any = {
        id: (index + 1).toString(),
        data: { label: item },
        position: { x: position, y: position },
      };
      if (index === 0) {
        obj = { ...obj, type: "input" };
      }
      finalData.push(obj);
      position = position + 50;
    });
    setNodes(finalData);
  };
  return (
    <Column sx={{ height: "100%" }}>
      <CSVReader onFileLoaded={handleCSVUpload} />
      {!!nodes?.length && (
        <ReactFlow nodes={nodes}>
          <Background />
          <Controls />
        </ReactFlow>
      )}
    </Column>
  );
};

export default CSV;
