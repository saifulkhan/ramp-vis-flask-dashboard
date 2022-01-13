/* eslint-disable arrow-body-style */
/* eslint-disable object-shorthand */
/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable operator-assignment */
/* eslint-disable no-else-return */
/* eslint-disable radix */
/* eslint-disable no-eval */
/* eslint-disable block-scoped-var */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-undef */
/* eslint-disable prefer-destructuring */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
/* eslint-disable spaced-comment */
/* eslint-disable one-var */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable prefer-const */
/* eslint-disable func-names */
/* eslint-disable prefer-template */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable prefer-spread */
/* eslint-disable @typescript-eslint/lines-between-class-members */
/* eslint-disable @typescript-eslint/no-unused-vars */
// import { height } from "@mui/system";
import * as d3 from "d3";
import moment from "moment";
// import "./css/dashboard.css";
// import "./css/default-dashboard.css";
// import "./css/common.css";

/* 
Namespace for dashboard functions 
author: Benjamin Bach, bbach@ed.ac.uk
*/
export const dashboard = {};
export const dashboardComponents = {}



var FONT_SIZE_BIG = 27;
var FONT_SIZE_MEDIUM = 20
var FONT_SIZE_LABELS = 10
var BASELINE_WIDGET_TITLE = 10;
var BASELINE_LARGE_NUMBER = BASELINE_WIDGET_TITLE + 17;
var BASELINE_LABELS = BASELINE_LARGE_NUMBER + FONT_SIZE_BIG-10;
var LINE_1 = 12;
var LINE_2 = LINE_1 + 17;

var COLOR_LABELS = '#ccc'

dashboard.LINE_HIGHT = 20;
let LINE_HIGHT = 20;

dashboard.DETAIL_HIGH = "high";
dashboard.DETAIL_LOW = "low";
dashboard.DETAIL_MEDIUM = "medium";

dashboard.LAYOUT_HORIZONTAL = "horizontal";
dashboard.LAYOUT_VERTICAL = "vertical";
dashboard.LAYOUT_COMPACT = "compact";

dashboard.VIS_LINECHART = "linechart";
dashboard.VIS_CARTOGRAM = "cartogram";
dashboard.VIS_BARCHART = "barchart";
dashboard.VIS_PROGRESS = "progress";

dashboard.TIMEUNIT_SECOND = 'second';
dashboard.TIMEUNIT_MINUTE = 'minute';
dashboard.TIMEUNIT_HOUR = 'hour';
dashboard.TIMEUNIT_DAY = 'day';
dashboard.TIMEUNIT_WEEK = 'week';
dashboard.TIMEUNIT_MONTH = 'month';
dashboard.TIMEUNIT_YEAR = 'year';

var WIDTH_HIGH = 400;
var HIGHT_HIGH = 250;

var WIDTH_MEDIUM = 300;
var HIGHT_MEDIUM = 80;

var WIDTH_LOW = 200;



// Cartogram/Tilemap
var TILE_WIDTH = 10;
var TILE_HEIGHT = 10;
var TILE_GAP = 4;

var TILEMAP_LAYOUT_SCOTLAND = {
  "Ayrshire and Arran": [6, 0],
  Borders: [6, 2],
  "Dumfries and Galloway": [6, 1],
  Fife: [4, 2],
  "Forth Valley": [4, 1],
  Grampian: [2, 2],
  "Greater Glasgow and Clyde": [5, 0],
  Highland: [2, 1],
  Lanarkshire: [5, 1],
  Lothian: [5, 2],
  Orkney: [0, 1],
  Shetland: [0, 2],
  Tayside: [3, 2],
  "Western Isles": [1, 0],
};


