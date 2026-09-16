import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Menu from "./Menu";
import DishDetail from "./DishDetail";
import Cart from "./Cart";
import NotFound from "./NotFound";
import RequireAuth from "./auth/RequireAuth";
import { AuthProvider } from "./auth/AuthContext";
import Login from "./auth/Login";
import { lazy, Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";

const Checkout = lazy(() => import("./checkout/Checkout"));
const Receipt = lazy(() => import("./orders/Receipt"));

function MenuFallback() {
  return (
    <div>
      <h2>Menu unavailable</h2>
      <p>We could not display the menu right now.</p>
    </div>
  );
}
function CartFallback() {
  return (
    <div>
      <h2>Cart unavailable</h2>
      <p>We could not display your cart right now.</p>
    </div>
  );
}
function LoadingFallback() {
  return <p>Loading...</p>;
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ErrorBoundary
          fallback={
            <div>
              <h2>Application error</h2>
              <p>Please try again.</p>
            </div>
          }
        >
          <Suspense fallback={<LoadingFallback/>}>
            <Routes>
              <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>} />
                <Route path="menu"
                  element={
                    <ErrorBoundary fallback={<MenuFallback/>}>
                      <Menu />
                    </ErrorBoundary>
                  }
                />
                <Route path="menu/:id" element={<DishDetail/>}/>
                <Route path="cart"
                  element={
                    <ErrorBoundary fallback={<CartFallback/>}>
                      <Cart />
                    </ErrorBoundary>
                  }
                />
                <Route path="checkout"
                  element={
                    <RequireAuth>
                      <Checkout/>
                    </RequireAuth>
                  }
                />
                <Route path="orders/:id" element={<Receipt/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="*" element={<NotFound/>}/>
              </Route>
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;