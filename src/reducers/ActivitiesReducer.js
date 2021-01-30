const initalState = {
    activities: [
        {
            id: "1",
            name: "Etkinlik 1",
            duration: "2 saat"
        },
        {
            id: "2",
            name: "Etkinlik 2",
            duration: "3 saat"
        }
    ]
};

const ActivitiesReducer = (state = initalState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "CREATE_ACTIVITY":
            const added = { ...state, activities: [...state.activities, payload] };
            return added;
        case "DELETE_ACTIVITY":
            const deleted = state.activities.filter(activity => activity.id !== payload);
            return { ...state, activities: deleted };
        case "UPDATE_ACTIVITY":
            const updated = state.activities.map(activity => {
                if (activity.id == payload.id) {
                    activity = payload
                }
                return activity
            })

            return { ...state, activities: updated };
    }
    return state;
}

export default ActivitiesReducer;