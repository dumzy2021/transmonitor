import React, { useState } from "react";
import "./overviewPayments.scss";
import { images } from "../../constants/images";
import Payments from "../../constants/payments";
const OverviewPayments = () => {
  const [payments, setPayments] = useState(Payments);

  //   console.log(payments);
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
        <form className="d-flex align-items-center payment-search-form mb-4 mb-md-0">
          <span className="search-icon">
            <img src={images.searchIcon} alt="Search Icon" className="" />
          </span>
          <input
            className="form-control payment-search shadow-none"
            type="search"
            placeholder="Search payments"
            aria-label="Search"
          />
        </form>
      </div>
      <div className="col-12 col-md-3 mb-3">
        <form>
          <p className="d-flex align-items-center">
            <span className="select-text me-3"> Show </span>
            <select className="form-control form-select shadow-none categories">
              <option></option>
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

            <tbody>
              {payments.length &&
                payments.map((payment, index) => (
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
                ))}
            </tbody>
            {/* <tfoot>
              <tr scope="row " className="btn_row">
                <td colspan={5}>
                  <div className="no_data">
                    <p className="no_data_text">No Record Found..</p>
                  </div>
                </td>
              </tr>
            </tfoot> */}
          </table>
        </div>
      </div>
      {/*End of Payment Table */}
    </div>
  );
};

export default OverviewPayments;