var TILEMAP_LAYOUT_LTLAS = {
  Redcar_and_Cleveland: [],
  East_Devon: [],
  Havant: [],
  Surrey_Heath: [],
  Worthing: [],
  Bolton: [],
  Trafford: [],
  Barnsley: [],
  Bradford: [],
  Barnet: [],
  Hounslow: [],
  Wandsworth: [],
  Westminster: [],
  East_Dunbartonshire: [],
  Powys: [],
  South_Bucks: [],
  Braintree: [],
  Winchester: [],
  Rossendale: [],
  South_Northamptonshire: [],
  Selby: [],
  Mendip: [],
  Mid_Suffolk: [],
  Bromsgrove: [],
  Gateshead: [],
  Merton: [],
  West_Dunbartonshire: [],
  Gwynedd: [],
  Pembrokeshire: [],
  Reading: [],
  Fenland: [],
  South_Lakeland: [],
  Cotswold: [],
  Dacorum: [],
  North_Hertfordshire: [],
  Great_Yarmouth: [],
  South_Somerset: [],
  Malvern_Hills: [],
  Wirral: [],
  Newcastle_upon_Tyne: [],
  Derry_City_and_Strabane: [],
  Moray: [],
  Scottish_Borders: [],
  Merthyr_Tydfil: [],
  Stockton_on_Tees: [],
  Stoke_on_Trent: [],
  Swindon: [],
  Allerdale: [],
  Amber_Valley: [],
  Castle_Point: [],
  Fylde: [],
  South_Holland: [],
  Scarborough: [],
  Runnymede: [],
  Knowsley: [],
  Kensington_and_Chelsea: [],
  Redbridge: [],
  Mid_and_East_Antrim: [],
  North_Ayrshire: [],
  Darlington: [],
  Shropshire: [],
  Epping_Forest: [],
  Maldon: [],
  Gosport: [],
  Broxbourne: [],
  Northampton: [],
  Stratford_on_Avon: [],
  Wychavon: [],
  Wyre_Forest: [],
  St_Albans: [],
  Havering: [],
  Islington: [],
  Inverclyde: [],
  Renfrewshire: [],
  Wiltshire: [],
  South_Cambridgeshire: [],
  Chesterfield: [],
  Derbyshire_Dales: [],
  Forest_of_Dean: [],
  Maidstone: [],
  Charnwood: [],
  Kings_Lynn_and_West_Norfolk: [],
  Bassetlaw: [],
  Staffordshire_Moorlands: [],
  Walsall: [],
  Camden: [],
  Hammersmith_and_Fulham: [],
  Argyll_and_Bute: [],
  West_Lothian: [],
  North_Lincolnshire: [],
  South_Gloucestershire: [],
  Plymouth: [],
  Windsor_and_Maidenhead: [],
  Dorset: [],
  Barrow_in_Furness: [],
  Lewes: [],
  Uttlesford: [],
  Eastleigh: [],
  Pendle: [],
  Babergh: [],
  Dudley: [],
  Solihull: [],
  Bridgend: [],
  Herefordshire: [],
  County_of: [],
  Cheshire_East: [],
  South_Derbyshire: [],
  Tendring: [],
  Three_Rivers: [],
  Oadby_and_Wigston: [],
  Ryedale: [],
  Vale_of_White_Horse: [],
  Rotherham: [],
  Coventry: [],
  Kirklees: [],
  Tower_Hamlets: [],
  East_Renfrewshire: [],
  Ceredigion: [],
  Carmarthenshire: [],
  Blackburn_with_Darwen: [],
  Slough: [],
  Cambridge: [],
  Eden: [],
  East_Lindsey: [],
  West_Lindsey: [],
  Tamworth: [],
  Arun: [],
  Somerset_West_and_Taunton: [],
  Sefton: [],
  Barking_and_Dagenham: [],
  Brent: [],
  Greenwich: [],
  Flintshire: [],
  Torfaen: [],
  Isle_of_Wight: [],
  Cornwall_and_Isles_of_Scilly: [],
  Mid_Devon: [],
  East_Hampshire: [],
  Test_Valley: [],
  Dover: [],
  Sevenoaks: [],
  Thanet: [],
  Ribble_Valley: [],
  East_Staffordshire: [],
  Reigate_and_Banstead: [],
  Rugby: [],
  Redditch: [],
  North_Tyneside: [],
  Sunderland: [],
  Blackpool: [],
  Bath_and_North_East_Somerset: [],
  Bedford: [],
  Bolsover: [],
  North_East_Derbyshire: [],
  Rother: [],
  Preston: [],
  Stafford: [],
  Elmbridge: [],
  Liverpool: [],
  Southwark: [],
  Waltham_Forest: [],
  Fermanagh_and_Omagh: [],
  Midlothian: [],
  Rhondda_Cynon_Taf: [],
  Brighton_and_Hove: [],
  Northumberland: [],
  Huntingdonshire: [],
  Hart: [],
  Hyndburn: [],
  South_Kesteven: [],
  Oxford: [],
  Guildford: [],
  Enfield: [],
  Armagh_City: [],
  Banbridge_and_Craigavon: [],
  Highland: [],
  Aberdeen_City: [],
  Fife: [],
  Cardiff: [],
  Monmouthshire: [],
  Middlesbrough: [],
  Telford_and_Wrekin: [],
  Aylesbury_Vale: [],
  Erewash: [],
  Lancaster: [],
  Harborough: [],
  Nuneaton_and_Bedworth: [],
  East_Suffolk: [],
  West_Suffolk: [],
  Oldham: [],
  Kingston_upon_Thames: [],
  Newham: [],
  East_Lothian: [],
  Shetland_Islands: [],
  Blaenau_Gwent: [],
  East_Riding_of_Yorkshire: [],
  Bracknell_Forest: [],
  Wokingham: [],
  Milton_Keynes: [],
  Fareham: [],
  Watford: [],
  Boston: [],
  East_Northamptonshire: [],
  Ipswich: [],
  Spelthorne: [],
  Adur: [],
  Newry: [],
  Mourne_and_Down: [],
  Ards_and_North_Down: [],
  Denbighshire: [],
  Caerphilly: [],
  York: [],
  Carlisle: [],
  Copeland: [],
  Hastings: [],
  Wealden: [],
  Rochford: [],
  Swale: [],
  Wellingborough: [],
  Richmondshire: [],
  Sedgemoor: [],
  Mole_Valley: [],
  Worcester: [],
  Leeds: [],
  Comhairle_nan_Eilean_Siar: [],
  South_Lanarkshire: [],
  Bristol: [],
  City_of: [],
  Cheshire_West_and_Chester: [],
  Eastbourne: [],
  Chelmsford: [],
  Chorley: [],
  North_Kesteven: [],
  South_Oxfordshire: [],
  West_Oxfordshire: [],
  South_Staffordshire: [],
  Stockport: [],
  South_Tyneside: [],
  Wolverhampton: [],
  Haringey: [],
  South_Ayrshire: [],
  North_Lanarkshire: [],
  Derby: [],
  Chiltern: [],
  Torridge: [],
  Gloucester: [],
  Hertsmere: [],
  Breckland: [],
  Broadland: [],
  Corby: [],
  Broxtowe: [],
  Mansfield: [],
  Bury: [],
  Richmond_upon_Thames: [],
  Dumfries_and_Galloway: [],
  Vale_of_Glamorgan: [],
  Newport: [],
  Leicester: [],
  North_Somerset: [],
  Torbay: [],
  Bournemouth: [],
  Christchurch_and_Poole: [],
  High_Peak: [],
  Canterbury: [],
  Dartford: [],
  Melton: [],
  Craven: [],
  Waverley: [],
  Welwyn_Hatfield: [],
  Doncaster: [],
  Hackney_and_City_of_London: [],
  Aberdeenshire: [],
  Wrexham: [],
  North_East_Lincolnshire: [],
  Southend_on_Sea: [],
  Exeter: [],
  North_Devon: [],
  Folkestone_and_Hythe: [],
  Burnley: [],
  Hinckley_and_Bosworth: [],
  Harrogate: [],
  Warwick: [],
  Manchester: [],
  Antrim_and_Newtownabbey: [],
  East_Ayrshire: [],
  Falkirk: [],
  Stirling: [],
  Dundee_City: [],
  Southampton: [],
  Wycombe: [],
  Blaby: [],
  Daventry: [],
  Ashfield: [],
  Woking: [],
  Salford: [],
  Sheffield: [],
  Calderdale: [],
  Croydon: [],
  Lambeth: [],
  Sutton: [],
  Causeway_Coast_and_Glens: [],
  Mid_Ulster: [],
  Neath_Port_Talbot: [],
  Central_Bedfordshire: [],
  Cheltenham: [],
  Stroud: [],
  Ashford: [],
  South_Ribble: [],
  Lincoln: [],
  Norwich: [],
  South_Norfolk: [],
  Cherwell: [],
  Chichester: [],
  Horsham: [],
  Birmingham: [],
  Sandwell: [],
  Wakefield: [],
  Belfast: [],
  Hartlepool: [],
  Kingston_upon_Hull: [],
  City_of: [],
  Rutland: [],
  West_Devon: [],
  Basildon: [],
  Brentwood: [],
  New_Forest: [],
  Rushmoor: [],
  Kettering: [],
  Hambleton: [],
  Wigan: [],
  Bromley: [],
  Harrow: [],
  Angus: [],
  Conwy: [],
  Luton: [],
  Portsmouth: [],
  Harlow: [],
  Gedling: [],
  Newark_and_Sherwood: [],
  Cannock_Chase: [],
  Newcastle_under_Lyme: [],
  Mid_Sussex: [],
  East_Hertfordshire: [],
  Bexley: [],
  Lewisham: [],
  Lisburn_and_Castlereagh: [],
  Orkney_Islands: [],
  City_of_Edinburgh: [],
  Isle_of_Anglesey: [],
  Halton: [],
  Thurrock: [],
  Gravesham: [],
  Tonbridge_and_Malling: [],
  West_Lancashire: [],
  North_West_Leicestershire: [],
  North_Norfolk: [],
  Lichfield: [],
  Epsom_and_Ewell: [],
  Crawley: [],
  Rochdale: [],
  Tameside: [],
  Ealing: [],
  Glasgow_City: [],
  Warrington: [],
  Nottingham: [],
  Peterborough: [],
  Medway: [],
  East_Cambridgeshire: [],
  Teignbridge: [],
  Tewkesbury: [],
  Wyre: [],
  Tandridge: [],
  North_Warwickshire: [],
  Stevenage: [],
  St_Helens: [],
  Clackmannanshire: [],
  Perth_and_Kinross: [],
  Swansea: [],
  West_Berkshire: [],
  County_Durham: [],
  South_Hams: [],
  Colchester: [],
  Basingstoke_and_Deane: [],
  Tunbridge_Wells: [],
  Rushcliffe: [],
  Hillingdon: []
}

