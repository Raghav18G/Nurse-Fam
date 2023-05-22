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
import logo from "../../image/Sidebar/SidebarLogo.png";

import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const Sidebar = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const navigate = useNavigate();

  const [expanded, setExpanded] = useState([]);
  const [active, setActive] = useState(0);

  const handleNodeSelect = (event, nodeId) => {
    setExpanded([nodeId]);
  };

  const handleLogout = async () => {
    navigate("/");
  };

  const renderFolder = (folder) => {
    return folder.children ? (
      <>
        <TreeItem nodeId={folder.id} label={folder.name} icon={folder.icon}>
          {folder.children.map((item, idx) => (
            <Fragment key={idx}>
              <div
                style={{
                  backgroundColor: active === idx ? "#111" : "#fff",
                  display: item.accessibleToAll === false,
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
        <img src={logo} style={{ width: "10rem" }} />
      </div>

      <TreeView
        className="sidebar-treeview mostly-customized-scrollbar "
        // expanded={expanded}
        defaultCollapseIcon={<ExpandLess />}
        defaultExpandIcon={<ExpandMore />}
        onNodeSelect={handleNodeSelect}
        sx={{ paddingLeft: "4px", paddingRight: "6px" }}
      >
        {options.map((option, idx) => (
          <Fragment key={idx}>
            {" "}
            <div
              style={{
                backgroundColor: active === idx ? "#341950" : "",
                marginTop: "1rem",
                alignItems: "center",
                borderRadius: "30px",
              }}
              onClick={() => {
                setActive(idx);
              }}
            >
              {renderFolder(option)}
            </div>
          </Fragment>
        ))}
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
