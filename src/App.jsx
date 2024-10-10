import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { navItems } from "./nav-items";
import ProductDetail from "./pages/ProductDetail";
import ProductList from "./pages/ProductList";
import CartPage from "./pages/CartPage";
import PaymentInfo from "./pages/PaymentInfo";
// import { CartProvider } from "./components/Cart";

// Add this import
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        {/* <CartProvider> */}
        <Routes>
          {navItems.map(({ to, page }) => (
            <Route key={to} path={to} element={page} />
          ))}
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/payment-info" element={<PaymentInfo />} />
          {/* Add this new route */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* </CartProvider> */}
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
