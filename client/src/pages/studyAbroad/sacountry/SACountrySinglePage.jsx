import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { countryData } from "../../../utils/studyabroad/countryData";
import SASingleCountryTop from "../../../components/studyAbroad/SACountry/SASingleCountryTop";
import SAsingleCountryOverview from "../../../components/studyAbroad/SACountry/SAsingleCountryOverview";
import SASingleCountryFeatures from "../../../components/studyAbroad/SACountry/SASingleCountryFeatures";

export default function SACountrySinglePage() {
  const { id } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const obj = countryData.find((x) => x.id.toString() === id.toString());
    setCountry(obj);
  }, []);
  return (
    <div>
      <SASingleCountryTop country={country} />
      <SAsingleCountryOverview country={country} />
      <SASingleCountryFeatures country={country} />
    </div>
  );
}
