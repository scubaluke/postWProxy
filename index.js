var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"AFID":"465368","SID":"","ADID":"0","ClickID":"","AffiliateReferenceID":"","IPAddress":"66.75.119.145","first_name":"test","last_name":"smith","address":"123 test rd","city":"kihei","state":"HI","zip_code":"96753","email_address":"luke@championleads.co","phone_home":"8082987120","phone_work":"","phone_cell":"","best_time":"M","country":"US","opt_in":"1","SR_TOKEN":"uasdfasdfaisdfasdf","TCPA_LANGUAGE":"PUT_TCPA_LANGUAGE_HERE","PRODUCT":"PP_REFI","EST_VAL":"555555","BAL_ONE":"112","LOAN_TYPE":"1","PROP_DESC":"1","VA_STATUS":"1","CRED_GRADE":"1","FHA_BANK_FORECLOSURE":"1","BANKRUPTCY":"1","NUM_MORTGAGE_LATES":"NONE","ANNUAL_VERIFIABLE_INCOME":"YES","SR_URL":"222","ADD_CASH":"333","BUY_TIMEFRAME":"immediately","SPEC_HOME":"2","PROP_ZIP":"55441","DOWN_PMT":"122","PROP_ST":"MN","time_zone":"1","dob":"12-12-1988","employment_type":"1","income_amount":"100000","interest_rate_one":"3","interest_rate_two":"1","bal_two":"1334"});

var requestOptions = {
  method: 'POST',
//   mode: 'no-cors',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};
const proxy = 'http://localhost:8080/'
const url = "https://chlend.linktrustleadgen.com/Lead/432598/SimplePost?";
fetch(`${proxy}${url}`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));