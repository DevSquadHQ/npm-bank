import { Button, Flex, Result } from "antd";
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Flex style={{ height: "100svh" }} align="center" justify="center">
      <Result
        status="404"
        title="یافت نشد"
        subTitle="متاسفانه صفحه ای که جستجو کرده اید یافت نشد"
        extra={
          <Link to="/">
            <Button type="primary">بازگشت به خانه</Button>
          </Link>
        }
      />
    </Flex>
  );
}
