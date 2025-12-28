import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "./components/ui/provider.tsx";

async function enableMocking() {
  if (import.meta.env.DEV) {
    const { worker } = await import("./mock/browser");
    await worker.start();
  }
}

const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);

enableMocking().then(() => {
  root.render(
    <StrictMode>
      <Provider>
        <App />
      </Provider>
    </StrictMode>
  );
});
