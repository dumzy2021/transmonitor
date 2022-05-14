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
        link: "/blanks",
        icon: images.allPayments,
        text: "All Payments",
      },
      {
        link: "/blanks",
        icon: images.reconcilledPayments,
        text: "Reconcilled Payments",
      },
      {
        link: "/blanks",
        icon: images.unReconcilledPayments,
        text: "Un-reconcilled Payments",
      },
      {
        link: "/blanks",
        icon: images.settlement,
        text: "Manual Settlement",
      },
    ],
  },
  {
    section: "orders",
    routes: [
      {
        link: "/blanks",
        icon: images.orders,
        text: "All Orders",
      },
      {
        link: "/blanks",
        icon: images.pendingOrders,
        text: "Pending Orders",
      },
      {
        link: "/blanks",
        icon: images.reconcilledOrders,
        text: "Reconcilled Orders",
      },
      {
        link: "/blanks",
        icon: images.merchant,
        text: "Merchant Profile",
      },
    ],
  },
];

export default sidebarNav;