var LTLAS = [
]

dashboard.createDashboard = function (div, config) {
  
  // CREATE RELATED LINKS   
  var globalLinks = config.links; 

  if(globalLinks != undefined && globalLinks.length > 0)
  {
    div.append('span')
      .text('Related Dashboards:')
      .style('font-weight', 'bold')
      
    for(var i in globalLinks)
    {
        div.append('a')
          .attr('href', globalLinks[i].url)
          .attr('target',"_blank")
          .text(globalLinks[i].name)
          .style('margin-left', '10px')
    }
  }


  // }else{
  //   var select = div.append('select')
  //     .style('margin-left', '10px')
  //   var visitLink = div.append('a').text('Visit')
  //     .style('margin-left', '10px')
    
  //   select.on('change', function(e){
  //     console.log('elem', e)
  //     // visitLink.attr(href,elem)
  //   })
    
  //     for(var i in globalLinks){
  //     select.append('option').append('a')
  //       .attr('href', globalLinks[i].url)
  //       .attr('target',"_blank")
  //       .text(globalLinks[i].name)
  //   }
  // }
  
  // CREATE GROUP LAYOUT
  var layout = config.layout;
  createLayoutTable(div, layout, config, addGroup);
};

var createLayoutTable = function (parentElement, layout, config, func) {
  var tr = parentElement
    .append("table")
    .attr("class", "dashboardLayout")
    .append("tr");

  var tdId;
  for (var col = 0; col < layout?.length; col++) {
    var td = tr.append("td").attr("class", "layout");
    tdId = canonizeNames(layout[col]);
    td.attr("id", tdId);

    if (typeof layout[col] == "string") {
      func(tdId, layout[col], config);
      // addGroup(tdId, layout[col], config)
    } else {
      for (var row = 0; row < layout[col].length; row++) {
        if (typeof layout[col][row] == "string") {
          func(tdId, layout[col][row], config);
          // addGroup(tdId, layout[col][row], config)
          tr.append("br");
        } else {
          createLayoutTable(td, layout[col][row], config, func);
        }
      }
    }
  }
};

var addGroup = function (parentHTMLElementId, id, config) {
  // console.log('\tAttach Group', id, '--> ', parentHTMLElementId)
  var group = config.groups.filter(function (el) {
    return el.id == id;
  })[0];

  var divId = "div_" + group?.id;
  var div = d3
    .select("#" + parentHTMLElementId)
    .append("div")
    .attr("id", divId)
    .attr("class", "dashboard");

  // show group title
  div.append("h3").attr("class", "dashboard").text(group?.title);

  var layout = group?.layout;
  createLayoutTable(div, layout, config, createWidget);
  // for(var col = 0 ; col < layout.length ; col++)
  // {
  //     if( visualizationof(layout[col]) == "string")
  //     {
  //         createPanel(divId, layout[col], config)
  //     }
  //     else
  //     {
  //         for(var row = 0 ; row < layout[col].length ; row++)
  //         {
  //             if( typeof(layout[col][row]) == "string")
  //             {
  //                 createPanel(divId, layout[col][row], config)
  //             }else
  //             {
  //                 // needs o create new table here
  //                 for(var col2 = 0 ; col2 < layout[col][row].length ; col2++){
  //                     createPanel(divId, layout[col][row][col2], config)
  //                 }
  //             }
  //             d3.select('#' + divId).append('br')
  //         }
  //     }
  // }
};

//////////////////////////////////////
var createWidget = function (parentHtmlElementId, id, config) {

  var widgets = config.widgets.filter(function (el) {
    return el.id == id;
  });

  if (widgets.length == 0) {
    console.log("NO WIDGET FOUND WITH id:", id);
    return;
  }

  
  var widgetConfig = widgets[0];

  // create convenience variable for 'data' that will be linked back
  // to thw widgetConf before visualizing.
  var data = widgetConfig.data;
  var dataField = widgetConfig.dataField;
  // check if data is not empty
  if (data.length == 0) {
    console.log("NO DATA FOUND / DATA ARRAY IS EMPTY", id);
    return;
  }


  // if(widgetConfig.visualization == dashboard.VIS_CARTOGRAM){
  //   console.log('data[0]', data[0])
  //   data = data.slice(0,10000);
  //   console.log('data sliced', data.length)
  // }



  // check for filter conditions on data
  if (widgetConfig.conditions && widgetConfig.conditions.length > 0) {
    for (var i=0 ; i< widgetConfig.conditions.length ; i++) {
      data = executeCondition(data, widgetConfig.conditions[i]);
    }
  }

  console.log('>>> data', data)

  // SET WIDGET DEFAULT VALUES
  if (!widgetConfig.dateField) 
    widgetConfig.dateField = "index";

  if(!widgetConfig.detail)
    widgetConfig.detail = dashboard.DETAIL_HIGH;

  if (!widgetConfig.unit) 
    widgetConfig.unit = "";
  
  if (!widgetConfig.abbreviate) 
    widgetConfig.abbreviate = false;

  // deprecated. remove when not used anymore
  if(!widgetConfig.normalized)
    widgetConfig.normalized = false;
  
  if(!widgetConfig.trend)
    widgetConfig.trend = false;

  if(!widgetConfig.cumulative)
    widgetConfig.cumulative = false;
  
  if(!widgetConfig.timeWindow)
    widgetConfig.timeWindow = 7;

  if(!widgetConfig.timeLabel)
    widgetConfig.timeLabel = dashboard.TIMEUNIT_WEEK;

  if(!widgetConfig.timeUnit)
    widgetConfig.timeUnit = dashboard.TIMEUNIT_DAY;
  
    // ben: this seems to cause an error when too many elements are shown inside a barchart..
  // if(!widgetConfig.max)
  //   widgetConfig.max = Math.max.apply(Math, 
  //     widgetConfig.data.map(function(o) {return o[widgetConfig.dataField]; }));

  if(!widgetConfig.min)
    widgetConfig.min = 0;

  // include, once LAYOUT has been implemented as a variable
  // if(!widgetConfig.layout)
  //   widgetConfig.layout = dashboard.LAYOUT_COMPACT;


  // order data by date:
  function byDate(a, b) {
    var ma = moment(a[widgetConfig.dateField], ["YYYYMMDD", "YYYY-MM-DD"]);
    var mb = moment(b[widgetConfig.dateField], ["YYYYMMDD", "YYYY-MM-DD"]);
    if (ma.isAfter(mb)) {
      return 1;
    }
    return -1;
  }


  // convert all dates in to YYYY-MM-DD
  for (var i in data) {
    data[i][widgetConfig.dateField] = moment(data[i][widgetConfig.dateField], [
      "YYYYMMDD",
      "YYYY-MM-DD",
    ]).format("YYYY-MM-DD");
  }
  // sort array by date, first/earliest to last/most recent
  data.sort(byDate);
  var latestDate = data[data.length-1][widgetConfig.dateField]

  if (widgetConfig.filter && widgetConfig.filter.length > 0) {
    for (var i=0 ; i< widgetConfig.filter.length ; i++) {
      let filter = widgetConfig.filter[i]
      if(filter == 'latest'){
        data = data.filter(function(d){
          return d[widgetConfig.dateField] == latestDate;
        })
      }
    }
  }
  
  // find last date in data set, i.e., when data has been updated last.
  var lastDateUpdated = moment(data[data.length - 1][widgetConfig.dateField], ["YYYY-MM-DD"]);
  
  
  var title = widgetConfig.title;
  
  // link data var back to widget
  widgetConfig.data = data;

  console.log('> data', data)

  if (widgetConfig.visualization == dashboard.VIS_CARTOGRAM) {
    dashboard.visualizeMap(
      parentHtmlElementId, 
      widgetConfig,
      lastDateUpdated
    );
  } 
  else if (widgetConfig.visualization == dashboard.VIS_LINECHART) {
    dashboard.visualizeTimeSeries(
      parentHtmlElementId, 
      widgetConfig,
      lastDateUpdated
      );
  } 
  else if (widgetConfig.visualization == dashboard.VIS_BARCHART) {
    dashboard.visualizeBarChart(
      parentHtmlElementId, 
      widgetConfig,
      lastDateUpdated
    );
  } 
  else if (widgetConfig.visualization == dashboard.VIS_PROGRESS) {
    dashboard.visualizeProgress(
      parentHtmlElementId,
      widgetConfig,
      lastDateUpdated
    );
  } else {
    console.error(
      'Chart type "' +
        widgetConfig.visualization +
        '" not defined. Please check https://github.com/rampvis/rampvis.github.io/wiki/widgets.',
    );
  }
};

