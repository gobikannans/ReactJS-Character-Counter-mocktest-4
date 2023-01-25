import {Component} from 'react'
import {v4} from 'uuid'
import './App.css'

// Replace your code here
class App extends Component {
  state = {characterList: [], searchValue: ''}

  onAddUserInput = event => {
    event.preventDefault()
    const {searchValue, characterList} = this.state
    const newUserInput = {
      id: v4(),
      userEnteredText: searchValue,
      textLength: searchValue.length,
    }
    this.setState(prevState => ({
      characterList: [...prevState.characterList, newUserInput],
      searchValue: '',
    }))
    console.log(characterList)
  }

  onChangeSearch = event => {
    this.setState({
      searchValue: event.target.value,
    })
  }

  render() {
    const {characterList, searchValue} = this.state
    return (
      <div className="bg-container">
        <div className="counter-container">
          <div className="counter-heading-container">
            <h1 className="counter-heading">
              Count the characters like a Boss...
            </h1>
          </div>
          <>
            {characterList.length !== 0 ? (
              <ul className="character-list-container">
                {characterList.map(eachInput => (
                  <li key={eachInput.id}>
                    <p className="user-input">
                      {eachInput.userEnteredText} : {eachInput.textLength}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
                className="img"
              />
            )}
          </>
        </div>
        <div className="input-container">
          <h1 className="input-heading">Character Counter</h1>
          <form className="search-container" onSubmit={this.onAddUserInput}>
            <input
              type="text"
              placeholder="Enter the Characters here"
              className="input"
              value={searchValue}
              onChange={this.onChangeSearch}
            />
            <button type="submit" className="btn-style">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default App
