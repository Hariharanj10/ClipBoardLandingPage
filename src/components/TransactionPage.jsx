import { useState, useEffect } from "react";
import { Select, Button, Drawer, Dropdown, Table, Tag, Menu } from "antd";
import { FaTimes } from "react-icons/fa";
import { BiX } from "react-icons/bi";
import { PlusOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FiLink } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import DropdownComponent from "./DropDown";
const { Option } = Select;
const Container = styled.div`
  gap: 20px;
  font-size: 14px;
  color: #485c72;
`;
const CustomTable = styled(Table)`
  margin-left: 30px;
`;
const CustomPrimaryButton = styled(Button)`
margin-left: 10px;
padding: 1px 6px;
border-radius: 3px;
border: 1px solid rgb(141, 177, 212);
color: rgb(27, 99, 169);
font-size: 11px;
font-weight: 400;
background: rgb(237, 243, 248);
}
`;
const StyledRow1 = styled.div`
color: #242e39;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  margin-left: 100px;
}
`;
const StyledRow2 = styled.div`
font-weight: 500;
font-size: 15px;
line-height: 22px;
margin-left: 20px;
}
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
  background-color: #e4e7ea;
  color: #242e39;
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
const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 15px;
`;
const Label = styled.label`
  margin-bottom: 5px;
  color: #637487;
`;

const UpdateButtonStyles = {
  color: "#fff",
  borderColor: "#1B63A9",
  background: "#1B63A9",
  textShadow: "0 -1px 0 rgba(0, 0, 0, 0.12)",
  boxShadow: "0 2px 0 rgba(0, 0, 0, 0.045)",
};
const CancelButtonStyles = {
  color: "#242E39",
  borderColor: "#d9d9d9",
  background: "#E4E7EA",
};
const StyledHeadingH4 = styled.h4`
  color: #242e39;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  margin-left: 20px;
`;
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
const TransactionPage = ({ setTrackChanges, setOpenReview, setIsLogin }) => {
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
  const navigate = useNavigate();
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const handleAdd = () => {
    if (!value1 || !value2) {
      alert("Please select both Tier and Role before adding.");
      return;
    }
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
  const handleDelete = (index, text, i) => {
    const newValues = selectedValues?.filter((_, i) => i !== index);
    setSelectedValues(newValues);
    setTrackChanges(true);
  };
  const handleDropdown = (value, index) => {
    console.log(value, index);
    setTrackChanges(true);
    if (value === "remove") {
      const newValues = selectedValues?.filter((_, i) => i !== index);
      setSelectedValues(newValues);
    } else if (value === "set as primary") {
      setIsPrimary(index);
    }
  };
  const handleLogout = () => {
    setIsLogin(false);
  };
  const handleUpdate = () => {
    setOpenReview(true);
    localStorage.setItem("selectedValues", JSON.stringify(selectedValues));
    navigate("/ReviewChanges");
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
          <StyledRow1>Tier Manager</StyledRow1>
        ) : (
          <StyledRow1>
            User
            {index === isPrimary && (
              <CustomPrimaryButton type="default"> primary</CustomPrimaryButton>
            )}
          </StyledRow1>
        ),
    },
    {
      dataIndex: "value2",
      key: "actions",
      render: (text, i, index) => (
        <div>
          {text !== "User" ? (
            <BiX size={30} onClick={() => handleDelete(index, text, i)} />
          ) : (
            <DropdownComponent
              handleDropdown={handleDropdown}
              index={index}
              items={items}
            />
          )}
        </div>
      ),
    },
  ];
  const dataSource = selectedValues?.map((item, index) => ({
    key: index,
    value1: (
      <>
        <GrLocation size={15} />
        {item.value1}
      </>
    ),
    value2: item.value2,
  }));

  return (
    <Container>
      <Button type="primary" id="openButton" onClick={showDrawer} icon={<PlusOutlined />}>
        open
      </Button>

      <div>
        <Button type="primary" onClick={handleLogout} id="logoutButton">
          Logout
        </Button>
      </div>

      <Drawer
        title="Tier and Role Assignment"
        width={600}
        onClose={onClose}
        visible={open}
        bodyStyle={{
          paddingBottom: 80,
        }}
        headerStyle={{ backgroundColor: "#f0f2f4" }}
        footer={
          <TableFooter>
            <Button
              type="default"
              style={CancelButtonStyles}
              href="/"
              icon={<FaTimes />}
            >
              Cancel
            </Button>
            <Button
              type="primary"
              style={UpdateButtonStyles}
              onClick={handleUpdate}
              id="updateButton"
            >
              Update
            </Button>
          </TableFooter>
        }
      >
        <InputContainer>
          <FormGroup>
            <Label htmlFor="select-1">Tiers</Label>
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Select Tiers"
              onChange={(value) => {
                setValue1(value);
              }}
              id="select-1"
            >
              {[
                "Pune",
                "Chennai",
                "Bengaluru",
                "Delhi",
                "Kolkata",
                "Mumbai",
              ].map((tier) => (
                <Option key={tier} value={tier}>
                  {tier}
                </Option>
              ))}
            </Select>
          </FormGroup>
          <FiLink size={15} />

          <FormGroup>
            <Label htmlFor="select-2">Roles</Label>
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Select Roles"
              onChange={(value) => {
                setValue2(value);
              }}
              id="select-2"
            >
              {["Tier Manager", "User"]?.map((role) => (
                <Option key={role} value={role}>
                  {role}
                </Option>
              ))}
            </Select>
          </FormGroup>

          <Button
            type="primary"
            style={{
              backgroundColor: "#f1f1f1",
              color: "#242E39",
              borderColor: "#d9d9d9",
              background: "#E4E7EA",
              border: "1px solid transparent",
            }}
            shape="circle"
            icon={<PlusOutlined />}
            onClick={handleAdd}
          />
        </InputContainer>

        <CustomTable
          dataSource={dataSource}
          columns={columns}
          pagination={false}
        />
      </Drawer>
    </Container>
  );
};
export default TransactionPage;
