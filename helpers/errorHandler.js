// Error list
const Error = {};

// Error function for system errors
Error.systemError = (res, err) => {
  res.status(500).json({
    code: 10,
    msg: 'The system has encountered an error.'
  });
};

// Error function for invalid syntax of request body
Error.badRequest = (res, err) => {
  res.status(400).json({
    code: 11,
    msg: 'Request body syntax is wrong.'
  });
};

// Error function for invalid endpoint requests
Error.notFound = res => {
  res.status(404).json({
    code: 12,
    msg: 'Endpoint is wrong.'
  });
};

// Error function for missing request parameters
Error.parametersMissing = res => {
  res.status(400).json({
    code: 13,
    msg: 'One or more parameters are missing. Please provide "startDate", "endDate", "minCount", "maxCount" parameters.'
  });
};

// Error function for invalid request parameters
Error.parametersWrong = res => {
  res.status(400).json({
    code: 14,
    msg:
      'Parameters must be startDate as the Date type (YYYY-MM-DD), endDate as the Date type (YYYY-MM-DD), minCount as the number type (e.g. 2200) and maxCount as the number type (e.g. 3000).'
  });
};

module.exports = Error;