var executeCondition = function (data, c) {
  c = "d." + c;
    console.log('>>> data', data)

  console.log('c', c)
  var size = data.length;
  return data.filter(function (d) {
    return eval(c);
  });
};

var canonizeNames = function (s) {
  return String(s)
    .toLowerCase()
    .replaceAll(",", "-")
    .replaceAll("[", "-")
    .replaceAll("]", "-");
};

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
/// TYPE STATS
/////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

dashboard.visualizeTimeSeries = function (
  parentHtmlId,
  config,
  lastDate
  ) 
  {

  var min = 999999999
  var max = -999999999
  var minDate = ''
  var maxDate = ''
  for(var i in config.data)
  {    
    if(parseFloat(config.data[i][config.dataField]) > max){
      max = parseFloat(config.data[i][config.dataField]);
      maxDate = config.data[i][config.dateField]
    }
  }
  for(var i in config.data)
  {
    if(parseFloat(config.data[i][config.dataField]) <= min){
      min = parseFloat(config.data[i][config.dataField]);
      minDate = config.data[i][config.dateField]
    }
  }

  // default for all
  var domain = [min,max]
  
  // manually override defaults
  if (config.min){
    domain[0] = config.min;
  }
  if (config.max){
    domain[1] = config.max;
  }
  console.log('min.max', domain[0], domain[1])

  // DETAIL HIGH
  if (config.detail == dashboard.DETAIL_HIGH) 
  {
    var random = Math.floor(Math.random() * 1000);
    var wrapperDiv = d3
      .select("#" + parentHtmlId)
      .append("div")
      .attr("id", "wrapperDiv" + random);

    const WIDTH = WIDTH_HIGH;
    const HEIGHT = 150;

    var svg = wrapperDiv
      .append("svg")
      .attr("width", WIDTH)
      .attr("height", BASELINE_LABELS + 40)
      .style("margin-bottom", 0);

    dashboardComponents.setWidgetTitle(svg, config.title, config.link, config.detail, lastDate);

    dashboardComponents.visualizeNumber(
      svg,
      config,
      0,
      BASELINE_LARGE_NUMBER,
      FONT_SIZE_BIG
    );
    dashboardComponents.visualizeTrendArrow(
      svg,
      config,
      WIDTH - 100,
      BASELINE_LARGE_NUMBER,
    );

    // showing the highest value doesn't make sense 
    // for cumulative data 
    if(!config.cumulative)
    {
      dashboardComponents.visualizeValue(
        svg,
        max, 
        maxDate,
        config.unit,
        WIDTH - 210,
        BASELINE_LARGE_NUMBER,
        config.color, 
        config.abbreviate, 
        'max', 
        LINE_1
      );
      dashboardComponents.visualizeValue(
        svg,
        min, 
        minDate,
        config.unit,
        WIDTH - 210,
        BASELINE_LARGE_NUMBER,
        config.color, 
        config.abbreviate, 
        'min', 
        LINE_2
      );
    }

    wrapperDiv.append("br");


    var mark = "bar";
    if (config.cumulative)
      mark = "line";

    var scale = { domain: domain};

    var vegaLinechart = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      data: {
        values: config.data,
      },
      mark: mark,
      width: WIDTH - 65,
      height:HIGHT_HIGH - HEIGHT,
      encoding: {
        y: {
          field: config.dataField,
          type: "quantitative",
          title: "",
          scale: scale,
        },
        x: {
          field: config.dateField,
          type: "temporal",
          title: "",
        },
        color: { value: config.color },
      },
    };

    wrapperDiv.append("div").attr("id", "vegadiv-" + parentHtmlId + random);

    vegaEmbed("#vegadiv-" + parentHtmlId + random, vegaLinechart, { actions: false });
  } 

  //////////////// MEDIUM 
  else if (config.detail == dashboard.DETAIL_MEDIUM) 
  {
    var svg = d3.select("#" + parentHtmlId).append("svg");
    dashboardComponents.setWidgetTitle(svg, config.title, config.link, config.detail, lastDate);

    svg
      .attr("width", WIDTH_MEDIUM)
      .attr("height", HIGHT_MEDIUM);

    dashboardComponents.visualizeNumber(
      svg,
      config,
      0,
      BASELINE_LARGE_NUMBER,
      FONT_SIZE_BIG
    );
    dashboardComponents.visualizeTrendArrow(
      svg,
      config,
      WIDTH_MEDIUM - 200,
      BASELINE_LARGE_NUMBER,
    );
    dashboardComponents.visualizeMiniChart(
      svg,
      config,
      WIDTH_MEDIUM - 90,
      BASELINE_LARGE_NUMBER,
      35,
      90, 
    );
  } 
  // LOW
  else if (config.detail == dashboard.DETAIL_LOW) 
  {

    var svg = d3.select("#" + parentHtmlId).append("svg");
    dashboardComponents.setWidgetTitle(svg, config.title, config.link, config.detail, lastDate);

    if(config.layout == dashboard.LAYOUT_HORIZONTAL)
    {
    
      svg.attr("width", 180).attr("height", 70);

      dashboardComponents.visualizeNumber(
        svg,
        config,
        0,
        BASELINE_LARGE_NUMBER,
        FONT_SIZE_MEDIUM
      );
      dashboardComponents.visualizeMiniChart(
        svg,
        config,
        100,
        BASELINE_LARGE_NUMBER,
        18,
        100
      );
    }else 
    if(config.layout == dashboard.LAYOUT_VERTICAL)
    {
      svg.attr("width", 70).attr("height", 200);
      dashboardComponents.visualizeNumber(
        svg,
        config,
        0,
        BASELINE_LARGE_NUMBER,
        FONT_SIZE_MEDIUM
      );
      dashboardComponents.visualizeMiniChart(
        svg,
        config,
        0,
        100,
        50,
        60
      );
    }
  } 

};

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
/// TYPE CARTOGRAM
/////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

