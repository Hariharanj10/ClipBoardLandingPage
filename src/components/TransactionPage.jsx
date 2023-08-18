import { useState, useEffect } from "react";
import { Select, Button, Drawer, Dropdown, Table, Tag, Menu } from "antd";
import { FaTimes } from "react-icons/fa";
import { BiDotsVerticalRounded, BiInfinite, BiX } from "react-icons/bi";
import { PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FiLink } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
const { Option } = Select;
const Container = styled.div`
  display: table;
  gap: 20px;
`;
const StyledLink = styled(Link)`
  display: inline-block;
  padding: 5px 5px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 4px;
`;
const CancelLink = styled(StyledLink)`
  background-color: grey;
`;
const TableFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;
const InputContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 10px;
  padding: 10px;
`;
const ButtonWrapper =styled.div`
    display:flex;
`
const items = [
  {
    label: "Set as primary",
    value: "set as primary",
  },
  {
    label: "remove",
    value: "remove",
  },
];
const TransactionPage = ({ setTrackChanges }) => {
  useEffect(() => {
    const storedValues = localStorage.getItem("selectedValues");
    if (storedValues) {
      setSelectedValues(JSON.parse(storedValues));
    }
  }, []);
  const [selectedValues, setSelectedValues] = useState([]);
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [isPrimary, setIsPrimary] = useState(0);
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const handleAdd = () => {
    if (
      selectedValues.some(
        (item) => item.value1 === value1 && item.value2 === value2
      )
    ) {
      alert("Duplicate entry is not allowed");
      return;
    }
    setTrackChanges(true);
    setSelectedValues([...selectedValues, { value1, value2 }]);
    const newValues = [...selectedValues, { value1, value2 }];
    localStorage.setItem("selectedValues", JSON.stringify(newValues));
  };
  const handleDelete = (index,text,i) => {
    console.log(index ,"index");
    console.log(text ,"text");
    console.log(i);
    const newValues = selectedValues.filter((_, i) => i !== index);
    setSelectedValues(newValues);
    setTrackChanges(true);
  };
  const handleDropdown = (value, index) => {
    setTrackChanges(true);
    if (value === "remove") {
      console.log(index, value);
      const newValues = selectedValues.filter((_, i) => i !== index);
      setSelectedValues(newValues);
    } else if (value === "set as primary") {
      setIsPrimary(index);
    }
  };
  const columns = [
    {
      dataIndex: "value1",
      key: "value1",
    },
    {
      dataIndex: "value2",
      key: "value2",
      render: (text, i, index) =>
        text === "Tier Manager" ? (
          <h4>Tier Manager</h4>
        ) : (
          <>
          User
          {index === isPrimary && <Button type="primary"> primary</Button>}</>
        ),
    },
    {
      dataIndex: "value2",
      key: "actions",
      render: (text, i, index) => (
        <div>
          
          {text !== "User" ? (
            <Button onClick={() => handleDelete(index,text,i)}>
              <BiX />
            </Button>
          ) : (
            <Dropdown.Button
            overlay={
              <Menu>
                {items?.map((item) => (
                  <Menu.Item key={item.value}>
                    <Button onClick={() => handleDropdown(item.value, index)}>
                      {item.label}
                    </Button>
                  </Menu.Item>
                ))}
              </Menu>
            }
          >
          </Dropdown.Button>
          )}
        </div>
      ),
    },
  ];
  const dataSource = selectedValues?.map((item, index) => ({
    key: index,
    value1: (
      <>
        <GrLocation />
        {item.value1}
      </>
    ),
    value2: item.value2,
  }));

  return (
    <Container>
      <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
        New account
      </Button>
      <Drawer
        title="Tier and Role Assignment"
        width={720}
        onClose={onClose}
        visible={open}
        bodyStyle={{
          paddingBottom: 80,
        }}
        footer={
          <TableFooter>
            <CancelLink to="/">
              <FaTimes />
              cancel
            </CancelLink>
            <StyledLink to="/ReviewChanges">Update</StyledLink>
          </TableFooter>
        }
      >
        <InputContainer>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Select Tiers"
            onChange={(value) => {
              setValue1(value);
            }}
          >
            {["Pune", "Chennai", "Bengaluru", "Delhi", "Kolkata", "Mumbai"].map(
              (tier) => (
                <Option key={tier} value={tier}>
                  {tier}
                </Option>
              )
            )}
          </Select>
          <FiLink size={30} />
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Select Roles"
            onChange={(value) => {
              setValue2(value);
            }}
          >
            {["Tier Manager", "User"]?.map((role) => (
              <Option key={role} value={role}>
                {role}
              </Option>
            ))}
          </Select>
          <Button
            type="primary"
            shape="circle"
            icon={<PlusOutlined />}
            onClick={handleAdd}
          />
        </InputContainer>

        <Table dataSource={dataSource} columns={columns} pagination={false} />
      </Drawer>
    </Container>
  );
};
export default TransactionPage;
