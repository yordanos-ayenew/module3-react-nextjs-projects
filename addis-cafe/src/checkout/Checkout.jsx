import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../cart/cartStore";
import { validate } from "./validate";
import { placeOrder } from "./api/orders";
import Field from "./Field";

function Checkout() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    area: "Bole",
    notes: "",
  });
  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [serverErrors, setServerErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const items = useCartStore((s) => s.items);
  const total = useCartStore((s) =>
    s.items.reduce((sum, item) => sum + item.price * item.qty, 0)
  );
  const clear = useCartStore((s) => s.clear);
  const navigate = useNavigate();
  const errors = {
    ...validate(form),
    ...serverErrors,
  };
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({
      ...f,
      [name]: value,
    }));
    setServerErrors((current) => {
      const next = { ...current };
      delete next[name];
      return next;
});
  }
  function handleBlur(e) {
    const { name } = e.target;
    setTouched((t) => ({
      ...t,
      [name]: true,
    }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setTouched({
        name: true,
        phone: true,
        area: true,
        notes: true,
      });
      const firstError = Object.keys(validationErrors)[0];
      document.getElementById(firstError)?.focus();
      return;
    }
    if (submitting) {
      return;
    }
    setSubmitting(true);
    setServerErrors({});
    try {
      const order = await placeOrder(form);
      clear();
      navigate(`/orders/${order.id}`, {
        replace: true,
      });
    } catch (error) {
      if (error.status === 422) {
        setServerErrors(error.fieldErrors || {});
      } else {
        setServerErrors({
          form: "Something went wrong. Please try again.",
        });
      }
    } finally {
      setSubmitting(false);
    }
  }
  if (items.length === 0) {
    return (
      <div>
        <h2>Checkout</h2>
        <p>Your cart is empty.</p>
      </div>
    );
  }
  return (
    <div>
      <h2>Checkout</h2>
      {submitted && Object.keys(errors).length > 0 && (
        <div role="alert" className="summary">
          <p>Please fix {Object.keys(errors).length} fields: </p>
          <ul>
            {Object.entries(errors).map(([field, message]) => (
              <li key={field}>
                <a href={`#${field}`}>{message}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
      {serverErrors.form && (
        <p role="alert">{serverErrors.form}</p>
      )}
      <form onSubmit={handleSubmit} noValidate>
        <Field
          label="Your name"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.name ? errors.name : undefined}
          placeholder="Enter your name"
        />
        <Field
          label="TeleBirr number"
          id="phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.phone ? errors.phone : undefined}
          placeholder="09..."
        />
        <div>
          <label htmlFor="area">
            Delivery area
          </label>
          <select
            id="area"
            name="area"
            value={form.area}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={!!(
              touched.area && errors.area
            )}
            aria-describedby={
              touched.area && errors.area ? "area-error" : undefined
            }
          >
            <option value="Bole">Bole</option>
            <option value="Kazanchis">Kazanchis</option>
            <option value="Megenagna">Megenagna</option>
            <option value="Piassa">Piassa</option>
          </select>

          {touched.area && errors.area && (
            <p id="area-error" role="alert">
              {errors.area}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="notes">
            Notes (optional)
          </label>
          <textarea
            id="notes"
            name="notes"
            value={form.notes}
            onChange={handleChange}
            onBlur={handleBlur}
            maxLength={200}
            aria-invalid={!!(
              touched.notes && errors.notes
            )}
            aria-describedby={
              touched.notes && errors.notes ? "notes-error" : undefined
            }
          />
          {touched.notes && errors.notes && (
            <p id="notes-error" role="alert">
              {errors.notes}
            </p>
          )}
          <p>{form.notes.length}/200</p>
        </div>
        <button type="submit" disabled={submitting}>
          {submitting ? "Sending your order..." : `Order — ${total} ETB`}
        </button>
      </form>
    </div>
  );
}
export default Checkout;