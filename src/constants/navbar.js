import { images } from "./images";
const sidebarNav = [
  {
    section: "main",
    routes: [
      {
        link: "/",
        icon: images.overview,
        text: "Overview",
      },
    ],
  },
  {
    section: "payments",
    routes: [
      {
        link: "/payments",
        icon: images.allPayments,
        text: "All Payments",
      },
      {
        link: "/reconcilled-payments",
        icon: images.reconcilledPayments,
        text: "Reconcilled Payments",
      },
      {
        link: "/unreconcilled-payments",
        icon: images.unReconcilledPayments,
        text: "Un-reconcilled Payments",
      },
      {
        link: "/manual-settlement",
        icon: images.settlement,
        text: "Manual Settlement",
      },
    ],
  },
  {
    section: "orders",
    routes: [
      {
        link: "/orders",
        icon: images.orders,
        text: "All Orders",
      },
      {
        link: "/pending-orders",
        icon: images.pendingOrders,
        text: "Pending Orders",
      },
      {
        link: "/reconcilled-orders",
        icon: images.reconcilledOrders,
        text: "Reconcilled Orders",
      },
      {
        link: "/merchant-profile",
        icon: images.merchant,
        text: "Merchant Profile",
      },
    ],
  },
];

export default sidebarNav;