dashboard.visualizeMap = function (
  parentHtmlElementId, 
  config,
  lastDateUpdated
) {
  var loc = config.categories;
  var dataField = config.dataField;

  var width = 400;
  var height = 400;

  TILE_HEIGHT = 400 / 20;
  TILE_WIDTH = (400 - 40) / 20;


  var svg = d3
    .select("#" + parentHtmlElementId)
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  dashboardComponents.setWidgetTitle(svg, config.title, null, config.detail, lastDateUpdated);

  svg
    .append("text")
    .attr("x", 0)
    .attr("y", BASELINE_WIDGET_TITLE + 30)
    .attr("class", "thin")
    .text("per NHS Board");

  var data = config.data;
  // var dataArray = [];
  var max = 0;
  var min = 999999999;

  var notFound = []
  for (let i = 0 ; i < data.length; i++) {
      max = Math.max(max, data[i][dataField]);
      min = Math.min(min, data[i][dataField]);
  }

  var valueScale = d3.scaleLinear().domain([0, max]).range([0, 1]);

  var map = TILEMAP_LAYOUT_SCOTLAND;
  if(config.map == "uk_ltla"){
    map = TILEMAP_LAYOUT_LTLAS;
  } 

  data.sort(function(d1,d2){
    return d2[dataField] - d1[dataField]
  })

  var iCount = 0; 
  var jCount = 0;
  // svg
  //   .selectAll("rect")
  //   .data(data)
  //   .enter()
  //   .append("rect")
  //   .style("stroke", "#ccc")
  //   .style("fill", "#fff")
  //   .attr("x", function (d) {
  //     // console.log('d', d)
  //     // var i = map[d[loc]][1];
  //     // if(i==undefined){
  //     var i = Math.round(iCount / 20);
  //     console.log('i',i)
  //     iCount++;
  //     return i * TILE_WIDTH;
  //   })
  //   .attr("y", function (d) {
  //     // console.log('d', d)
  //     // var j = map[d[loc]][0];
  //     // if(j==undefined) 
  //     var j = jCount % 20;
  //     jCount++
  //     console.log('j',j)
  //     return 100 + j * TILE_HEIGHT;
  //   })
  //   .attr("width", TILE_WIDTH - TILE_GAP)
  //   .attr("height", TILE_HEIGHT - TILE_GAP)

  iCount = 0;
  jCount = 0;
  svg
    .selectAll(".rect")
    .data(data)
    .enter()
    .append("rect")
    .style("opacity", function (d) {
      return valueScale(d[dataField]);
    })
    .style("fill", function(d){
      var c = config.color;
      // console.log(d[dataField])
      // if (d[dataField] < 0){
      //   c = '#777'
      // }
      return c;
    }
    )
    .attr("x", function (d) {
      // var i = map[d[loc]][1];
      var i = Math.floor(iCount / 20);
      iCount++
      return i * TILE_WIDTH;
    })
    .attr("y", function (d) {
      // var j = map[d[loc]][0];
      var j = jCount % 20;
      jCount++
      return 100 + j * TILE_HEIGHT;
    })
    .attr("width", TILE_WIDTH - TILE_GAP)
    .attr("height", TILE_HEIGHT - TILE_GAP);
  svg.selectAll("rect");

  // waiting for Jason's cartogram map
  // svg
  //   .selectAll(".cartogramLabel")
  //   .data(dataArray)
  //   .enter()
  //   .append("text")
  //   // .filter(function (d) {
  //   //     return d.value == max
  //   //         || d.value == min;
  //   // })
  //   .attr("class", "cartogramLabel")
  //   .style("fill", function (d) {
  //     return valueScale(d.value) >= 0.6 ? "#fff" : "#000";
  //   })
  //   .attr("x", function (d) {
  //     // return (
  //     //   TILEMAP_LAYOUT_SCOTLAND[d.name][1] * TILE_WIDTH + TILE_HEIGHT * 0.05
  //     // );
  //     var j = jCount % 20;
  //     jCount++
  //     return 100 + j * TILE_HEIGHT;
  //   })
  //   .attr("y", function (d) {
  //     // return (
  //     //   100 +
  //     //   TILEMAP_LAYOUT_SCOTLAND[d.name][0] * TILE_HEIGHT +
  //     //   TILE_HEIGHT * 0.8
  //     // );
  //     var j = jCount % 20;
  //     jCount++
  //     return 100 + j * TILE_HEIGHT;
  //   })
  //   .text(function (d) {
  //     if (d[dataField] < 9) {
  //       return Math.round(d[dataField] * 10) / 10;
  //     } else if (d[dataField] < 999) {
  //       return Math.round(d[dataField]);
  //     } else {
  //       return Math.round(Math.round(d[dataField]) / 1000) + "k";
  //     }
  //   })
  //   .filter(function (d) {
  //     return !(d[dataField] == max || d[dataField] == min);
  //   })
  //   .attr("class", "cartogramLabel-nonextremes");

  // Create map legend
  
  svg.selectAll('.legendCircles') 
    .data([
      min,
      (max-min)/2,
      max
    ])
    .enter()
    .append('circle')
      .attr('r', 5)
      .attr('cx', 0)
      .attr('cy', function(d,i){
        return width - 20 + i*30
      })
      .style('fill', function(d){return valueScale(d);})
    
};

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//  TYPE GROUPS
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
// parentHtmlElementId, 
// widgetConfig,
// lastDateUpdated

