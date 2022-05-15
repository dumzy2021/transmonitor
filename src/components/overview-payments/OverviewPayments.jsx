import React, { useState } from "react";
import "./overviewPayments.scss";
import { images } from "../../constants/images";
import Payments from "../../constants/payments";
const OverviewPayments = () => {
  const [payments, setPayments] = useState(Payments);
  const [query, setQuery] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const sortOptions = ["All", "Reconcilled", "Un-reconcilled", "Pending"];
  const onFormSearch = (e) => {
    e.preventDefault();
    if (query === "") {
      setPayments(Payments);
      return;
    }
    let filteredPayment = payments.filter((p) =>
      p.title.toLowerCase().includes(query.toLowerCase())
    );
    setPayments(filteredPayment);
  };
  const filterTable = (e) => {
    let value = e.target.value;
    setFilterValue(value);
    if (value === "All") {
      setPayments(Payments);
      return;
    }

    let filteredPayment = Payments.filter((p) => p.status === value);
    setPayments(filteredPayment);
  };
  return (
    <div className="row">
      <div className="col-12 mb-4">
        <h5 className="overview-payment-title">payments</h5>
      </div>
      {/* Payment Filters */}
      <div className="col-12 col-md-5 mb-3 col-xl-4">
        <form>
          <p className="d-flex align-items-center">
            <span className="select-text"> Showing </span>
            <select className="form-control form-select page-size shadow-none">
              <option></option>
            </select>

            <span className="select-text">
              out of {payments.length}{" "}
              {payments.length > 1 ? "payments" : "payment"}
            </span>
          </p>
        </form>
      </div>
      <div className="col-12 col-md-3 mb-3">
        <form
          className="d-flex align-items-center payment-search-form mb-4 mb-md-0"
          onKeyUp={onFormSearch}
        >
          <span className="search-icon">
            <img src={images.searchIcon} alt="Search Icon" className="" />
          </span>
          <input
            className="form-control payment-search shadow-none"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search payments"
            aria-label="Search"
          />
        </form>
      </div>
      <div className="col-12 col-md-4 col-xl-3 col-x mb-3">
        <form>
          <p className="d-flex align-items-center">
            <span className="select-text me-3"> Show </span>
            <select
              className="form-control form-select shadow-none categories"
              onChange={filterTable}
              value={filterValue}
            >
              <option disabled>Select</option>
              {sortOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </p>
        </form>
      </div>
      {/* End of Payment Filters */}

      {/* Payment Table */}
      <div className="col-12 mt-3">
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">ID</th>

                <th scope="col">Title</th>
                <th scope="col">Price</th>
                <th scope="col">Transaction No</th>

                <th scope="col">Status</th>
              </tr>
            </thead>

            {/* {payments.length &&
              payments.map((payment, index) => (
                <tbody>
                  <tr key={`tr-${index}`}>
                    <td>{index + 1}</td>
                    <td>{payment.title}</td>
                    <td>{`$${payment.price}`}</td>
                    <td>{payment.transactionNumber}</td>
                    <td>
                      <p className={`status ${payment.status}`}>
                        <span className="dot"></span>
                        {payment.status}
                      </p>
                    </td>
                  </tr>
                </tbody>
              ))} */}

            {payments.length === 0 ? (
              <tfoot>
                <tr className="btn_row">
                  <td colSpan="5">
                    <div className="no_data">
                      <p className="no_data_text">No Record Found..</p>
                    </div>
                  </td>
                </tr>
              </tfoot>
            ) : (
              payments.map((payment, index) => (
                <tbody key={index}>
                  <tr key={`tr-${index}`}>
                    <td>{index + 1}</td>
                    <td>{payment.title}</td>
                    <td>{`$${payment.price}`}</td>
                    <td>{payment.transactionNumber}</td>
                    <td>
                      <p className={`status ${payment.status}`}>
                        <span className="dot"></span>
                        <span className="status-title">{payment.status}</span>
                      </p>
                    </td>
                  </tr>
                </tbody>
              ))
            )}
          </table>
        </div>
      </div>
      {/*End of Payment Table */}
    </div>
  );
};

export default OverviewPayments;
