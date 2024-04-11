import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function UpdateList() {
  const { id } = useParams();

  // Convert id to number
  const itemId = parseInt(id, 10);

  const warehouseInfoListupdate = useSelector(
    (state) => state.addinfo.warehouseInfoList
  );

  const existingUser = warehouseInfoListupdate.filter((f) => f.id === itemId);
  const { invoiceId, details, items, itemsDescription, status } =
    existingUser[0];

  const [updatedFormData, setUpdatedFormData] = useState({
    invoiceIdNew: invoiceId,
    detailsNew: details,
    itemsNew: items,
    itemsDescriptionNew: itemsDescription,
    statusNew: status,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    const newData = {
      id: itemId, // Use the converted id
      invoiceId: updatedFormData.invoiceIdNew,
      details: updatedFormData.detailsNew,
      items: updatedFormData.itemsNew,
      itemsDescription: updatedFormData.itemsDescriptionNew,
      status: updatedFormData.statusNew,
    };

    console.log(newData, 'updated data');

    dispatch({ type: "UPDATE", payload: newData });

    navigate("/");
  };
  return (
    <div>
      <div className="border-2 border p-4 rounded-lg bg-gray-200">
        <Link to="/" className="flex justify-end cursor-pointer">
          <ImCross />
        </Link>
        <div className="mb-4 text-gray-900 font-serif">Enter Details</div>
        <form
          className="flex flex-col w-full mb-4 lg:w-96"
          onSubmit={handleUpdate}
        >
          <input
            type="text"
            name="invoiceId"
            placeholder="invoice-id"
            className="input input-bordered w-full mb-4"
            value={updatedFormData.invoiceIdNew}
            onChange={(e) =>
              setUpdatedFormData({
                ...updatedFormData,
                invoiceIdNew: e.target.value,
              })
            }
          />
          <input
            type="text"
            name="details"
            placeholder="details"
            className="input input-bordered w-full mb-4"
            value={updatedFormData.detailsNew}
            onChange={(e) =>
              setUpdatedFormData({
                ...updatedFormData,
                detailsNew: e.target.value,
              })
            }
          />
          <input
            type="text"
            name="items"
            placeholder="items"
            className="input input-bordered w-full mb-4"
            value={updatedFormData.itemsNew}
            onChange={(e) =>
              setUpdatedFormData({
                ...updatedFormData,
                itemsNew: e.target.value,
              })
            }
          />
          <textarea
            name="itemsDescription"
            className="textarea textarea-bordered mb-4"
            placeholder="items-descriptions"
            value={updatedFormData.itemsDescriptionNew}
            onChange={(e) =>
              setUpdatedFormData({
                ...updatedFormData,
                itemsDescriptionNew: e.target.value,
              })
            }
          ></textarea>

          <select
            name="status"
            className="select select-bordered w-full mb-4"
            value={updatedFormData.statusNew}
            onChange={(e) =>
              setUpdatedFormData({
                ...updatedFormData,
                statusNew: e.target.value,
              })
            }
          >
            <option value="" disabled>
              Select Status
            </option>
            <option value="Submitted">Submitted</option>
            <option value="Transported">Transported</option>
            <option value="Transport Received">Transport Received</option>
          </select>

          <button className="btn btn-active btn-neutral" type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
