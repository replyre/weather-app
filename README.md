## Weather App

### Overview

This is a weather application built with React and Ant Design that displays weather details of different cities. The application fetches weather information from an API and allows the user to interact with the data in several ways, such as retrieving weather data for predefined cities, searching for city weather data, and clicking on individual cities to fetch their weather data.
![image](https://github.com/user-attachments/assets/e26d1770-5b07-43fe-942c-66b68546d1d1)

### Features

- **Get Weather**: Fetches weather data for a predefined list of cities.
- **Search**: Allows searching for a specific city and fetching its weather data.
- **City Click**: Clicking on a city in the left-side table fetches and displays its weather details.
- **Loader**: Displays a loading spinner when data is being fetched from the API.
- **Editable Description**: The description field in the weather details table is editable by the user.
- **Delete Row**: Removes the weather data row from the table.

### Technologies Used

- **React**: Frontend framework for building the UI.
- **Ant Design**: Component library for React providing UI elements.
- **Axios**: Library used for making HTTP requests to the weather API.
- **CSS**: Custom styling to apply the layout and color scheme.

### Prerequisites

Before running the application, ensure you have the following installed:

- **Node.js** (>=14.x)
- **npm** (>=6.x)

### Getting Started

Follow these steps to get the application running locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/weather-app-2.git
   cd weather-app-2
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`. You should see the weather app running.

### How to Use

1. **Get Weather**:
   - Click the **Get Weather** button to fetch weather data for the predefined cities (London, New York, Los Angeles, Las Vegas).
   - The first city will be highlighted, and its data will be displayed in the weather details table.

2. **Search**:
   - Type a city name into the search bar and click the **Search** button.
   - If the city is valid, weather data will be fetched from the API and displayed in the table.

3. **City Click**:
   - Click on any city in the **City List** on the left.
   - Weather data for the selected city will be fetched and added to the weather details table.

4. **Edit Description**:
   - The **Description** field in the weather details table is editable. You can type in a custom description for each city.

5. **Delete Row**:
   - Click the **Delete** link on any row to remove that city’s weather data from the table.

### API Used

The application uses the following API to fetch weather data:

```
https://python3-dot-parul-arena-2.appspot.com/test?cityname=<city name>
```

For example, to fetch the weather data for London, the app sends a GET request to:

```
https://python3-dot-parul-arena-2.appspot.com/test?cityname=London
```

