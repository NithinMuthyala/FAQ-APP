import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isActive: false}

  onToggleButton = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  getAnswer = () => {
    const {eachQues} = this.props
    const {answerText} = eachQues
    const {isActive} = this.state

    if (isActive) {
      return (
        <div>
          <hr />
          <p className="answer-text">{answerText}</p>
        </div>
      )
    }
    return null
  }

  render() {
    const {isActive} = this.state
    const {eachQues} = this.props
    const {questionText} = eachQues
    console.log(isActive)
    const image = isActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png '

    const altText = isActive ? 'minus' : 'plus'
    console.log(altText)
    return (
      <li className="list">
        <div className="listItem">
          <h1 className="question-tag">{questionText}</h1>
          <button type="button" onClick={this.onToggleButton}>
            <img src={image} alt={altText} />
          </button>
        </div>
        {this.getAnswer()}
      </li>
    )
  }
}

export default FaqItem
