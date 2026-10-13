"use client";

import { useActionState } from "react";
import { checkoutAction } from "./actions";

const initialState = {
  success: false,
  message: "",
};

export default function CheckoutForm() {
  const [state, formAction, isPending] = useActionState(checkoutAction, initialState);
  return (
    <form action={formAction} className="mt-6 space-y-4">
      <div>
        <label htmlFor="customerName" className="block">
          Your name
        </label>
        <input
          id="customerName"
          name="customerName"
          required
          className="rounded border p-2"
        />
      </div>
      <div>
        <label htmlFor="email" className="block">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="rounded border p-2"
        />
      </div>
      <button
        type="submit"
        disabled={isPending}
        className="rounded bg-orange-600 px-4 py-2 text-white"
      >
        {isPending ? "Submitting..." : "Submit"}
      </button>
      {state.message && (
        <p role="status">{state.message}</p>
      )}
    </form>
  );
}