import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Icon,
  Typography,
} from "@mui/material";

const ReusableDialog = ({
  title,
  subtitle,
  children,
  isOpen,
  handleClose,
  btnLabel,
}) => {

  
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        maxWidth="md"
        titleStyle={{ textAlign: "center" }}
        PaperProps={{
          style: {
            borderRadius: 20,
          },
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "20px",
          }}
        >
          <DialogTitle style={{ color: "#A52B92", fontWeight: "bold" }}>
            {title}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <Typography
                // variant="subtitle"
                sx={{
                  color: "#666F80",
                  fontSize: "15px",
                  fontWeight: "bold",
                  // padding: "10px",
                }}
              >
                {subtitle}
              </Typography>
            </DialogContentText>

            {children}

            <DialogActions>
              <Button
                onClick={handleClose}
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "#341950 !important",
                  borderRadius: "10px",
                }}
              >
                {btnLabel}
              </Button>
            </DialogActions>
          </DialogContent>
        </div>
      </Dialog>
    </>
  );
};

export default ReusableDialog;
