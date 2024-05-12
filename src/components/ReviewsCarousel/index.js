import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    currentItemIndex: 0,
  }

  handleRightArrowClick = () => {
    const {currentItemIndex} = this.state
    const {reviewsList} = this.props
    const nextItemIndex =
      currentItemIndex === reviewsList.length - 1 ? 0 : currentItemIndex + 1
    this.setState({currentItemIndex: nextItemIndex})
  }

  handleLeftArrowClick = () => {
    const {currentItemIndex} = this.state
    const nextItemIndex = currentItemIndex === 0 ? 0 : currentItemIndex - 1
    this.setState({currentItemIndex: nextItemIndex})
  }

  render() {
    const {currentItemIndex} = this.state
    const {reviewsList} = this.props
    const currentItem = reviewsList[currentItemIndex]

    return (
      <div className="appContainer">
        <h1 className="heading">Reviews</h1>
        <img
          src={currentItem.imgUrl}
          className="image"
          alt={currentItem.username}
        />
        <div className="arrowsAndNameAndCompanyContainer">
          <button
            className="arrowStyle"
            type="button"
            onClick={this.handleLeftArrowClick}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="nameAndCompany">
            <p className="name">{currentItem.username}</p>
            <p className="Company">{currentItem.companyName}</p>
          </div>
          <button
            className="arrowStyle"
            type="button"
            onClick={this.handleRightArrowClick}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
        <p className="review">{currentItem.description}</p>
      </div>
    )
  }
}

export default ReviewsCarousel