dashboard.visualizeBarChart = function (
  parentHtmlElementId,
  widgetConfig,
  lastDateUpdated
) {
  console.log('>> VISUALIZE BARCHART')
  var random = Math.floor(Math.random() * 1000);
  var wrapperDiv = d3
    .select("#" + parentHtmlElementId)
    .append("div")
    .attr("id", "wrapperDiv" + random);

  console.log('data')

  var svg = wrapperDiv
    .append("svg")
    .attr("height", 40)
    .style("margin-bottom", 0);

  dashboardComponents.setWidgetTitle(svg, widgetConfig.title, widgetConfig.link, widgetConfig.detail, lastDateUpdated);

  wrapperDiv.append("br");

  var data = widgetConfig.data;
  // display only last data
  let lastDate = data[data.length - 1].index;
  data = data.filter((e) => {
    return e.index == lastDate;
  });

  // dashboard.DETAILED  
  var width = 150;
  var barWidth = 20;

  if (widgetConfig.detail == dashboard.DETAIL_MEDIUM) {
    width = 100;
    barWidth = 15;
  }
  else
  if (widgetConfig.detail == dashboard.DETAIL_LOW) {
    width = 70;
    barWidth = 10;
  }

  svg.attr("width", width);
  
  var vegaBarchart = {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    data: {
      values: data,
    },
    width: width,
    height: { step: barWidth },
    mark: "bar",
    encoding: {
      y: {
        field: widgetConfig.categories,
        type: "nominal",
        title: "",
        sort: widgetConfig.sort
      },
      x: {
        field: widgetConfig.dataField,
        type: "quantitative",
        title: "",
      },
      color: { value: widgetConfig.color },
    },
  };

  wrapperDiv.append("div").attr("id", "vegadiv-" + parentHtmlElementId + random);

  vegaEmbed("#vegadiv-" + parentHtmlElementId + random, vegaBarchart, { actions: false });
};

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//  PROGRESS BARS
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
dashboard.visualizeProgress = function (
  parentHtmlId,
  config,
  lastDate
  )  {

  var dataObj = {}
  var width = 40
  var isTimeseries = false

  if(config.data.length > 1)
  {
    console.log("restructuring")
    isTimeseries = true;
    dataObj = config.data[config.data.length - 1];
    width = 120;
  }else{
    dataObj = config.data;
  }
  var random = Math.floor(Math.random() * 1000);
  var wrapperDiv = d3
  .select("#" + parentHtmlId)
  .append("div")
  .attr("id", "wrapperDiv" + random);

  var svg = wrapperDiv
  .append("svg")
  .attr("height", 100)
  .attr('width',WIDTH_HIGH)
  .style("margin-bottom", 0)
  .style("margin-right", 0)
  .style("z-index", -1);

  dashboardComponents.setWidgetTitle(svg, config.title, config.link, config.detail, lastDate);
  console.log(config)

  console.log("data here")
  console.log(dataObj)
  var forignObject;

  if (config.detail == dashboard.DETAIL_HIGH) 
  {
    wrapperDiv.append("br");
    
    if(isTimeseries)
    {
      dashboardComponents.visualizeTrendArrow(
        svg,
        config,
        WIDTH_HIGH-100,
        BASELINE_LARGE_NUMBER,
      );
    }

    dashboardComponents.visualizeNumber(
      svg,
      config,
      0,
      BASELINE_LARGE_NUMBER,
      FONT_SIZE_BIG
    );  

    console.log('data', dataObj, config.data)

    var vegaProgressChart = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      data: { 
        values: dataObj,
      },
      width: WIDTH_HIGH - 100 - 100,
      layer: [{
        mark: "bar",
        encoding: {
          x: {
            field: config.dataField,
            type: "quantitative",
            scale: {"domain": [config.min, config.max]},
            tickExtra: true,
            tickBand: "extent",
            title: null
          },
          color: { value: config.color }
        },
      }, 
    ],
      config: {
        axis: {grid: true, tickBand: "extent"}
      }, 
    }

    forignObject = svg.append('foreignObject')
    .attr('width', 220).attr('height', 100)
    .attr('x', 80)
    .attr('y', BASELINE_LARGE_NUMBER)
      
  }
  else 
  if(config.detail == dashboard.DETAIL_MEDIUM){
    wrapperDiv.append("br");
    
    //width - 300
    svg.attr("width", WIDTH_MEDIUM);
    svg.attr("height", 100);

    dashboardComponents.visualizeNumber(
      svg,
      config,
      0,
      BASELINE_WIDGET_TITLE + 22,
      FONT_SIZE_MEDIUM
    );
  
    var vegaProgressChart = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      data: { 
        values: dataObj,
      },
      width: WIDTH_MEDIUM -100 -10,
      layer: [{
        mark: "bar",
        encoding: {
          x: {
            field: config.dataField,
            type: "quantitative",
            scale: {"domain": [config.min, config.max]},
            tickExtra: true,
            tickBand: "extent",
            title: null
          },
          color: { value: config.color }
        },
      }
    ],
      config: {
        axis: {grid: true, tickBand: "extent"}
      }, 
    };

    forignObject = svg.append('foreignObject')
    .attr('width', 300).attr('height', 200)
    .attr('x', 80)
    .attr('y', BASELINE_LARGE_NUMBER)
  }
  /////////// DETAIL LOW
  else if(config.detail == dashboard.DETAIL_LOW){
    wrapperDiv.append("br");
    
    svg.attr("width", WIDTH_LOW);
    svg.attr("height", 80);

    dashboardComponents.visualizeNumber(
      svg,
      config,
      0,
      BASELINE_LARGE_NUMBER,
      FONT_SIZE_MEDIUM
    );

    var vegaProgressChart = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      data: { 
        values: dataObj
      },
      "width": WIDTH_LOW - 100-10,
      layer: [{
        mark: "bar",
        encoding: {
          x: {
            field: config.dataField,
            type: "quantitative",
            scale: {"domain": [config.min, config.max]},
            axis: null
          },
          color: { value: config.color }
        },
      }, 
    ],
      config: {
        axis: {grid: true, tickBand: "extent"}
      },
    };

    forignObject = svg.append('foreignObject')
    .attr('width', WIDTH_LOW-100)
    .attr('height', 70)
    .attr('x', 80)
    .attr('y', BASELINE_LARGE_NUMBER)
  }

  forignObject.append("xhtml:div").attr("id", "vegadiv-" + parentHtmlId + random)
  .style("position", "absolute");
  
  vegaEmbed("#vegadiv-" + parentHtmlId + random, vegaProgressChart, { actions: false, renderer: "svg"});
};





































///////////////////////////////
/// VISULIZATION COMPONENTS ///
///////////////////////////////

dashboardComponents.visualizeNumber = function (
  svg,
  config,
  x,
  y,
  fontSize
) {
  var g = svg.append("g").attr("transform", "translate(" + x + "," + y + ")");

  if (config.cumulative){
    dashboardComponents.setLabel(g,"Total", 0, BASELINE_LABELS);
  }else{
    if (config.timeUnit == dashboard.TIMEUNIT_DAY)
        dashboardComponents.setLabel(g, "New today", 0, BASELINE_LABELS);
    if (config.timeUnit == dashboard.TIMEUNIT_WEEK)
        dashboardComponents.setLabel(g, "New this week", 0, BASELINE_LABELS);
    if (config.timeUnit == dashboard.TIMEUNIT_MONTH)
        dashboardComponents.setLabel(g, "New this month", 0, BASELINE_LABELS);
  }


  var val = config.data[config.data.length - 1][config.dataField];
  
  // abbreviate if required
  if (val > 1000000 && config.abbreviate) {
    val = val / 1000000;
    config.unit = "M ";
  } else if (val > 1000 && config.abbreviate) {
    val = val / 1000;
    config.unit = "k ";
  }

  val = Math.round(val * 10) / 10;
  val = val.toLocaleString(undefined);

  // add unit to value
  val += "" + config.unit;

  var bigNumber = {};

  var t = g
    .append("text")
    .text(val)
    .attr("y", fontSize)
    .style('font-weight', 'bold')
    .style('font-size', fontSize)
    .style("fill", config.color)
    .each(function () {
      bigNumber.width = this.getBBox().width;
    });
};

