import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props

    return (
      <div className="main-container">
        <h1 className="faq-heading">FAQS</h1>
        <ul>
          {faqsList.map(eachQues => (
            <FaqItem
              key={eachQues.id}
              eachQues={eachQues}
              buttonClick={this.buttonClick}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Faqs
