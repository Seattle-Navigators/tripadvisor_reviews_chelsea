import React from 'react';
import { string, func, arrayOf, array } from 'prop-types'; // eslint-disable-line
import ListItem from './ListItem';

const RadioList = ({
  title,
  handleSelection,
  langs,
  handleFilter,
  selection,
}) => {
  const displayed = langs.slice(0, 4);
  return (
    <div className="checklist-filter">
      <div className="filter-header">{title}</div>

      {displayed.map((lang) => {
        const selected = lang[0] === selection;
        return (
          <ListItem
            value={lang[0]}
            name="small-langs"
            records={lang[1]}
            type="radio"
            key={`${lang}-label`}
            handleFilter={handleFilter}
            selected={selected}
          />
        );
      })}

      <button id="lang-btn" type="button" onClick={handleSelection} value="more-langs">
        More
      </button>
    </div>
  );
};

RadioList.propTypes = {
  title: string.isRequired,
  handleSelection: func.isRequired,
  langs: arrayOf(array).isRequired,
  handleFilter: func.isRequired,
  selection: string.isRequired,
};

export default RadioList;
