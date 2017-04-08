var callsByTime = {
  "dec2016":
[['Midnight to 6am', 33],
['6am to 12pm', 143],
['12pm to 6pm', 64],
['6pm to midnight', 32]],
  "jan2017":
  [['Midnight to 6am', 0],
  ['6am to 12pm', 32],
  ['12pm to 6pm', 37],
  ['6pm to midnight', 19]],
  "feb2017":
  [['Midnight to 6am', 1],
  ['6am to 12pm', 10],
  ['12pm to 6pm', 21],
  ['6pm to midnight',3]],
  "mar2017":
  [['Midnight to 6am', 12],
  ['6am to 12pm', 11],
  ['12pm to 6pm', 18],
  ['6pm to midnight',7]]
};

var callsByDay = {
  "dec2016":
    [['Mon', 31],
    ['Tues', 9],
    ['Wed', 24],
    ['Thurs', 109],
    ['Fri',45],
    ['Sat', 25],
    ['Sun', 29]],
    "jan2017":
      [['Mon', 18],
      ['Tues', 5],
      ['Wed', 12],
      ['Thurs', 6],
      ['Fri',21],
      ['Sat', 11],
      ['Sun', 15]],
      "feb2017":
        [['Mon', 9],
        ['Tues', 3],
        ['Wed', 7],
        ['Thurs', 4],
        ['Fri',4],
        ['Sat', 5],
        ['Sun', 3]],
      "mar2017":
        [['Mon', 4],
        ['Tues', 3],
        ['Wed', 9],
        ['Thurs', 8],
        ['Fri',7],
        ['Sat', 4],
        ['Sun', 3]]
}

var helpNeeded = {
  "dec2016":
    [['I have been raped', 79],
    ['Help someone who has been raped', 49],
    ['I have been beaten/abused', 99],
    ['Help a beaten/abused person', 45]],
    "jan2017":
      [['I have been raped',17],
      ['Help someone who has been raped', 13],
      ['I have been beaten/abused', 18],
      ['Help a beaten/abused person', 34]],
      "feb2017":
        [['I have been raped', 7],
        ['Help someone who has been raped', 1],
        ['I have been beaten/abused', 9],
        ['Help a beaten/abused person', 18]],
        "mar2017":
          [['I have been raped', 7],
          ['Help someone who has been raped', 6],
          ['I have been beaten/abused', 12],
          ['Help a beaten/abused person', 13]]
}

// var totalCalls = {
//   "dec2016": 272,
//   "jan2017": 88,
//   "feb2017": 30
// }

var totalCalls = {
  "dec2016":
    [["total", 272],
    ["completed", 272]],
  "jan2017":
    [["total", 197,
      "completed", 88]],
  "feb2017":
    [["total", 134,
      "completed", 35]],
  "mar2017":
    [["total", 00,
      "completed", 38]]
}


var callsByDate = {
  "dec2016":
  [
["2016-12-02",28  ],
["2016-12-03",10  ],
["2016-12-04",4  ],
["2016-12-05",14  ],
["2016-12-06",2  ],
["2016-12-07",3  ],
["2016-12-08",7  ],
["2016-12-09",7  ],
["2016-12-10",6  ],
["2016-12-11",12  ],
["2016-12-12",9  ],
["2016-12-14",9  ],
["2016-12-15",19  ],
["2016-12-16",4  ],
["2016-12-17",7  ],
["2016-12-18",11  ],
["2016-12-19",5  ],
["2016-12-20",6  ],
["2016-12-21",9  ],
["2016-12-22",2  ],
["2016-12-23",4  ],
["2016-12-24",1  ],
["2016-12-25",2  ],
["2016-12-26",3  ],
["2016-12-27",1  ],
["2016-12-28",3  ],
["2016-12-29",3  ],
["2016-12-30",2  ],
["2016-12-31",1  ]
],

"jan2017":
[
  ["2017-01-02",7  ],
  ["2017-01-03",1  ],
  ["2017-01-04",3  ],
  ["2017-01-05",4  ],
  ["2017-01-06",10  ],
  ["2017-01-07",3  ],
  ["2017-01-08",1  ],
  ["2017-01-09",2  ],
  ["2017-01-10",1  ],
  ["2017-01-11",4  ],
  ["2017-01-12",2  ],
  ["2017-01-13",2  ],
  ["2017-01-14",1  ],
  ["2017-01-15",6  ],
  ["2017-01-16",7  ],
  ["2017-01-17",1  ],
  ["2017-01-18",5  ],
  ["2017-01-20",7  ],
  ["2017-01-21",1  ],
  ["2017-01-22",4  ],
  ["2017-01-23",1  ],
  ["2017-01-24",1  ],
  ["2017-01-27",2  ],
  ["2017-01-28",6  ],
  ["2017-01-29",2  ],
  ["2017-01-30",1  ],
  ["2017-01-31",1  ]
],

"feb2017":
[
  ["01/02/2017",4  ],
  ["03/02/2017",1  ],
  ["04/02/2017",3  ],
  ["05/02/2017",2  ],
  ["07/02/2017",1  ],
  ["09/02/2017",3  ],
  ["11/02/2017",2  ],
  ["13/02/2017",4  ],
  ["15/02/2017",2  ],
  ["16/02/2017",1  ],
  ["17/02/2017",1  ],
  ["20/02/2017",2  ],
  ["21/02/2017",1  ],
  ["22/02/2017",1  ],
  ["24/02/2017",2  ],
  ["26/02/2017",1  ],
  ["27/02/2017",3  ],
  ["28/02/2017",1  ]
],

"mar2017":
[
  ["01/03/2017",1  ],
  ["02/03/2017",4  ],
  ["03/03/2017",4  ],
  ["04/03/2017",3  ],
  ["05/03/2017",1  ],
  ["06/03/2017",1  ],
  ["08/03/2017",5  ],
  ["09/03/2017",2  ],
  ["12/03/2017",1  ],
  ["13/03/2017",1  ],
  ["14/03/2017",1  ],
  ["16/03/2017",2  ],
  ["17/03/2017",1  ],
  ["19/03/2017",1  ],
  ["20/03/2017",1  ],
  ["21/03/2017",1  ],
  ["22/03/2017",1  ],
  ["24/03/2017",2  ],
  ["25/03/2017",1  ],
  ["27/03/2017",1  ],
  ["28/03/2017",1  ],
  ["29/03/2017",2  ]
]
    }
