export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  //   "BQCX3QUFpnP7kdEVqM9iXOcUN-BsRxiMt28DE-okS48TkRnyJ8AR9JhS8cXbBqKzRfW_9Atqw0xhGUOvQdI1zZyh8pENrrbASCOmmWVVnu9KEOPbXX-aGheqlh87Oi0PL0F8fybPgYKhApDSDMRLOOWhsRCur96u0IGh2tf2bt9BhPtkQTu8",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
