import "./sidebar.scss";
import { images } from "../../constants/images";
const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div
        className="d-flex flex-column flex-shrink-0 py-3 sidebar-contents"
        style={{ width: "280px" }}
      >
        <a
          href="/"
          title="Generate Invoice"
          className="text-center link-dark text-decoration-none"
        >
          <span className="invoice-btn">Generate Invoice</span>
        </a>
        <div className="sidebar-nav">
          <ul className="nav nav-pills flex-column mb-auto sidebar-nav pb-5">
            <li className="nav-title mt-5">
              <span>main</span>
            </li>
            <li className="nav-item">
              <a
                href="/"
                className="nav-link"
                aria-current="page"
                title="Overview"
              >
                <img
                  src={images.overview}
                  alt="sidebar icons"
                  className="nav-icon"
                />
                overview
              </a>
            </li>
            <li className="nav-title mt-5">
              <span>Payments</span>
            </li>
            <li className="nav-item">
              <a
                href="/"
                className="nav-link"
                aria-current="page"
                title="All Payements"
              >
                <img
                  src={images.allPayments}
                  alt="sidebar icons"
                  className="nav-icon"
                />
                all payments
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/"
                className="nav-link"
                aria-current="page"
                title="Reconcilled Payements"
              >
                <img
                  src={images.reconcilledPayments}
                  alt="sidebar icons"
                  className="nav-icon"
                />
                reconcilled payments
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/"
                className="nav-link"
                aria-current="page"
                title="Un-Reconcilled Payements"
              >
                <img
                  src={images.unReconcilledPayments}
                  alt="sidebar icons"
                  className="nav-icon"
                />
                un-reconcilled payments
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/"
                className="nav-link"
                aria-current="page"
                title="Manual Settlement"
              >
                <img
                  src={images.settlement}
                  alt="sidebar icons"
                  className="nav-icon"
                />
                manual settlement
              </a>
            </li>
            <li className="nav-title mt-5">
              <span>orders</span>
            </li>
            <li className="nav-item">
              <a
                href="/"
                className="nav-link"
                aria-current="page"
                title="All Orders"
              >
                <img
                  src={images.orders}
                  alt="sidebar icons"
                  className="nav-icon"
                />
                all orders
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/"
                className="nav-link"
                aria-current="page"
                title="Pending Orders"
              >
                <img
                  src={images.pendingOrders}
                  alt="sidebar icons"
                  className="nav-icon"
                />
                pending orders
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/"
                className="nav-link"
                aria-current="page"
                title="Reconcilled Orders"
              >
                <img
                  src={images.reconcilledOrders}
                  alt="sidebar icons"
                  className="nav-icon"
                />
                reconcilled orders
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/"
                className="nav-link"
                aria-current="page"
                title="Merchant Profile"
              >
                <img
                  src={images.merchant}
                  alt="sidebar icons"
                  className="nav-icon"
                />
                merchant profile
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
