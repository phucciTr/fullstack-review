import $ from 'jquery';

var searchUser = (term) => {
  $.ajax({
    url: 'http://localhost:1128/repos',
    type: 'POST',
    data: { data: term },
    success: () => console.log(`search for ${term} sucessfully sent to server`),
    error: () => console.log(`search request for ${term} failed`)
  });
};


export default searchUser;