dashboardComponents.visualizeTrendArrow = function (
  svg, config, x, y) {

  var g = svg.append("g").attr("transform", "translate(" + x + "," + y + ")");

  if (config.timeUnit == dashboard.TIMEUNIT_WEEK)
    dashboardComponents.setLabel(g, "since last week", 0, BASELINE_LABELS);
  if (config.timeUnit == dashboard.TIMEUNIT_DAY)
    dashboardComponents.setLabel(g, "since yesterday", 0, BASELINE_LABELS);

  var secondLast = parseInt(config.data[config.data.length - 2][config.dataField]);
  var last = parseInt(config.data[config.data.length - 1][config.dataField]);
  let trendValue = last - secondLast;
  let rotation = 0;
  if (trendValue < 0) rotation = 45;
  if (trendValue > 0) rotation = -45;

  g.append("text")
    .text(function () {
      if (trendValue > 0) {
        return "up by";
      } else if (trendValue < 0) {
        return "down by";
      } else {
        return "no ";
      }
    })
    .attr("x", 45)
    .attr("y", LINE_1)
    .attr("font-size", FONT_SIZE_LABELS );

  if (trendValue == 0) {
    g.append("text")
      .text("change")
      .attr("x", 45)
      .attr("y", LINE_2)
      .attr("class", "thin");
  } else {
    g.append("text")
      .text(function () {
        trendValue = Math.abs(trendValue);
        if (config.unit == '%') {
          trendValue += "% pts";
        }
        return trendValue;
      })
      .attr("x", 45)
      .attr("y", LINE_2)
      .style("fill", config.color);
  }

  var g2 = g.append("g").attr("transform", function () {
    return "translate(17," + 20 + "),rotate(" + rotation + ")";
  });

  var arrowSize = 12
  var arrowThickness = 5;
  g2.append("line")
    .attr("x1", -arrowSize)
    .attr("x2", arrowSize)
    .attr("y1", 0)
    .attr("y2", 0)
    .attr("class", "arrow")
    .attr("stroke", config.color)
    .style('stroke-width', arrowThickness)
    .style('stroke-linecap', 'round')
  
  g2.append("line")
    .attr("x1", arrowSize)
    .attr("x2", 0)
    .attr("y1", 0)
    .attr("y2", -arrowSize)
    .attr("class", "arrow")
    .attr("stroke", config.color)
    .style('stroke-width', arrowThickness)
    .style('stroke-linecap', 'round')

  g2.append("line")
    .attr("x1", arrowSize)
    .attr("x2", 0)
    .attr("y1", 0)
    .attr("y2", arrowSize)
    .attr("class", "arrow")
    .attr("stroke", config.color)
    .style('stroke-width', arrowThickness)
    .style('stroke-linecap', 'round')    

};

//implement - add timeWindow and timeLabel
dashboardComponents.visualizeTrendArrowNew = function (
  svg, config, x, y) {
  
  console.log("called trend")
  
  var window = config.timeWindow;

  var g = svg.append("g").attr("transform", "translate(" + x + "," + y + ")");

  if (config.timeLabel == dashboard.TIMEUNIT_HOUR)
    dashboardComponents.setLabel(g, "Over the last " + window + " hours", 0, BASELINE_LABELS); 
  else if (config.timeLabel == dashboard.TIMEUNIT_DAY)
  dashboardComponents.setLabel(g, "Over the last " + window + " days", 0, BASELINE_LABELS);
  else if (config.timeLabel == dashboard.TIMEUNIT_WEEK)
    dashboardComponents.setLabel(g, "Over the last " + window + " weeks", 0, BASELINE_LABELS);
  else if (config.timeLabel == dashboard.TIMEUNIT_MONTH)
    dashboardComponents.setLabel(g, "Over the last " + window + " months", 0, BASELINE_LABELS);
  else if (config.timeLabel == dashboard.TIMEUNIT_YEAR)
    dashboardComponents.setLabel(g, "Over the last " + window + " years", 0, BASELINE_LABELS); 

  var baseSample = parseFloat(config.data[config.data.length - (window + 1)][config.dataField]);
  var last = parseFloat(config.data[config.data.length - 1][config.dataField]).toFixed(3);
  let trendValue = last - baseSample;
  let rotation = 0;
  if (trendValue < 0) rotation = 45;
  if (trendValue > 0) rotation = -45;

  trendValue = Math.round(trendValue * 100) / 100

  g.append("text")
    .text(function () {
      if (trendValue > 0) {
        return "up by";
      } else if (trendValue < 0) {
        return "down by";
      } else {
        return "no ";
      }
    })
    .attr("x", 45)
    .attr("y", LINE_1)

  if (trendValue == 0) {
    g.append("text")
      .text("change")
      .attr("x", 45)
      .attr("y", LINE_2)
      .attr('text-anchor','end')
  } else {
    g.append("text")
      .text(function () {
        trendValue = Math.abs(trendValue);
        if (config.unit == '%') {
          trendValue += "% pts.";
        }
        return trendValue;
      })
      .attr("x", 45)
      .attr("y", LINE_2)
      .style("fill", config.color)
      .attr('text-anchor','end')
  }

  var g2 = g.append("g").attr("transform", function () {
    return "translate(0," + 20 + "),rotate(" + rotation + ")";
  });

  g2.append("line")
    .attr("x1", -15)
    .attr("x2", 15)
    .attr("y1", 0)
    .attr("y2", 0)
    .attr("class", "arrow")
    .attr("stroke", config.color);
  g2.append("line")
    .attr("x1", 15)
    .attr("x2", 0)
    .attr("y1", 0)
    .attr("y2", -15)
    .attr("class", "arrow")
    .attr("stroke", config.color);
  g2.append("line")
    .attr("x1", 15)
    .attr("x2", 0)
    .attr("y1", 0)
    .attr("y2", 15)
    .attr("class", "arrow")
    .attr("stroke", config.color);
};

