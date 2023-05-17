import React, { Fragment, useState, useEffect } from "react";

import { TreeItem, TreeView } from "@mui/lab";
import { ExpandMore, ExpandLess, Menu } from "@mui/icons-material";
import {
  IconButton,
  Container,
  Drawer,
  Typography,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import options from "./options";
import "./style.css";
import logo from "../../image/logo.png";
import admin from "../../image/admin.png";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import {
  adminInfoRemovalService,
  adminRoleRemovalService,
  adminNameRemovalService,
  adminNameGetterService,
  adminIdRemovalService,
  adminRoleGetterService,
} from "../../shared/services";
import { useSelector } from "react-redux";
import authSlice from "../auth/auth.slice";

const Sidebar = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const navigate = useNavigate();

  const [expanded, setExpanded] = useState([]);
  const [active, setActive] = useState("");

  const user_name = adminNameGetterService();
  const user_role = adminRoleGetterService();
  const sidebarAccessToSuperAdmin = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sidebarAccessToSubAdmin = [1, 2, 3, 4, 9, 10];

  const handleNodeSelect = (event, nodeId) => {
    setExpanded([nodeId]);
  };

  const handleLogout = async () => {
    adminInfoRemovalService();
    adminRoleRemovalService();
    adminNameRemovalService();
    adminIdRemovalService();
    navigate("/");
    // }
  };

  const renderFolder = (folder) => {
    return folder.children ? (
      <>
        <TreeItem nodeId={folder.id} label={folder.name} icon={folder.icon}>
          {folder.children.map((item, idx) => (
            <Fragment key={idx}>
              <div
                style={{
                  backgroundColor: active === idx ? "#A52B92" : "",
                  display:
                    item.accessibleToAll === false &&
                    user_role !== "Super" &&
                    "none",
                }}
                onClick={() => {
                  setActive(idx);
                  navigate(item.path);
                }}
              >
                <TreeItem label={item.name} icon={item.icon} />
              </div>
            </Fragment>
          ))}
        </TreeItem>
      </>
    ) : (
      <TreeItem
        nodeId={folder.id}
        label={folder.name}
        icon={folder.icon}
        onClick={() => navigate(folder.path)}
      />
    );
  };

  const menu = (
    <Container className="sidebar mostly-customized-scrollbar">
      <div className="logo">
        <img src={logo} style={{ width: "6rem" }} />
      </div>

      <div className="admin-logo">
        <img src={admin} style={{ width: "2rem" }} />
        <div className="admin-name">Hi {user_name}</div>
      </div>

      <TreeView
        className="sidebar-treeview mostly-customized-scrollbar "
        // expanded={expanded}
        defaultCollapseIcon={<ExpandLess />}
        defaultExpandIcon={<ExpandMore />}
        onNodeSelect={handleNodeSelect}
      >
        {options.map((option, idx) =>
          user_role === "Super" ? (
            <Fragment key={idx}>{renderFolder(option)}</Fragment>
          ) : (
            sidebarAccessToSubAdmin.includes(option.id) && (
              <Fragment key={idx}>{renderFolder(option)}</Fragment>
            )
          )
        )}
      </TreeView>

      <Button
        variant="outlined"
        className="logout-button"
        onClick={handleLogout}
        sx={{
          position: "sticky",
          top: "339rem",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          // borderColor: "#fff",
        }}
        fullWidth
      >
        <ExitToAppIcon sx={{ marginRight: "0.5rem" }} /> Log Out
      </Button>
    </Container>
  );

  return (
    <>
      <IconButton
        className="menu-button"
        onClick={() => setIsMenuOpened((prev) => !prev)}
      >
        <Menu />
      </IconButton>
      <Drawer
        anchor="left"
        open={isMenuOpened}
        onClose={() => setIsMenuOpened(false)}
        className="sidebar-drawer"
      >
        {menu}
      </Drawer>
      <Container className="sidebar-container" disableGutters>
        {menu}
      </Container>
    </>
  );
};

export default Sidebar;
