import { Button } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";
import { Link, useParams } from "react-router-dom";

export default function IdTest() {
  const { id } = useParams();

  return (
    <div style={{textAlign:"center"}}>
      <Title level={2}>Info of Account number {id}</Title>
      <Link to={"/accountList"}>
        <Button type="primary">بازگشت به لیست</Button>
      </Link>
    </div>
  );
}
