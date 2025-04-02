# 🚢 Vessel Carbon Emission & Efficiency Dashboard

This web application provides a detailed operational overview of vessels' carbon emissions and efficiency ratings. It helps shipowners, charterers, and financiers to monitor, assess, and improve the environmental performance of vessels in compliance with global sustainability standards.

---

## 📊 Features

- Displays vessel-wise **Deadweight (DWT)**, **Distance Travelled**, and **Operational Time**
- Shows **CO2 Emission (Tank-2-Wake)** and **CO2e Emission (Well-2-Wake)**
- Displays key performance indicators:
  - **AER** (Annual Efficiency Ratio)
  - **AERe** (Annual Efficiency Ratio including N2O & CH4)
  - **EEOIe** (Energy Efficiency Operational Indicator)
  - **CII Rating** (Carbon Intensity Indicator)
- Visual indicators for vessel performance (`A`, `C`, `E` rating with color codes)
- Compliance check for:
  - Poseidon Principles for Ship Finance (PP-SF)
  - Sea Cargo Charter (SCC)
- Scrollable, paginated vessel data table
- Mobile and desktop responsive

---

## 📝 Abbreviations

| Term        | Description                                                      |
|------------|------------------------------------------------------------------|
| CO2 Emission | Emission from fuel burnt onboard (Tank-2-Wake)                  |
| CO2e Emission | CO2 equivalent emission including GWP of N2O and CH4 (Well-2-Wake) |
| AER        | Annual Efficiency Ratio based on CO2 emission [gCO2/DWTxnm]      |
| AERe      | Annual Efficiency Ratio based on CO2e emission [gCO2e/DWTxnm]    |
| EEOIe      | Energy Efficiency Operational Indicator based on CO2e emission   |
| CII        | Carbon Intensity Indicator                                       |
| PP-SF      | Poseidon Principles for Ship Finance                             |
| SCC        | Sea Cargo Charter                                                |

---

## 🌍 Technology Stack

| Technology | Usage                                  |
|:---------:|:---------------------------------------:|
| React + Vite | Frontend Framework                    |
| Material UI + Tailwind CSS | UI Components and Styling      |
| Redux Toolkit | State Management                    |
| **Mapbox** | Vessel Route Visualization            |
| **Highcharts** | Interactive Data Visualization      |
| REST APIs | Data Source Integration                 |

---

## 🌱 Sustainability Compliance

This dashboard is designed to support shipping companies, financiers, and charters to comply with:

- **Poseidon Principles for Ship Finance**
- **Sea Cargo Charter**
- **IMO 2030 and 2050 Emission Targets**

---

## 📄 License

This project is licensed under the **MIT License**.

---
