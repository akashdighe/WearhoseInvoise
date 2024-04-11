const initialState = {
  warehouseInfoList : [
    {
      id: 1,
      invoiceId: "ssj",
      details:'akakkak'
    },
  ],
};

// console.log(initialState.warehouseInfoList,'reducer')

const warehouseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_INFO":
      return {
        ...state,
        warehouseInfoList: [...state.warehouseInfoList, action.payload],
      };

    case "DELETE":
      return {
        ...state,
        warehouseInfoList: state.warehouseInfoList.filter(
          (info) => info.id !== action.payload
        ),
      };
    case "UPDATE":
      return {
        ...state,
        warehouseInfoList: state.warehouseInfoList.map((info) =>
          info.id === action.payload.id ? { ...info, ...action.payload } : info
        ),
      };
    default:
      return state;
  }
};

export default warehouseReducer;
