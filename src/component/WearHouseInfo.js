import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const WearHouseInfo = () => {
  const [formData, setFormData] = useState({
    invoiceId: "",
    details: "",
    items: "",
    itemsDescription: "",
    status: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newInfo = {
      id: Math.floor(Math.random() * 100),
      invoiceId: formData.invoiceId,
      details: formData.details,
      items: formData.items,
      itemsDescription: formData.itemsDescription,
      status: formData.status,
    };

    dispatch({ type: "ADD_INFO", payload: newInfo });

    setFormData({
      invoiceId: "",
      details: "",
      items: "",
      itemsDescription: "",
      status: "",
    });

    navigate("/");
  };

  return (
    <div className="border-2 border p-4 rounded-lg bg-gray-200">
      <Link to="/" className="flex justify-end cursor-pointer">
        <ImCross />
      </Link>
      <div className="mb-4 text-gray-900 font-serif">Enter Details</div>
      <form
        className="flex flex-col w-full mb-4 lg:w-96"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="invoiceId"
          placeholder="invoice-id"
          className="input input-bordered w-full mb-4"
          value={formData.invoiceId}
          onChange={(e) =>
            setFormData({ ...formData, invoiceId: e.target.value })
          }
        />
        <input
          type="text"
          name="details"
          placeholder="details"
          className="input input-bordered w-full mb-4"
          value={formData.details}
          onChange={(e) =>
            setFormData({ ...formData, details: e.target.value })
          }
        />
        <input
          type="text"
          name="items"
          placeholder="items"
          className="input input-bordered w-full mb-4"
          value={formData.items}
          onChange={(e) => setFormData({ ...formData, items: e.target.value })}
        />
        <textarea
          name="itemsDescription"
          className="textarea textarea-bordered mb-4"
          placeholder="items-descriptions"
          value={formData.itemsDescription}
          onChange={(e) =>
            setFormData({ ...formData, itemsDescription: e.target.value })
          }
        ></textarea>

        <select
          name="status"
          className="select select-bordered w-full mb-4"
          value={formData.status}
          onChange={(e) => setFormData({ ...formData, status: e.target.value })}
        >
          <option value="" disabled>
            Select Status
          </option>
          <option value="Submitted">Submitted</option>
          <option value="Transported">Transported</option>
          <option value="Transport Received">Transport Received</option>
        </select>

        <button className="btn btn-active btn-neutral" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default WearHouseInfo;
