var mockData = {
  'users': [
  {
    "_id": 0,
    "picture": "http://placehold.it/32x32",
    "total": 3,
    "name": "Katelyn Burris",
    "lastMessage": "Wed Oct 18 2017 23:36:00 GMT-0500 (CDT)"
  },
  {
    "_id": 1,
    "picture": "http://placehold.it/32x32",
    "total": 3,
    "name": "Tabatha Mckinney",
    "lastMessage": "Mon Sep 18 2017 17:34:19 GMT-0500 (CDT)"
  },
  {
    "_id": 2,
    "picture": "http://placehold.it/32x32",
    "total": 4,
    "name": "Deirdre Stuart",
    "lastMessage": "Fri Jul 21 2017 10:29:33 GMT-0500 (CDT)"
  },
  {
    "_id": 3,
    "picture": "http://placehold.it/32x32",
    "total": 3,
    "name": "Gale Ramsey",
    "lastMessage": "Thu Sep 14 2017 08:15:08 GMT-0500 (CDT)"
  },
  {
    "_id": 4,
    "picture": "http://placehold.it/32x32",
    "total": 0,
    "name": "Selena Hodge",
    "lastMessage": ""
  },
  {
    "_id": 5,
    "picture": "http://placehold.it/32x32",
    "total": 2,
    "name": "Nita Anderson",
    "lastMessage": "Tue Aug 29 2017 10:20:56 GMT-0500 (CDT)"
  },
  {
    "_id": 6,
    "picture": "http://placehold.it/32x32",
    "total": 0,
    "name": "Mclaughlin Harrell",
    "lastMessage": ""
  },
  {
    "_id": 7,
    "picture": "http://placehold.it/32x32",
    "total": 1,
    "name": "Dudley Cross",
    "lastMessage": "Thu Jul 20 2017 05:45:25 GMT-0500 (CDT)"
  },
  {
    "_id": 8,
    "picture": "http://placehold.it/32x32",
    "total": 4,
    "name": "Stanton Schneider",
    "lastMessage": "Thu Oct 05 2017 02:31:40 GMT-0500 (CDT)"
  },
  {
    "_id": 9,
    "picture": "http://placehold.it/32x32",
    "total": 0,
    "name": "Madeline Bailey",
    "lastMessage": ""
  }
]
};

const ContactsSource = {
  remoteAction: {
    remote(state) {},
    local(state) {
      return new Promise(function(resolve, reject) {
        // simulate an asynchronous action where data is fetched on
        // a remote server somewhere.
        setTimeout(function() {
          // resolve with some mock data
          resolve(mockData);
        }, 250);
      });
    },
    shouldFetch(state) {
      return true;
    },
    loading() {},
    success() {},
    error() {}
  }
};

export default ContactsSource;
