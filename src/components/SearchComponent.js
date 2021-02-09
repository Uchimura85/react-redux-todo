import React, { useState } from 'react'
import PropTypes from 'prop-types'

const SearchComponent = ({ active, onSearch }) => {
  var [search, setSearch] = useState('');

  return <>
    <div className="input-group">
      <input value={search} onChange={(e) => { onSearch(e.target.value); setSearch(e.target.value) }} className="form-control" />
      <div className="input-group-append">
        <button
          onClick={onSearch}
          disabled={active}
          className="btn btn-warning"

          style={{
            marginLeft: '4px',
          }}
        >
          Search
    </button>
      </div>
    </div>
  </>
}

SearchComponent.propTypes = {
  active: PropTypes.bool.isRequired,
  onSearch: PropTypes.func.isRequired
}

export default SearchComponent
