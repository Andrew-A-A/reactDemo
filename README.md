# UI5 to React Migration Pilot

This project serves as a pilot implementation to demonstrate the feasibility and capability of migrating existing SAP UI5 applications to a modern React-based architecture.

## Overview

The goal of this pilot is to showcase a "Clearance System" dashboard comparable to a typical enterprise UI5 application, but built entirely using React and the **UI5 Web Components for React** library. This approach allows us to maintain the SAP Fiori design language and user experience while leveraging the modern development workflow, ecosystem, and performance benefits of React.

## Key Features

- **Fiori Design Compliance**: Uses `@ui5/webcomponents-react` to ensure the look and feel remains consistent with SAP standards.
- **Responsive Dashboard**: A fully responsive layout including a Shell Bar, Side Navigation, and Grid-based widgets.
- **Data Visualization**: Integration of Charts using `@ui5/webcomponents-react-charts`.
- **Custom Components**: Demonstration of custom React components (e.g., `SegmentedProgressBar`) working alongside standard UI5 components.
- **Interactive UI**: Examples of state management (e.g., collapsible navigation) and interactive lists.

## Technology Stack

- **React**: Frontend library for building the user interface.
- **UI5 Web Components for React**: Providing the enterprise-grade UI components.
- **Create React App**: Project scaffolding and build scripts.

## Getting Started

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone the repository.
2. Navigate to the project directory:
   ```bash
   cd reactDemo
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

To start the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes.

### Building for Production

To create a production build:

```bash
npm run build
```

This builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

## Deployment

The project includes a `manifest.yml` for easy deployment to Cloud Foundry environments (such as SAP BTP).

1. Build the project: `npm run build`
2. Push to Cloud Foundry: `cf push`

## Project Structure

- `src/Homepage.jsx`: The main dashboard view implementing the UI5 shell and layout.
- `src/SegmentedProgressBar.jsx`: An example of a custom component.
- `src/data.js`: Mock data used to populate the dashboard.
- `public/`: Static assets.

## License

This project is for demonstration purposes.
