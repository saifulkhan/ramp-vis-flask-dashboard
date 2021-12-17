export const AdminUnitsHierarchy = {}

AdminUnitsHierarchy.hierarchy = JSON.parse(hierarchyJson)

AdminUnitsHierarchy.getChildren = function(adminUnitName){
   var results = hierarchy.find(
      function(e){
         return e.name == adminUnitName
      }
   )
   console.log('results', results)
} 

var hierarchyJson = {
   "name":"UK",
   "type":"toplevel",
   "children":[
      {
         "name":"England",
         "type":"nation",
         "children":[
            
         ]
      },
      {
         "name":"Scotland",
         "type":"nation",
         "children":[
            {
               "type":"nhsregion_scotland",
               "children":[
                  {
                     "type":"council_scotland",
                     "children":[
                        
                     ],
                     "name":"East_Ayrshire"
                  },
                  {
                     "type":"council_scotland",
                     "children":[
                        
                     ],
                     "name":"North_Ayrshire"
                  },
                  {
                     "type":"council_scotland",
                     "children":[
                        
                     ],
                     "name":"South_Ayrshire"
                  }
               ],
               "name":"ayrshire_and_arran"
            },
            {
               "type":"nhsregion_scotland",
               "children":[
                  {
                     "type":"council_scotland",
                     "children":[
                        
                     ],
                     "name":"Scottish_Borders"
                  }
               ],
               "name":"borders"
            },
            {
               "type":"nhsregion_scotland",
               "children":[
                  {
                     "type":"council_scotland",
                     "children":[
                        
                     ],
                     "name":"Dumfries_and_Galloway"
                  }
               ],
               "name":"dumfries_and_galloway"
            },
            {
               "type":"nhsregion_scotland",
               "children":[
                  {
                     "type":"council_scotland",
                     "children":[
                        
                     ],
                     "name":"Fife"
                  }
               ],
               "name":"fife"
            },
            {
               "type":"nhsregion_scotland",
               "children":[
                  {
                     "type":"council_scotland",
                     "children":[
                        
                     ],
                     "name":"Clackmannanshire"
                  },
                  {
                     "type":"council_scotland",
                     "children":[
                        
                     ],
                     "name":"Falkirk"
                  },
                  {
                     "type":"council_scotland",
                     "children":[
                        
                     ],
                     "name":"Stirling"
                  }
               ],
               "name":"forth_valley"
            },
            {
               "type":"nhsregion_scotland",
               "children":[
                  {
                     "type":"council_scotland",
                     "children":[
                        
                     ],
                     "name":"Aberdeen_city"
                  },
                  {
                     "type":"council_scotland",
                     "children":[
                        
                     ],
                     "name":"Aberdeenshire"
                  },
                  {
                     "type":"council_scotland",
                     "children":[
                        
                     ],
                     "name":"Moray"
                  }
               ],
               "name":"grampian"
            },
            {
               "type":"nhsregion_scotland",
               "children":[
                  {
                     "type":"council_scotland",
                     "children":[
                        
                     ],
                     "name":"City_of_Glasgow"
                  },
                  {
                     "type":"council_scotland",
                     "children":[
                        
                     ],
                     "name":"East_Dunbartonshire"
                  },
                  {
                     "type":"council_scotland",
                     "children":[
                        
                     ],
                     "name":"East_Renfrewshire"
                  },
                  {
                     "type":"council_scotland",
                     "children":[
                        
                     ],
                     "name":"Inverclyde"
                  },
                  {
                     "type":"council_scotland",
                     "children":[
                        
                     ],
                     "name":"Renfrewshire"
                  },
                  {
                     "type":"council_scotland",
                     "children":[
                        
                     ],
                     "name":"West_Dunbartonshire"
                  },
                  {
                     "type":"council_scotland",
                     "children":[
                        
                     ],
                     "name":"North_Lanarkshire"
                  },
                  {
                     "type":"council_scotland",
                     "children":[
                        
                     ],
                     "name":"South_Lanarkshire "
                  }
               ],
               "name":"greater_glasgow_and_clyde"
            },
            {
               "type":"nhsregion_scotland",
               "children":[
                  {
                     "type":"council_scotland",
                     "children":[
                        
                     ],
                     "name":"Argyll_and_Bute"
                  },
                  {
                     "type":"council_scotland",
                     "children":[
                        
                     ],
                     "name":"Highland"
                  }
               ],
               "name":"highland"
            },
            {
               "type":"nhsregion_scotland",
               "children":[
                  {
                     "type":"council_scotland",
                     "children":[
                        
                     ],
                     "name":"North_Lanarkshire"
                  },
                  {
                     "type":"council_scotland",
                     "children":[
                        
                     ],
                     "name":"South_Lanarkshire"
                  }
               ],
               "name":"lanarkshire"
            },
            {
               "type":"nhsregion_scotland",
               "children":[
                  {
                     "type":"council_scotland",
                     "children":[
                        
                     ],
                     "name":"East_Lothian"
                  },
                  {
                     "type":"council_scotland",
                     "children":[
                        
                     ],
                     "name":"Edinburgh"
                  },
                  {
                     "type":"council_scotland",
                     "children":[
                        
                     ],
                     "name":"Midlothian"
                  },
                  {
                     "type":"council_scotland",
                     "children":[
                        
                     ],
                     "name":"West_Lothian"
                  }
               ],
               "name":"lothian"
            },
            {
               "type":"nhsregion_scotland",
               "children":[
                  {
                     "type":"council_scotland",
                     "children":[
                        
                     ],
                     "name":"Orkney"
                  }
               ],
               "name":"orkney"
            },
            {
               "type":"nhsregion_scotland",
               "children":[
                  {
                     "type":"council_scotland",
                     "children":[
                        
                     ],
                     "name":"Shetland"
                  }
               ],
               "name":"shetland"
            },
            {
               "type":"nhsregion_scotland",
               "children":[
                  {
                     "type":"council_scotland",
                     "children":[
                        
                     ],
                     "name":"Angus"
                  },
                  {
                     "type":"council_scotland",
                     "children":[
                        
                     ],
                     "name":"Dundee"
                  },
                  {
                     "type":"council_scotland",
                     "children":[
                        
                     ],
                     "name":"Perth_and_Kinross"
                  }
               ],
               "name":"tayside"
            },
            {
               "type":"nhsregion_scotland",
               "children":[
                  {
                     "type":"council_scotland",
                     "children":[
                        
                     ],
                     "name":"Outer_Hebrides"
                  }
               ],
               "name":"western_isles"
            }
         ]
      },
      {
         "name":"Northern Ireland",
         "type":"nation",
         "children":[
            
         ]
      },
      {
         "name":"Wales",
         "type":"nation",
         "children":[
            
         ]
      }
   ]
}

