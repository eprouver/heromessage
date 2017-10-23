var mockData = {
"messages": [
  {
    "sender_user": 8,
    "text": "Amet voluptate laborum sunt ea magna ut consequat qui nulla adipisicing.",
    "date": "Thu Oct 05 2017 02:31:40 GMT-0500 (CDT)"
  },
  {
    "sender_user": 2,
    "text": "Laborum tempor enim ipsum veniam voluptate enim nulla anim qui Lorem officia laboris quis amet.",
    "date": "Fri Jul 21 2017 10:29:33 GMT-0500 (CDT)"
  },
  {
    "sender_user": 2,
    "text": "Sit ea sunt id et irure nostrud.",
    "date": "Mon Sep 04 2017 11:08:03 GMT-0500 (CDT)"
  },
  {
    "sender_user": 2,
    "text": "Enim culpa quis officia occaecat magna esse nostrud proident irure incididunt.",
    "date": "Thu Jul 27 2017 04:51:34 GMT-0500 (CDT)"
  },
  {
    "sender_user": 8,
    "text": "Non anim pariatur aliquip incididunt sit consequat excepteur irure labore anim sint tempor.",
    "date": "Wed Aug 09 2017 21:04:46 GMT-0500 (CDT)"
  },
  {
    "sender_user": 0,
    "text": "Non ad pariatur ad dolore quis.",
    "date": "Wed Oct 18 2017 23:36:00 GMT-0500 (CDT)"
  },
  {
    "sender_user": 0,
    "text": "Ea enim duis consectetur aliqua amet reprehenderit nulla excepteur culpa laboris nisi reprehenderit voluptate.",
    "date": "Thu Aug 10 2017 01:05:33 GMT-0500 (CDT)"
  },
  {
    "sender_user": 5,
    "text": "Mollit commodo irure deserunt exercitation ex quis sint.",
    "date": "Tue Aug 29 2017 10:20:56 GMT-0500 (CDT)"
  },
  {
    "sender_user": 1,
    "text": "Nostrud velit velit in veniam nostrud consequat ex qui.",
    "date": "Mon Sep 18 2017 17:34:19 GMT-0500 (CDT)"
  },
  {
    "sender_user": 8,
    "text": "Anim tempor dolore tempor et in ut dolor Lorem in in duis.",
    "date": "Mon Aug 28 2017 09:03:37 GMT-0500 (CDT)"
  },
  {
    "sender_user": 1,
    "text": "Tempor veniam nisi nulla cillum esse exercitation et.",
    "date": "Sun Oct 08 2017 23:45:44 GMT-0500 (CDT)"
  },
  {
    "sender_user": 1,
    "text": "Proident sint commodo amet id.",
    "date": "Fri Jul 21 2017 02:57:58 GMT-0500 (CDT)"
  },
  {
    "sender_user": 3,
    "text": "Labore labore occaecat ad ut et elit sunt qui officia cillum enim nisi ex.",
    "date": "Thu Sep 14 2017 08:15:08 GMT-0500 (CDT)"
  },
  {
    "sender_user": 0,
    "text": "Ad nulla esse quis occaecat amet dolor dolore laboris cupidatat sit fugiat dolore aliqua excepteur.",
    "date": "Mon Sep 04 2017 17:26:26 GMT-0500 (CDT)"
  },
  {
    "sender_user": 3,
    "text": "Et aliquip officia esse deserunt adipisicing eu nostrud cillum sint.",
    "date": "Sun Sep 17 2017 12:23:59 GMT-0500 (CDT)"
  },
  {
    "sender_user": 2,
    "text": "Lorem labore ut deserunt deserunt.",
    "date": "Sun Aug 13 2017 05:14:41 GMT-0500 (CDT)"
  },
  {
    "sender_user": 8,
    "text": "Ipsum aliquip aute sit fugiat.",
    "date": "Sat Oct 21 2017 03:32:05 GMT-0500 (CDT)"
  },
  {
    "sender_user": 7,
    "text": "Deserunt laborum adipisicing quis minim nulla enim laborum.",
    "date": "Thu Jul 20 2017 05:45:25 GMT-0500 (CDT)"
  },
  {
    "sender_user": 3,
    "text": "Anim deserunt deserunt do occaecat veniam officia labore fugiat in cillum.",
    "date": "Tue Aug 29 2017 16:39:20 GMT-0500 (CDT)"
  },
  {
    "sender_user": 5,
    "text": "Nisi ea nulla minim sunt dolor magna quis nostrud do Lorem est labore.",
    "date": "Mon Aug 07 2017 22:47:10 GMT-0500 (CDT)"
  }
]
}

const MessagesSource = {
  remoteAction: {
    remote(state) {},
    local(id) {
      return new Promise(function(resolve, reject) {
        // simulate an asynchronous action where data is fetched on
        // a remote server somewhere.
        setTimeout(function() {
          // resolve with some mock data
          resolve(mockData.messages.filter(function(v){
            return v.sender_user == id;
          }));
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

export default MessagesSource;
