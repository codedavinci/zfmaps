import React from 'react';

const Search = ({ onSubmitSearch }) => {
  let Input
  const onSubmit = (e) => {
    e.preventDefault()
    if (Input.value) {
      onSubmitSearch(Input.value)
    }
  }
  return (
    <div className="App-body-details-search">
      <form onSubmit={onSubmit} >
        <input type="text" ref={e => Input = e} />
        <button type='submit'>SEARCH</button>
      </form>
    </div>
  )
}

export default Search