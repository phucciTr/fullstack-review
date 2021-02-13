import $ from 'jquery';

var request = {

  searchUser: (name) => {
    $.ajax({
      url: 'http://localhost:1128/repos',
      type: 'POST',
      data: { data: name },
      success: () => console.log(`search for ${name} sucessfully sent to server`),
      error: () => console.log(`search request for ${name} failed`)
    });
  },

  getTop25: (successCb) => {
    $.ajax({
      url: 'http://localhost:1128/repos',
      type: 'GET',
      success: successCb,
      error: () => console.log('failed to get repos')
    });
  }
};



// var searchUser = (term) => {
//   $.ajax({
//     url: 'http://localhost:1128/repos',
//     type: 'POST',
//     data: { data: term },
//     success: () => console.log(`search for ${term} sucessfully sent to server`),
//     error: () => console.log(`search request for ${term} failed`)
//   });
// };


export default request;