/* eslint-disable no-unused-vars */
/* eslint-disable no-case-declarations */
import React, {useState, useContext, useReducer, createContext} from 'react';
import {
  light,
  Image,
  NewDate,
  NewTime,
  IconActivity,
  NewIconActivity,
  newTextActivity,
} from '../constants';
import PropTypes from 'prop-types';

const Activity_DATA = [
  {
    id: '1',
    name: 'ตื่นนอน',
    timestart: "08:00",
    dateAt: "2023-03-05",
    howlong: 60,
    icon: NewIconActivity.iconActivitySelected,
  },
  {
    id: '2',
    name: 'รับประทานอาหาร',
    timestart: "09:00",
    dateAt: "2023-03-06",
    howlong: 60,
    icon: NewIconActivity.iconActivitySelected,
  },
]

export const DataContext = createContext({
  activity: [],
  addActivity: ({ name, timestart, dateAt, howlong, icon }) => {},
  deleteActivity: (id) => {},
  updateActivity: (id, { name, timestart, dateAt, howlong, icon }) => {},
});

function activityReducer(state, action) {
  switch (action.type){
    case 'ADD' :
        const id = new Date().getTime().toString()
        return [{...action.payload, id: id}, ...state]
    case 'UPDATE':
        const updatableActivityIndex = state.findIndex(
            (activity) => activity.id === action.payload.id
        )
        const updatableActivity = state[updatableActivityIndex]
        const updatedItem = { ...updatableActivity, ...action.payload.data}
        const updatedActivity = [...state]
        updatedActivity[updatableActivityIndex] = updatedItem
        return updatedActivity
    case 'DELETE':
        return state.filter((expense) => expense.id !== action.payload)
    default:
        return state
  }
}

// eslint-disable-next-line react/prop-types
export const DataProvider = ({ children }) => {

  const [theme, setTheme] = useState(light)
  const [image, setImage] = useState(Image)
  const [newDate, setNewDate] = useState(NewDate)
  const [newTime, setNewTime] = useState(NewTime)
  const [iconActivity, setIconActivity] = useState(IconActivity)
  const [newIconActivitySelected, setIconActivitySelected] = useState(NewIconActivity)
  const [textActivity,setTextActivity] = useState(newTextActivity)

  const [activityState, dispatch] = useReducer(activityReducer, Activity_DATA)

  function addActivity(activityData) {
      dispatch({ type: 'ADD', payload: activityData})
  }

  function deleteActivity(id) {
      dispatch({ type: 'DELETE', payload: id})
  }

  function updateActivity(id, activityData) {
      dispatch({ type: 'UPDATE', payload: {id: id, data: activityData}})
  }

  const contextValue = {
    theme,
    setTheme,
    image,
    setImage,
    newDate,
    setNewDate,
    newTime,
    setNewTime,
    iconActivity,
    setIconActivity,
    newIconActivitySelected,
    setIconActivitySelected,
    textActivity,
    setTextActivity,
    activity: activityState,
    addActivity: addActivity,
    deleteActivity: deleteActivity,
    updateActivity: updateActivity,
  }

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node,
}

export const useData = () => useContext(DataContext);
