import "./overviewCards.scss";
import { images } from "../../constants/images";
const OverviewCards = () => {
  return (
    <div className="row mb-5">
      <div className="col-12 col-md-6 col-xl-3">
        <div className="card-contents mb-3">
          <div className="card-content">
            <p className="card-title">daily transaction volumn</p>
            <p className="card-amount">2000</p>
          </div>
          <div className="card-trend">
            <img src={images.chart} alt="Card Trend" className="trend-img" />
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 col-xl-3">
        <div className="card-contents mb-3">
          <div className="card-content">
            <p className="card-title">daily transaction value</p>
            <p className="card-amount">&#8358; 4,000,000</p>
          </div>
          <div className="card-trend">
            <img src={images.chart} alt="Card Trend" className="trend-img" />
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 col-xl-3">
        <div className="card-contents mb-3">
          <div className="card-content">
            <p className="card-title">total transaction volumn</p>
            <p className="card-amount">452,000</p>
          </div>
          <div className="card-trend">
            <img src={images.chart} alt="Card Trend" className="trend-img" />
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 col-xl-3">
        <div className="card-contents mb-3">
          <div className="card-content">
            <p className="card-title">total transaction value</p>
            <p className="card-amount">&#8358; 4,000,000</p>
          </div>
          <div className="card-trend">
            <img src={images.chart} alt="Card Trend" className="trend-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewCards;
