import './index.css'

const CountriesList = props => {
  const {countryDetails, onClickVisit} = props
  const {id, name, isVisited} = countryDetails

  const onClickBtn = () => {
    onClickVisit(id)
  }

  return (
    <li className="countries-list-item">
      <div className="countries-details">
        <p className="country-name">{name}</p>

        {isVisited ? (
          <p className="visited-text">Visited</p>
        ) : (
          <button type="button" className="btn-style" onClick={onClickBtn}>
            Visit
          </button>
        )}
      </div>
      <hr className="hr-line" />
    </li>
  )
}

export default CountriesList
