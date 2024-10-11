import React, { useState } from "react";
import { Table, Button, Input, Row, Col, Spin } from "antd";
import axios from "axios";
import "./App.css";
import { DeleteFilled } from "@ant-design/icons";

const cityList = ["London", "New York", "Los Angeles", "Las Vegas"];

const App = () => {
  const [cityData, setCityData] = useState([]);
  const [currentCity, setCurrentCity] = useState(null);
  const [weatherDetails, setWeatherDetails] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]); // State for filtered data
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (city) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://python3-dot-parul-arena-2.appspot.com/test?cityname=${city}`
      );
      const data = response?.data;
      const currentTime = new Date();
      const dataAge = Math.floor(
        (currentTime - new Date(data["date_and_time"])) / (1000 * 60 * 60)
      );

      const newData = {
        city,
        description: data.description,
        temp: data.temp_in_celsius,
        pressure: data.pressure_in_hPa,
        age: Number(dataAge),
      };
      setWeatherDetails((prevData) => [...prevData, newData]);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleGetWeather = () => {
    cityList.forEach((city, index) => {
      setTimeout(() => {
        setCurrentCity(city);
        fetchWeather(city);
      }, index * 1000);
    });
  };

  const handleCityClick = (city) => {
    setCurrentCity(city);
    fetchWeather(city);
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
    if (value) {
      const filtered = weatherDetails.filter((item) =>
        item.city.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(weatherDetails);
    }
  };

  const cityColumns = [
    {
      title: "City",
      dataIndex: "city",
      render: (text, record) => (
        <Button
          type="link"
          onClick={() => handleCityClick(record.city)}
          style={
            record.city === currentCity ? { border: "2px solid green" } : {}
          }
        >
          {text}
        </Button>
      ),
    },
  ];

  const detailsColumns = [
    { title: "City", dataIndex: "city" },
    {
      title: "Description",
      dataIndex: "description",
      render: (text, record) => (
        <Input
          defaultValue={text}
          onChange={(e) => {
            const updatedDetails = weatherDetails.map((item) =>
              item.city === record.city
                ? { ...item, description: e.target.value }
                : item
            );
            setWeatherDetails(updatedDetails);
          }}
        />
      ),
    },
    { title: "Temperature (°C)", dataIndex: "temp" },
    { title: "Pressure (hPa)", dataIndex: "pressure" },
    { title: "Data age (hrs)", dataIndex: "age" },
    {
      title: "Delete",
      render: (_, record) => (
        <DeleteFilled
          style={{ color: "red" }}
          onClick={() => {
            const filteredData = weatherDetails.filter(
              (item) => item.city !== record.city
            );
            setWeatherDetails(filteredData);
          }}
        />
      ),
    },
  ];

  return (
    <div className="weather-app">
      <h2>Rahul's Weather App</h2>
      <Row>
        <Col span={6}>
          <Button
            style={{
              backgroundColor: "#4472C4",
              color: "#fff",
              marginBottom: "10px",
            }}
            onClick={handleGetWeather}
          >
            Get Weather
          </Button>
          <Table
            columns={cityColumns}
            dataSource={cityList.map((city) => ({ key: city, city }))}
            pagination={false}
            rowKey="city"
            bordered
          />
        </Col>
        <Col span={18}>
          <div style={{ display: "flex", justifyContent: "right" }}>
            <Input.Search
              placeholder="City Name"
              enterButton="Search"
              onSearch={handleSearch}
              style={{ width: "40%", marginBottom: "10px" }}
            />
          </div>
          {loading ? (
            <div
              style={{
                textAlign: "center",
                marginTop: "50px",
              }}
            >
              <Spin size="large" />
            </div>
          ) : (
            <Table
              columns={detailsColumns}
              dataSource={searchTerm ? filteredData : weatherDetails} // Use filtered data when searching
              pagination={false}
              rowKey="city"
              bordered
              locale={{ emptyText: "No Data" }}
            />
          )}
        </Col>
      </Row>
    </div>
  );
};

export default App;
