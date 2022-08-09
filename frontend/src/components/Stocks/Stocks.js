import { useState, useEffect, useRef } from "react";
import Company from "../Company";
import companiesService from "../../services/companies";
import { Search } from "../Search";
import DatePicker from "../DatePicker";
import Chart from "../Chart";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";

const Stocks = () => {
  const [companies, setCompanies] = useState([]);
  const [candleData, setCandleData] = useState([]);
  const [visibleCompany, setVisibleCompany] = useState(false);
  const [visibleChart, setVisibleChart] = useState(false);
  const [visibleSpinner, setVisibleSpinner] = useState(false);
  const [visibleAlert, setVisibleAlert] = useState(false);
  const [alert, setAlert] = useState("");
  const [chartInfo, setChartInfo] = useState({});
  const refStartDate = useRef(new Date());
  const refEndDate = useRef(new Date());
  const refSearchValue = useRef("");

  useEffect(() => {
    if (!visibleCompany) {
      setVisibleChart(false);
    }
  }, [visibleCompany]);

  const handleSearch = async (event) => {
    event.preventDefault();
    setVisibleAlert(false);
    setVisibleSpinner(true);
    setVisibleChart(false);

    if (refSearchValue.current.length) {
      const searchLog = {
        searched_for: refSearchValue.current,
      };

      const response = await companiesService.getOne(searchLog);

      if (response.name) {
        setVisibleAlert(false);
        setVisibleCompany(true);
        setCompanies(response);
      } else {
        setVisibleCompany(false);
        setAlert(`Company with symbol "${refSearchValue.current}" not found`);
        setVisibleAlert(true);
      }
    } else {
      setVisibleCompany(false);
      setAlert("Please enter company symbol");
      setVisibleAlert(true);
    }
    setVisibleSpinner(false);
  };

  const handleCandle = async (event) => {
    event.preventDefault();
    const info = {
      name: companies.name,
      from_date: refStartDate.current,
      end_date: refEndDate.current,
      currency: companies.currency,
    };
    const searchObject = {
      ticker: companies.ticker,
      sDate: refStartDate.current.getTime(),
      eDate: refEndDate.current.getTime(),
    };

    if (JSON.stringify(info) !== JSON.stringify(chartInfo)) {
      setVisibleSpinner(true);
      setVisibleChart(false);
      const response = await companiesService.getCandle(searchObject);
      setVisibleSpinner(false);
      setChartInfo(info);

      if (response.t) {
        setCandleData(response);
        setVisibleChart(true);
      } else {
        setVisibleChart(false);
      }
    } else setVisibleChart(true);
  };
  return (
    <div className="Stocks">
      <Search handleSearch={handleSearch} refSearchValue={refSearchValue} />
      <DatePicker refStartDate={refStartDate} refEndDate={refEndDate} />
      {visibleAlert && (
        <Alert variant="secondary" style={{ width: "auto" }}>
          {alert}
        </Alert>
      )}
      {visibleSpinner && <Spinner animation="border" />}
      {visibleChart && <Chart candleData={candleData} chartInfo={chartInfo} />}
      {visibleCompany && (
        <div className="cards">
          <Company company={companies} handleCandle={handleCandle} />
          {/* if api would return array of companies */}
          {/* {array.map((company, id) => (
            <Company key={id} company={company} handleCandle={handleCandle} />
          ))} */}
        </div>
      )}
    </div>
  );
};
export default Stocks;
