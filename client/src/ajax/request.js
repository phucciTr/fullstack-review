import $ from 'jquery';

var request = {

  searchUser: (name, cb) => {
    $.ajax({
      url: '/repos',
      type: 'POST',
      data: { data: name },
      success: cb.bind(this, name),
      error: () => console.log(`search request for ${name} failed`)
    });
  },

  getTop25: (successCb) => {
    $.ajax({
      url: '/repos',
      type: 'GET',
      success: successCb,
      error: () => console.log('failed to get repos')
    });
  }
};


export default request;