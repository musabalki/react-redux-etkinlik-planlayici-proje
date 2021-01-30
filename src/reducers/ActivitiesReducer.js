const initalState = {
    activities:[
        {
            id: "1",
            name: "Aktivite 1",
            duration: "2 saat"
        },
        {
            id: "2",
            name: "Aktivite 2",
            duration: "3 saat"
        }
    ]
};

const ActivitiesReducer = (state = initalState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "CREATE_ACTIVITY":
            const add={...state,activities:[...state.activities,payload]};
            return add;
        case "DELETE_ACTIVITY":
            const result = state.activities.filter(activity => activity.id !== payload);
            return {...state,activities:result};
        case "UPDATE_ACTIVITY":
            return state;
    }
    return state;
}

export default ActivitiesReducer;