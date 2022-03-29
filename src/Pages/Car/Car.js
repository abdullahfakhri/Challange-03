import React from "react";
import { Button, ButtonGroup, ButtonToolbar } from "react-bootstrap";
import { NavbarDefault } from "../../Assets/Components/Navbar/NavbarDefault";
// import { Pagination, Table } from 'react-bootstrap'
import "../Car/Car.css";

export const Car = () => {
  return (
    <div className="container-item">
      <NavbarDefault/>
      <div className="dashboard-field">
        <div className="dashboard-row">
          <div>
            <h1 className="dashboard-row-left">DASHBOARD</h1>
          </div>
          <div className="background-row-left">
            <h1 className="dashboard-row-left2">List Car</h1>
          </div>
        </div>
        <div className="dashboard-row2">
          <div className="dashboard-name">
            <h5 className="name-rows">Cars</h5>
            <h5 className="name-rows-2">&#62;</h5>
            <h5 className="name-rows-3">List Car</h5>
          </div>
          <div className="dashboard-name2">
            <h1 className="name-rows-4">List Car</h1>
          </div>
          <div className="button-toolbar">
            <ButtonToolbar aria-label="Toolbar with button groups">
              <ButtonGroup className="button-all" aria-label="Third group">
                <Button className="button-all-item">All</Button>
              </ButtonGroup>
              <ButtonGroup className="button-small" aria-label="Third group">
                <Button className="button-small-item">Small</Button>
              </ButtonGroup>
              <ButtonGroup className="button-medium" aria-label="Third group">
                <Button className="button-medium-item">Medium</Button>
              </ButtonGroup>
              <ButtonGroup className="button-large" aria-label="Third group">
                <Button className="button-large-item">Large</Button>
              </ButtonGroup>
            </ButtonToolbar>
          </div>
        </div>
      </div>
    </div>
  );
};
