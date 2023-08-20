import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Button, Drawer, Space } from "antd";
const StyledLink = styled(Link)`
  display: inline-block;
  padding: 5px 5px;
  background-color: grey;
  color: white;
  text-decoration: none;
  border-radius: 4px;
`;
function ReviewChanges({ trackChanges, setTrackChanges, setOpenReview, OpenReview }) {
  
  const navigate = useNavigate();
  
  const onClose = () => {
    setOpenReview(false);
  };
  const handleConfirm = () => {
    setTrackChanges(false);
    navigate("/");
  };
  return (
    <div>
      <Drawer
        title="Drawer with extra actions"
        width={500}
        onClose={onClose}
        open={OpenReview}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
          </Space>
        }
        footer={<Button onClick={onClose}>Cancel</Button>}
      >
        <h3>Review Changes</h3>
        {!trackChanges ? (
          <h3>No changes applied</h3>
        ) : (
          <h3>changes will apply for Tiers and Roles Management</h3>
        )}
        <StyledLink to="/TransactionPage">Back</StyledLink>
        <Button type="primary" onClick={handleConfirm}>
          confirm
        </Button>
      </Drawer>
    </div>
  );
}
export default ReviewChanges;