dashboardComponents.visualizeValue = function (
  svg, 
  val, 
  valDate, 
  unit,
  x, 
  y, 
  color,
  abbreviate,
  type, 
  line
  )
  {
    // abbreviate if required
    if (val > 1000000 && abbreviate) {
      val = val / 1000000;
      // unit = "M " + unit;
    } else if (val > 1000 && abbreviate) {
      val = val / 1000;
      // unit = "k " + unit;
    }

    val = Math.round(val * 10) / 10;
    val = val.toLocaleString(undefined);
  
    var g = svg.append("g").attr("transform", "translate(" + x + "," + y + ")");

    g.append("text")
      .text(type.charAt(0).toUpperCase() + type.slice(1) + ':')
      .attr("x", 0)
      .attr("y", line)
      .style('text-anchor', 'end')
      .style("fill", '#000')
      .style('font-size', FONT_SIZE_LABELS)

    var valText = g.append("text")
      .text(val + unit)
      .attr("x", 5)
      .attr("y", line)
      .style('fill', color)
      .style('font-weight', 'bold')
      .style('font-size', FONT_SIZE_LABELS)

    g.append("text")
      .text(valDate)
      .attr("x", valText.node().getBBox().width + 7)
      .attr("y", line)
      .style("fill", COLOR_LABELS)
      .style('font-size', FONT_SIZE_LABELS)

};

dashboardComponents.visualizeMiniChart = function (
  svg,
  config,
  x,
  y,
  chartHeight,
  chartWidth) 
  {
    var trendWindow
    if(config.trendWindow == 'all')
    {
      trendWindow = config.data.length;
    }
    else
    {
      if (config.timeUnit == dashboard.TIMEUNIT_WEEK) {
        trendWindow = 8;
      }
      if (config.timeUnit == dashboard.TIMEUNIT_DAY) {
        trendWindow = 14;
      }
    }

    var g = svg.append("g").attr("transform", "translate(" + x + "," + y + ")");
    if (config.timeUnit == dashboard.TIMEUNIT_WEEK) {
      dashboardComponents.setLabel(g, "Last " + trendWindow + " weeks", 0, BASELINE_LABELS);
    }
    if (config.timeUnit == dashboard.TIMEUNIT_DAY) {
      dashboardComponents.setLabel(g, "Last " + trendWindow + " days", 0, BASELINE_LABELS);
    }
    
    var barWidth = (chartWidth - 10) / trendWindow;
    

    var x = d3
    .scaleLinear()
    .domain([0, trendWindow - 1])
    .range([0, chartWidth - barWidth]);
    
    // get N last entries
    var dataSlice = config.data.slice(config.data.length - trendWindow);

    // calc min & max in trend interval
    var min = 99999999
    var max = -99999999
    if(config.max != undefined)
      max = config.max;
    else{
      for(var i in dataSlice)
      {    
        if(parseFloat(dataSlice[i][config.dataField]) > max){
          max = parseFloat(dataSlice[i][config.dataField]);
        }
      }
    }
    if(config.min != undefined){
      min = config.min
    }else{
      for(var i in dataSlice)
      {
        if(parseFloat(dataSlice[i][config.dataField]) <= min){
          min = parseFloat(dataSlice[i][config.dataField]);
        }
      }
    }

  console.log('>> min,max', config.min, min, max)
  var y = d3.scaleLinear().domain([min, max]).range([chartHeight, 0]);

  // if perentage, show 100% line
  if (config.max) {
    g.append("line")
      .attr("y1", y(max))
      .attr("y2", y(max))
      .attr("x1", x(0))
      .attr("x2", x(dataSlice.length - 1))
      .attr("class", "chartTopLine");
    g.append("rect")
      .attr("x", x(0))
      .attr("y", y(max))
      .attr("height", Math.abs(y(max) - y(0)))
      .attr("width", x(dataSlice.length - 1) - x(0))
      .attr("class", "chartTopRect");
  }

  console.log('config.cumulative', config.cumulative)

  if (config.cumulative)
  {
    g.append("path")
      .datum(dataSlice)
      .attr("fill", config.color)
      .style("opacity", 0.4)
      .attr(
        "d",
        d3
          .area()
          .x(function (d, i) {
            return x(i);
          })
          .y0(y(0))
          .y1(function (d) {
            return y(d[config.dataField]);
          }),
      );

    g.append("path")
      .datum(dataSlice)
      .attr("fill", "none")
      .attr("stroke", config.color)
      .attr("stroke-width", 2)
      .attr(
        "d",
        d3
          .line()
          .x(function (d, i) {
            return x(i);
          })
          .y(function (d) {
            return y(d[config.dataField]);
          }),
      );

    g.append("circle")
      .attr("fill", config.color)
      .attr("r", 3)
      .attr("cx", x(dataSlice.length - 1))
      .attr("cy", y(dataSlice[dataSlice.length - 1][config.dataField]));
  } else 
  if(!config.cumulative)
  {
    g.selectAll("bar")
      .data(dataSlice)
      .enter()
      .append("rect")
      .style("fill", function (d, i) {
        var c = config.color;
        if (i == 13) c = d3.rgb(c).darker(1);
        return c;
      })
      .attr("x", function (d, i) {
        return x(i);
      })
      .attr("width", barWidth)
      .attr("y", function (d) {
        return y(d[config.dataField]);
      })
      .attr("height", function (d) {
        return chartHeight - y(d[config.dataField]);
      });
  }

  if (config.cumlative) {
    g.append("line")
      .attr("x1", x(6.9))
      .attr("x2", x(7.1))
      .attr("y1", 37)
      .attr("y2", 37)
      .attr("class", "weekBar");
  }
};

dashboardComponents.setWidgetTitle = function (g, text, link, detail, lastDate) {

  g.append("line")
    .attr("x1", 0)
    .attr("x2", 10000)
    .attr("y1", BASELINE_WIDGET_TITLE + 5)
    .attr("y2", BASELINE_WIDGET_TITLE + 5)
    .attr("class", "separator");

  if (link) {
    text = text + " [details available]";
  }

  var text = g
    .append("text")
    .style('font-size', FONT_SIZE_LABELS)
    .style('font-weight', 'bold')
    .text(text)
    .attr("y", BASELINE_WIDGET_TITLE);

  if (detail == dashboard.DETAIL_LOW || dashboard.DETAIL_MEDIUM) {
    text.style("font-size", "9pt");
  }

  if (lastDate) {
    g.append("text")
      .text(lastDate.format("MMM DD, YYYY"))
      .style('font-size', FONT_SIZE_LABELS)
      .style('fill', COLOR_LABELS)
      .attr("y", BASELINE_WIDGET_TITLE + 15);
  }

  if (link) {
    text.classed("hasLink", true);
    text.on("click", function () {
      window.open(link);
    });
    text.on("mouseover", function () {
      d3.select(this).classed("hover", true);
    });
    text.on("mouseout", function () {
      d3.select(this).classed("hover", false);
    });
  }
};

dashboardComponents.setLabel = function (g, text, x, y) {
  g.append("text").text(text)
  .attr("font-size", FONT_SIZE_LABELS)
  .style('fill', COLOR_LABELS)
  .attr("x", x)
  .attr("y", y);
};

dashboardComponents.setLabelRow2 = function (g, text, x, y) {
  g.append("text")
    .text(text)
    .attr("font-size", FONT_SIZE_LABELS)
    .attr("x", x)
    .style('color', '#888')
    .attr("y", y + 15);
};

