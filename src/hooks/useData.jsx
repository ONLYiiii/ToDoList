/* eslint-disable no-unused-vars */
/* eslint-disable no-case-declarations */
import React, {useState, useContext, useReducer, createContext} from 'react';
import {
  light,
  Image,
  NewDate,
  NewTime,
  IconActivity,
} from '../constants';
import PropTypes from 'prop-types';
const Activity_DATA = [
  {
    id: '1',
    name: 'ตื่นนอน',
    timestart: "08:00",
    dateAt: "2023-03-05",
    howlong: 60
  },
  {
    id: '2',
    name: 'รับประทานอาหาร',
    timestart: "09:00",
    dateAt: "2023-03-06",
    howlong: 60
  },
]

export const DataContext = createContext({
  expenses: [],
  addExpense: ({ name, timestart, dateAt, howlong }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { name, timestart, dateAt, howlong }) => {},
});

function expensesReducer(state, action) {
  switch (action.type){
      case 'ADD' :
          const id = new Date().getTime().toString()
          return [{...action.payload, id: id}, ...state]
      case 'UPDATE':
          const updatableExpenseIndex = state.findIndex(
              (expense) => expense.id === action.payload.id
          )
          const updatableExpense = state[updatableExpenseIndex]
          const updatedItem = { ...updatableExpense, ...action.payload.data}
          const updatedExpense = [...state]
          updatedExpense[updatableExpenseIndex] = updatedItem
          return updatedExpense
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

  const [expenseState, dispatch] = useReducer(expensesReducer, Activity_DATA)

  function addExpense(expenseData) {
      dispatch({ type: 'ADD', payload: expenseData})
  }

  function deleteExpense(id) {
      dispatch({ type: 'DELETE', payload: id})
  }

  function updateExpense(id, expenseData) {
      dispatch({ type: 'UPDATE', payload: {id: id, data: expenseData}})
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
    expenses: expenseState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
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
