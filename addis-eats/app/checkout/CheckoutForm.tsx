"use client";

import { useState, type FormEvent } from "react";
import { useCart } from "../cart/CartContext";

type OrderResponse = {
  message?: string;
  error?: string;
  total?: number;
  items?: {
    name: string;
    quantity: number;
    subtotal: number;
  }[];
  fieldErrors?: Record<string, string[]>;
};

export default function CheckoutForm() {
  const { items, clearCart } = useCart();
  const [isPending, setIsPending] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (items.length === 0) {
      setMessage("Your cart is empty. Please add dishes before checking out.");
      return;
    }
    const formData = new FormData(event.currentTarget);
    const order = {
      name: String(formData.get("name") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      area: String(formData.get("area") ?? ""),
      notes: String(formData.get("notes") ?? ""),
      items: items.map((item) => ({
        dishId: item.id,
        quantity: item.quantity,
      })),
    };
    setIsPending(true);
    setMessage("");
    setSuccess(false);
    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });
      const data: OrderResponse = await response.json();
      if (!response.ok) {
        const fieldMessages = Object.values(data.fieldErrors ?? {}).flat();
        setMessage(
          fieldMessages[0] ??
            data.error ??
            data.message ??
            "We couldn't submit your order. Please try again."
        );
        return;
      }
      setSuccess(true);
      setMessage(`Order submitted successfully! Your total is ${data.total ?? 0} ETB.`);
      clearCart();
      event.currentTarget.reset();
    } catch {
      setMessage("Unable to connect to the server. Please try again.");
    } finally {
      setIsPending(false);
    }
  }
  if (success) {
    return (
      <section
        className="mt-6 rounded-lg border border-green-200 bg-green-50 p-6"
        role="status"
      >
        <h2 className="text-xl font-bold text-green-800">
          Order Submitted!
        </h2>
        <p className="mt-2 text-green-700">{message}</p>
        <a
          href="/menu"
          className="mt-5 inline-block rounded-lg bg-orange-600 px-5 py-3 font-medium text-white hover:bg-orange-700"
        >
          Back to Menu
        </a>
      </section>
    );
  }
  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-5">
      <div>
        <label htmlFor="customerName" className="mb-1 block font-medium">
          Your name
        </label>
        <input
          id="customerName"
          name="customerName"
          type="text"
          required
          minLength={2}
          className="w-full rounded-lg border border-gray-300 p-3 focus:border-orange-500 focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="phone" className="mb-1 block font-medium">
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="0912345678 or +251912345678"
          required
          className="w-full rounded-lg border border-gray-300 p-3 focus:border-orange-500 focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="area" className="mb-1 block font-medium">
          Delivery Area
        </label>
        <select
          id="area"
          name="area"
          required
          defaultValue="Bole"
          className="w-full rounded-lg border border-gray-300 bg-white p-3 focus:border-orange-500 focus:outline-none"
        >
          <option value="Bole">Bole</option>
          <option value="Piassa">Piassa</option>
          <option value="Mexico">Mexico</option>
          <option value="Kazanchis">Kazanchis</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {message && (
        <p role="alert" className="text-sm text-red-600">
          {message}
        </p>
      )}
      <button
        type="submit"
        disabled={isPending || items.length===0}
        className="w-full rounded-lg bg-orange-600 px-5 py-3 font-semibold text-white transition hover:bg-orange-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isPending ? "Submitting..." : "Place Order"}
      </button>
      {items.length === 0 && (
        <p className="text-sm text-gray-600">
          Your cart is empty. Return to the menu to add dishes.
        </p>
      )}
    </form>
  );
}