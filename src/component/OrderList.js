import React from "react";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";

export default function OrderList() {
  const warehouseInfoListData = useSelector(
    (state) => state.addinfo.warehouseInfoList || [] // Provide a default empty array if warehouseInfoList is undefined
  );

 
  const dispatch = useDispatch();
  // const history = useHistory();

  const handleDeleteInfo = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  return (
    <div>
      <div className="overflow-x-auto border-2 border-black p-4 rounded-lg">
        {/* <div className="flex justify-end cursor-pointer" >
          <ImCross />
        </div> */}
        <div className="text-black text-lg font-semibold">Order List</div>
        <table className="table p-3">
          <thead>
            <tr>
              <th>JobID</th>
              <th>InvoiceId</th>
              <th>Details</th>
              <th>Items</th>
              <th>itemsDescription</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {warehouseInfoListData.map((info) => (
              <tr key={info.id}>
                <th>{info.id}</th>
                <td>{info.invoiceId}</td>
                <td>{info.details}</td>
                <td>{info.items}</td>
                <td>{info.itemsDescription}</td>
                <td>{info.status}</td>
                <td>
                  <Link to={`/update/${info.id}`} className="btn btn-neutral mr-2">Edit</Link>
                  <button
                    className="btn btn-neutral mr-2"
                    onClick={() => handleDeleteInfo(info.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
