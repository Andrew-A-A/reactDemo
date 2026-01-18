
export const userData = {
  firstName: "Ahmed",
  lastName: "Saba", // Assumed
};

export const kpiData = [
  {
    title: "Total Pending Departments",
    icon: "sap-icon://employee",
    count: 3,
    status: "Pending",
    statusState: "Warning", // Orange
  },
  {
    title: "Total Approved Departments",
    icon: "sap-icon://employee",
    count: 0,
    status: "Approved",
    statusState: "Success", // Green
  },
  {
    title: "Total Rejected Departments",
    icon: "sap-icon://employee",
    count: 0,
    status: "Rejected",
    statusState: "Error", // Red
  },
  {
    title: "Total Escalated Departments",
    icon: "sap-icon://employee",
    count: 0,
    status: "Escalated",
    statusState: "Information", // Blue
  },
];

export const departments = [
  { name: "All Departments" },
  { name: "Finance" },
  { name: "HR" },
  { name: "IT" },
  { name: "Operations" },
];

export const chartData = [
  { label: "Finance", value: 4 },
  { label: "HR", value: 2 },
  { label: "IT", value: 7 },
  { label: "Operations", value: 5 },
];

export const activities = [
  {
    id: 1,
    initials: "MC",
    icon: "sap-icon://employee",
    title: "Mohamed Chahine",
    subtitle: "sent back a request for: Finance",
    status: "Sent Back",
    statusState: "Indication01", // Custom state/color
    time: "2m ago",
    action: "Review",
  },
  {
    id: 2,
    initials: "AS",
    icon: "sap-icon://manager",
    title: "Andrew Saba",
    subtitle: "approved a request for: IT",
    status: "Approved",
    statusState: "Success",
    time: "1h ago",
    action: "",
  },
  {
    id: 3,
    initials: "SK",
    icon: "sap-icon://employee",
    title: "Sarah Khalil",
    subtitle: "rejected a request for: HR",
    status: "Rejected",
    statusState: "Error",
    time: "1d ago",
    action: "",
  },
    {
    id: 4,
    initials: "MC",
    icon: "sap-icon://employee",
    title: "Mohamed Chahine",
    subtitle: "created a new request",
    status: "New",
    statusState: "Information",
    time: "2d ago",
    action: "View",
  },
];
