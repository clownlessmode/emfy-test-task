import axios from "axios";

const ACCESS_TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjhjNGQ0YjMzYTI2ZWNlN2M5ZjFkZmExOGFhOTAzYzY3MTgwODM2YTk4MGYwODc1MGQ4YjRhMjkyZDE4NDgwYjFlY2ViMTg0YTk0YmY5MTY2In0.eyJhdWQiOiIyMGM4NDhkMS0yYjAzLTQzMGItYjAxZi1kZGExZDJjZDVmNTIiLCJqdGkiOiI4YzRkNGIzM2EyNmVjZTdjOWYxZGZhMThhYTkwM2M2NzE4MDgzNmE5ODBmMDg3NTBkOGI0YTI5MmQxODQ4MGIxZWNlYjE4NGE5NGJmOTE2NiIsImlhdCI6MTcyNzMyMTA1MCwibmJmIjoxNzI3MzIxMDUwLCJleHAiOjE3Mjc2NTQ0MDAsInN1YiI6IjExNTY5OTM0IiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxOTczMTQyLCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiYTU4NGVlOTctNDE3MS00OWEwLWI2NjQtYjhlZjZhMTY0MDJhIiwiYXBpX2RvbWFpbiI6ImFwaS1iLmFtb2NybS5ydSJ9.qGw8mP1sbKDZOm4JTrWICI-jnEJQOi8kmDnu8B7gMAKOrAH2MfuthjJjnHyurzHZ18fTMizbkvF-jSDWbRDGQlWiH-37Cb-OFMwQQ64dbsi3d894l4CH1UwjT3eraDXcGa3PxDEBzeZ6fAqaPBtRT-lE4wEOpU0QASm4WGh1kcXDTVz6OjrpfyjV8-ybPko9qLtaKJLlCInqwf2ymwXdnwL5m-amJVubJo2OKmSBWxusQ2_J3mr_EbEL3LX4Ln-xQhyisC191FyvakxF1Bxeyxd8XPjWkNcjZgZZjBhilGGTcicCd3EtdzFsNdE5APx8ypNlh30Gd5Gg9oabbWRyIQ";

const apiClient = axios.create({
  baseURL: "https://eclipselucky.amocrm.ru/api/v4/",
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});
export default apiClient;
