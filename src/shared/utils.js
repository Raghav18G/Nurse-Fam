import axios from "axios";

// export const getFormattedDate = (date) => {
//   return new Date(date).toDateString();
// };

export const getFormattedDate = (date) => {
  date = new Date(date);
  return `${date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}-${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}-${date.getFullYear()}`;
};

export const getFormattedTime = (date) => {
  return new Date(date).toLocaleTimeString();
};

export const getCommonColDef = () => {
  return {
    width: 200,
    align: "center",
    headerAlign: "center"
  };
};

export const getDurationInDays = ({ startDate, endDate }) => {
  const durationInMS = new Date(endDate).getTime() - new Date(startDate).getTime();
  const durationInDays = durationInMS / 1000 / 60 / 60 / 24;
  return durationInDays;
};

export const cancellableRequest = (callback) => {
  let cancelToken;
  return (payload) => {
    if (typeof cancelToken !== typeof undefined) {
      cancelToken.cancel("Operation canceled due to new request.");
    }
    cancelToken = axios.CancelToken.source();
    return callback(payload, cancelToken);
  };
};
