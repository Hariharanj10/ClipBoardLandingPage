import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Button, Drawer, Space } from "antd";
function ReviewChanges({
  trackChanges,
  setTrackChanges,
  setOpenReview,
  OpenReview,
}) {
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
        title="Review Changes"
        width={500}
        onClose={onClose}
        open={OpenReview}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
          </Space>
        }
        footer={
          <>
            {" "}
            <Button href="/TransactionPage">Back</Button>
            <Button
              type="primary"
              onClick={handleConfirm}
              disabled={!trackChanges}
              id="confirmButton"
            >
              confirm
            </Button>
          </>
        }
      >
        {!trackChanges ? (
          <h3>No changes applied</h3>
        ) : (
          <h3>changes will apply for Tiers and Roles Management</h3>
        )}
      </Drawer>
    </div>
  );
}
export default ReviewChanges;
