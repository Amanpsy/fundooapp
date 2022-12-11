const drawerState = {
  label: "Keep",
};
export const DrawerReducer = (state = drawerState, action) => {
  switch (action.type) {
    case "Notes":
      return {
        ...state,
        label: "Notes",
      };

    case "Reminders":
      return {
        ...state,
        label: "Reminders",
      };

    case "Edit":
      return {
        ...state,
        label: "Edit Label",
      };
    case "Archieve":
      return {
        ...state,
        label: "Archieve",
      };
    case "Bin":
      return {
        ...state,
        label: "Bin",
      };

    default:
      return state;
  }
};
