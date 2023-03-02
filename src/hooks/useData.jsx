import React, {useState, useContext} from 'react';
import {
  IMAGEDATA
} from '../constants/mocks';
import {light} from '../constants';
import PropTypes from 'prop-types';

export const DataContext = React.createContext({});

// eslint-disable-next-line react/prop-types
export const DataProvider = ({ children }) => {

  const [theme, setTheme] = useState(light)
  const [imageData, setImageData] = useState(IMAGEDATA)

  const contextValue = {
    theme,
    setTheme,
    imageData,
    setImageData
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
