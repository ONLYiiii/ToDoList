/* eslint-disable no-unused-vars */
/* eslint-disable no-case-declarations */
import React, {useState, useContext, useReducer, createContext} from 'react';
import {
  light,
  Image,
  NewDate,
  NewDateStrip,
  IconActivity,
} from '../constants';
import PropTypes from 'prop-types';
import moment from 'moment';

const Activity_DATA = [
  {
    id: new Date().getTime().toString(),
    name: 'ตื่นนอน',
    timestart: "09:00",
    dateAt: moment().format("YYYY-MM-DD"),
    howlong: 60,
    icon: light.icons.alarm,
    comment: "- แปรงฟัน"
  },
]

export const DataContext = createContext({
  activity: [],
  addActivity: ({ name, timestart, dateAt, howlong, icon, comment }) => {},
  deleteActivity: (id) => {},
  updateActivity: (id, { name, timestart, dateAt, howlong, icon, comment }) => {},
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
        return state.filter((activity) => activity.id !== action.payload)
    default:
        return state
  }
}

// eslint-disable-next-line react/prop-types
export const DataProvider = ({ children }) => {

  const [theme, setTheme] = useState(light)
  const [image, setImage] = useState(Image)
  const [newDate, setNewDate] = useState(NewDate)
  const [dateStripSelect, setDateStripSelect] = useState(NewDateStrip)
  const [iconActivity, setIconActivity] = useState(IconActivity)

  const [activityState, dispatch] = useReducer(activityReducer, Activity_DATA)

  function addActivity(activityData) {
      dispatch({ type: 'ADD', payload: activityData})
      activityState.sort((a,b)=>{
        return new Date(b.id) - new Date(a.id);
      })
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
    dateStripSelect,
    setDateStripSelect,
    iconActivity,
    setIconActivity,
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
