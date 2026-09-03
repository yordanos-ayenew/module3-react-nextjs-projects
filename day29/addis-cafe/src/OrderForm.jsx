import { useState } from "react";

function OrderForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    area: "Bole",
  });
  const isValidPhone = /^(?:\+251|0)9\d{8}$/.test(form.phone);
  function handleChange(e) {
    const {name, value} = e.target;
    setForm({ ...form, [name]: value});
  }
  function handleSubmit(e) {
    e.preventDefault();
    alert(`Order submitted in ${form.area}!`);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Delivery Details</h2>
      <div>
        <label>Name: </label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
        />
      </div>

      <div>
        <label>Phone (TeleBirr): </label>
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="09... or +2519..."
        />
        {form.phone && !isValidPhone && (
          <p>Use format 09XXXXXXXX or +2519XXXXXXXX</p>
        )}
      </div>

      <div>
        <label>Area: </label>
        <select name="area" value={form.area} onChange={handleChange}>
          <option value="Bole">Bole</option>
          <option value="Kazanchis">Kazanchis</option>
          <option value="Piazza">Piazza</option>
          <option value="CMC">CMC</option>
        </select>
      </div>

      <button disabled={!isValidPhone || !form.name}>
        Pay with TeleBirr
      </button>
    </form>
  );
}
export default OrderForm;