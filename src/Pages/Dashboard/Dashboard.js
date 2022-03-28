import React from "react";
import { Pagination, Table } from "react-bootstrap";
import { NavbarDefault } from "../../Assets/Components/Navbar/NavbarDefault";
import "../Dashboard/Dashboard.css";

export const Dashboard = () => {
  return (
    <div className="container-item">
      <NavbarDefault />
      <div className="dashboard-field">
        <div className="dashboard-row">
          <div>
            <h1 className="dashboard-row-left">DASHBOARD</h1>
          </div>
          <div className="background-row-left">
            <h1 className="dashboard-row-left2">Dashboard</h1>
          </div>
        </div>
        <div className="dashboard-row2">
          <div className="dashboard-name">
            <h5 className="name-rows">Dashboard</h5>
            <h5 className="name-rows-2">&#62;</h5>
            <h5 className="name-rows-3">Dashboard</h5>
          </div>
          <div className="dashboard-name2">
            <h1 className="name-rows-4">Dashboard</h1>
          </div>
          <div className="dashboard-name3">
            <div className="box-3"></div>
            <h5 className="name-rows-5">List Order</h5>
          </div>
          <div className="table">
            <Table responsive="lg">
              <thead>
                <tr>
                  <th>No</th>
                  <th>User Email</th>
                  <th>Car</th>
                  <th>Start Rent</th>
                  <th>Finish Rent</th>
                  <th>Price</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>User Email</td>
                  <td>Car</td>
                  <td>Start Rent</td>
                  <td>Finish Rent</td>
                  <td>Price</td>
                  <td>Status</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>User Email</td>
                  <td>Car</td>
                  <td>Start Rent</td>
                  <td>Finish Rent</td>
                  <td>Price</td>
                  <td>Status</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>User Email</td>
                  <td>Car</td>
                  <td>Start Rent</td>
                  <td>Finish Rent</td>
                  <td>Price</td>
                  <td>Status</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>User Email</td>
                  <td>Car</td>
                  <td>Start Rent</td>
                  <td>Finish Rent</td>
                  <td>Price</td>
                  <td>Status</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>User Email</td>
                  <td>Car</td>
                  <td>Start Rent</td>
                  <td>Finish Rent</td>
                  <td>Price</td>
                  <td>Status</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>User Email</td>
                  <td>Car</td>
                  <td>Start Rent</td>
                  <td>Finish Rent</td>
                  <td>Price</td>
                  <td>Status</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>User Email</td>
                  <td>Car</td>
                  <td>Start Rent</td>
                  <td>Finish Rent</td>
                  <td>Price</td>
                  <td>Status</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>User Email</td>
                  <td>Car</td>
                  <td>Start Rent</td>
                  <td>Finish Rent</td>
                  <td>Price</td>
                  <td>Status</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>User Email</td>
                  <td>Car</td>
                  <td>Start Rent</td>
                  <td>Finish Rent</td>
                  <td>Price</td>
                  <td>Status</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>User Email</td>
                  <td>Car</td>
                  <td>Start Rent</td>
                  <td>Finish Rent</td>
                  <td>Price</td>
                  <td>Status</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="footer-table">
            <div className="footer-table-item">
              <h5 className="footer-limit">Limit</h5>
              <h5 className="footer-jump">Jump to page</h5>
            </div>
          </div>
          <div className="pagination">
            <Pagination>
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Ellipsis />

              <Pagination.Item>{10}</Pagination.Item>
              <Pagination.Item>{11}</Pagination.Item>
              <Pagination.Item active>{12}</Pagination.Item>
              <Pagination.Item>{13}</Pagination.Item>
              <Pagination.Item disabled>{14}</Pagination.Item>

              <Pagination.Ellipsis />
              <Pagination.Item>{20}</Pagination.Item>
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>
          </div>
            <div className="dashboard-name3">
              <div className="box-3"></div>
              <h5 className="name-rows-5">List Car</h5>
            </div>
            <div className="table">
            <Table responsive="lg">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Start Rent</th>
                  <th>Finish rent</th>
                  <th>Created at</th>
                  <th>Update at</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Name</td>
                  <td>Category</td>
                  <td>Price</td>
                  <td>-</td>
                  <td>-</td>
                  <td>Created at</td>
                  <td>Update at</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Name</td>
                  <td>Category</td>
                  <td>Price</td>
                  <td>Start Rent</td>
                  <td>Finish Rent</td>
                  <td>Created at</td>
                  <td>Update at</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Name</td>
                  <td>Category</td>
                  <td>Price</td>
                  <td>Start Rent</td>
                  <td>Finish Rent</td>
                  <td>Created at</td>
                  <td>Update at</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Name</td>
                  <td>Category</td>
                  <td>Price</td>
                  <td>Start Rent</td>
                  <td>Finish Rent</td>
                  <td>Created at</td>
                  <td>Update at</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Name</td>
                  <td>Category</td>
                  <td>Price</td>
                  <td>-</td>
                  <td>-</td>
                  <td>Created at</td>
                  <td>Update at</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Name</td>
                  <td>Category</td>
                  <td>Price</td>
                  <td>Start Rent</td>
                  <td>Finish Rent</td>
                  <td>Created at</td>
                  <td>Update at</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Name</td>
                  <td>Category</td>
                  <td>Price</td>
                  <td>Start Rent</td>
                  <td>Finish Rent</td>
                  <td>Created at</td>
                  <td>Update at</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Name</td>
                  <td>Category</td>
                  <td>Price</td>
                  <td>Start Rent</td>
                  <td>Finish Rent</td>
                  <td>Created at</td>
                  <td>Update at</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Name</td>
                  <td>Category</td>
                  <td>Price</td>
                  <td>Start Rent</td>
                  <td>Finish Rent</td>
                  <td>Created at</td>
                  <td>Update at</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Name</td>
                  <td>Category</td>
                  <td>Price</td>
                  <td>Start Rent</td>
                  <td>Finish Rent</td>
                  <td>Created at</td>
                  <td>Update at</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="footer-table">
            <div className="footer-table-item">
              <h5 className="footer-limit">Limit</h5>
              <h5 className="footer-jump">Jump to page</h5>
            </div>
          </div>
          <div className="pagination">
            <Pagination>
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Ellipsis />

              <Pagination.Item>{10}</Pagination.Item>
              <Pagination.Item>{11}</Pagination.Item>
              <Pagination.Item active>{12}</Pagination.Item>
              <Pagination.Item>{13}</Pagination.Item>
              <Pagination.Item disabled>{14}</Pagination.Item>

              <Pagination.Ellipsis />
              <Pagination.Item>{20}</Pagination.Item>
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
};
