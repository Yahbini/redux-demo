const initialState = {
  list: [],
  activeId: null,
};

// * B2
const hobbyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_HOBBY": {
      // ? Mỗi khi làm việc trên reducer mà có array, object thì có vấn đề bị tham chiếu
      //   ? Phải clone nó ra object or array mới
      const newList = [...state.list];
      newList.push(action.payload);

      return {
        ...state,
        list: newList,
      };
    }

    case "SET_ACTIVE_HOBBY": {
      const newActiveId = action.payload.id;

      return {
        ...state,
        activeId: newActiveId
      };
    }

    default:
      return state;
  }
};

export default hobbyReducer;
