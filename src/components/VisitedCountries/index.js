import './index.css'

const VisitedCountries = props => {
  const {countryDetails, onClickRemove} = props
  const {id, name, imageUrl} = countryDetails

  const onClickBtn = () => {
    onClickRemove(id)
  }

  return (
    <li className="country-list-item">
      <img src={imageUrl} alt="thumbnail" className="thumbnail" />
      <div className="visited-country-details">
        <p className="visited-country-name">{name}</p>
        <button type="button" className="remove-btn" onClick={onClickBtn}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountries
