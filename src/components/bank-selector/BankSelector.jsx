import React from "react";
import { Form, Select,Image } from "antd";
import { banks } from "../../utils/banksInfoUtils";

export default function BankSelector() {
    
  // reapeat once
  const uniqueBanks = banks.filter(
    (bank, index, self) =>
      index === self.findIndex((b) => b.bank_name === bank.bank_name)
  );

  return (
    <Form.Item label="نام بانک" name="Bank-Name" rules={[{ required: true }]}>
      <Select
        allowClear
        placeholder="بانک خود را انتخاب کنید"
        showSearch
        mode="single"
        options={uniqueBanks.map((bank) => ({
          value: bank.bank_name, // Value is bank_name
          label: (
            <span>
              <Image
                preview={false}
                src={bank.bank_logo}
                alt={bank.bank_name}
                style={{
                  width: 20,
                  height: 20,
                  marginLeft: 8,
                  verticalAlign: "middle",
                }}
              />
              {bank.bank_title}
            </span>
          ),
        }))}
        filterOption={
          (input, option) => option?.label.props.children[1]?.includes(input) // Matches directly without case conversion
        }
      />
    </Form.Item>
  );
}
