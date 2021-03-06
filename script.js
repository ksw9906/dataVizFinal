google.charts.load('current', {'packages':['corechart','controls']});

google.charts.setOnLoadCallback(getGraphData);

var category = "Creatures";
var deck = "B/G Delirium";
var view = "DeckInfo";

//function to switch views
function switchView(v,deckID){
  
  //if we are already there see ya
  if(view == v){
    return;
  }  
  view = v;
  
  //get the divs and the stuff in them
  var cardInfo = document.getElementById('decks');
  var cate = document.getElementById('categories');
  var cardChart = document.getElementById('cardChart');
  var pieChart = document.getElementById('pieChart');
  var cardCharts = document.getElementById('cardCharts');
  var deckInfo = document.getElementById('deck_div');

  //check if it is is original view
  if(view=="CardInfo"){
    //make back button visible
    document.getElementById("DeckInfo").style.display = "block";
    
    //clear the deck info
    
    while(deckInfo.hasChildNodes())
    {
      deckInfo.removeChild(deckInfo.firstChild);
    }  
    
    //append the text
    var p = document.createElement('p');
    p.appendChild(document.createTextNode("Select a Deck:"));
    cardInfo.appendChild(p);
    
    //create the select
    var s = document.createElement('select');
    s.setAttribute("id","deckOptions");
    
    //create the deck options
    var optionBG = document.createElement('option');
    optionBG.setAttribute("value","B/G Delirium");
    optionBG.appendChild(document.createTextNode("B/G Delirium"));
    //add it to the select
    s.appendChild(optionBG);

    //create the deck options
    var optionWB = document.createElement('option');
    optionWB.setAttribute("value","White-Blue Flash");
    optionWB.appendChild(document.createTextNode("White-Blue Flash"));
    //add it to the select
    s.appendChild(optionWB);

    //create the deck options
    var optionM = document.createElement('option');
    optionM.setAttribute("value","Mardu Vehicles");
    optionM.appendChild(document.createTextNode("Mardu Vehicles"));
    //add it to the select
    s.appendChild(optionM);
    
    //create the deck options
    var optionRW = document.createElement('option');
    optionRW.setAttribute("value","RW Vehicles");
    optionRW.appendChild(document.createTextNode("RW Vehicles"));
    //add it to the select
    s.appendChild(optionRW);

    //create the deck options
    var optionRB = document.createElement('option');
    optionRB.setAttribute("value","R/B Aggro");
    optionRB.appendChild(document.createTextNode("R/B Aggro"));
    //add it to the select
    s.appendChild(optionRB);
    
    //create the deck options
    var optionBR = document.createElement('option');
    optionBR.setAttribute("value","B/R Zombies");
    optionBR.appendChild(document.createTextNode("B/R Zombies"));
    //add it to the select
    s.appendChild(optionBR);
    
    //create the deck options
    var optionRG = document.createElement('option');
    optionRG.setAttribute("value","Red-Green Aetherworks");
    optionRG.appendChild(document.createTextNode("Red-Green Aetherworks"));
    //add it to the select
    s.appendChild(optionRG);
    
    //create the deck options
    var optionGR = document.createElement('option');
    optionGR.setAttribute("value","G/R Energy");
    optionGR.appendChild(document.createTextNode("G/R Energy"));
    //add it to the select
    s.appendChild(optionGR);
    
    //create the deck options
    var optionJ = document.createElement('option');
    optionJ.setAttribute("value","Jeskai Control");
    optionJ.appendChild(document.createTextNode("Jeskai Control"));
    //add it to the select
    s.appendChild(optionJ);    

    //create the deck options
    var optionRGE = document.createElement('option');
    optionRGE.setAttribute("value","RG Energy");
    optionRGE.appendChild(document.createTextNode("RG Energy"));
    //add it to the select
    s.appendChild(optionRGE);
    
    //create the deck options
    var optionB = document.createElement('option');
    optionB.setAttribute("value","Bant Aggro");
    optionB.appendChild(document.createTextNode("Bant Aggro"));
    //add it to the select
    s.appendChild(optionB);    

    //create the deck options
    var optionJD = document.createElement('option');
    optionJD.setAttribute("value","Jeskai Dynavolt");
    optionJD.appendChild(document.createTextNode("Jeskai Dynavolt"));
    //add it to the select
    s.appendChild(optionJD);
  
    //apend the select to the div
    cardInfo.appendChild(s);
    
    //Start work on the categories
    var pCard = document.createElement('p');
    pCard.appendChild(document.createTextNode("Select a Card Category"));
    cate.appendChild(pCard);
    
    var pCreature = document.createElement('p');
    pCreature.appendChild(document.createTextNode("Creatures"));
    pCreature.setAttribute("id","creatures");
    pCreature.setAttribute("class","filterButton");
    cate.appendChild(pCreature);
    
    var pPlaneswalker = document.createElement('p');
    pPlaneswalker.appendChild(document.createTextNode("Planeswalkers"));
    pPlaneswalker.setAttribute("id","planeswalkers");
    pPlaneswalker.setAttribute("class","filterButton");
    cate.appendChild(pPlaneswalker);
    
    var pSpells = document.createElement('p');
    pSpells.appendChild(document.createTextNode("Spells"));
    pSpells.setAttribute("id","spells");
    pSpells.setAttribute("class","filterButton");
    cate.appendChild(pSpells);

    var pArtifacts = document.createElement('p');
    pArtifacts.appendChild(document.createTextNode("Artifacts"));
    pArtifacts.setAttribute("id","artifacts");
    pArtifacts.setAttribute("class","filterButton");
    cate.appendChild(pArtifacts);

    var pEnchantments = document.createElement('p');
    pEnchantments.appendChild(document.createTextNode("Enchantments"));
    pEnchantments.setAttribute("id","enchantments");
    pEnchantments.setAttribute("class","filterButton");
    cate.appendChild(pEnchantments);    

    var pLands = document.createElement('p');
    pLands.appendChild(document.createTextNode("Lands"));
    pLands.setAttribute("id","lands");
    pLands.setAttribute("class","filterButton");
    cate.appendChild(pLands);       
    
    var pSideboard = document.createElement('p');
    pSideboard.appendChild(document.createTextNode("Sideboard"));
    pSideboard.setAttribute("id","sideboard");
    pSideboard.setAttribute("class","filterButton");
    cate.appendChild(pSideboard);    
    
    //give the buttons their functionality
    init();
    
    //call the deck id now!
    document.getElementById('deckOptions').value = deckID;
    drawCardChart();
  }
  else{
    while(cate.hasChildNodes())
    {
      cate.removeChild(cate.firstChild);
    }
    
    while(cardInfo.hasChildNodes())
    {
      cardInfo.removeChild(cardInfo.firstChild);
    }   
    
    while(cardChart.hasChildNodes())
    {
      cardChart.removeChild(cardChart.firstChild);
    }  
    
    while(pieChart.hasChildNodes())
    {
      pieChart.removeChild(pieChart.firstChild);
    }  
    
    var dashDiv = document.createElement('div');
    dashDiv.setAttribute('id','dashboard_div');
    
    //make the two divs
    var rDiv = document.createElement('div');
    rDiv.setAttribute("id","range_div");
    dashDiv.appendChild(rDiv);
    
    var cDiv = document.createElement('div');
    cDiv.setAttribute("id","chart_div");
    dashDiv.appendChild(cDiv);
    
    var hDiv = document.createElement('div');
    hDiv.style.display = "none";
    hDiv.setAttribute("id","hidden_div");
    dashDiv.appendChild(hDiv);
    
    deckInfo.appendChild(dashDiv);
    
    getGraphData();
    
    //make back button visible
    document.getElementById("DeckInfo").style.display = "none";
  }
}

//Bar Chart
function drawCardChart(e) {  
  if(e){    
    if (e.target.classList.contains("filterButton")){
      category = e.target.innerHTML;
    
      var buttons = document.querySelectorAll(".filterButton");
      for(var i = 0; i < buttons.length; i++){
        buttons[i].classList.remove("selected");
      }

      e.target.classList.add("selected");    
    } else{
      deck = e.target.value;
    }
  }

  var query = new google.visualization.Query("https://docs.google.com/spreadsheets/d/1pKY5tvh7YFk18kpQPhaKxJtcKl11U0KpAR1Dz-XXj_0/gviz/tq?usp=sharing&gid=0");
  var queryString = "select A, E, F where D = " + "'" + category + "'" + "and B = " + "'" + deck + "'";
  query.setQuery(queryString);
  query.send(handleQueryResponse);
  
  var pieQuery = new google.visualization.Query("https://docs.google.com/spreadsheets/d/1pKY5tvh7YFk18kpQPhaKxJtcKl11U0KpAR1Dz-XXj_0/gviz/tq?usp=sharing&gid=27391810");
  var queryString = "select A, B, C, D, E, F, G where A= " + "'" + deck + "'";
  pieQuery.setQuery(queryString);
  pieQuery.send(handleQueryResponsePieChart);
}

function handleQueryResponse(response){
  if(response.isError()) {
    console.log('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }        
  var data = response.getDataTable();

  var graphData = new google.visualization.DataTable();
  graphData.addColumn('string','Card');
  graphData.addColumn('number','Price');
  graphData.addColumn({'type':'string', 'role': 'tooltip', 'p':{'html':true}});
         
  var cardDataArray = [];
  for(var i = 0; i < data.Tf.length;i++){
    var cardName = data.Tf[i].c[0].v;
    var imgUrl = "assets/" + cardName + ".jpg";
    cardDataArray[i] = [cardName,data.Tf[i].c[2].v,createCustomHTMLContent(imgUrl,cardName,data.Tf[i].c[2].v,data.Tf[i].c[1].v)];
  }
  
  graphData.addRows(cardDataArray);
  
  var options = {title: deck + ' Card Prices',
                 width:700,
                 height:500,
                 legend: 'none',
                 hAxis: {
                   title: 'Card'
                 },
                 vAxis: {
                   title: 'Price'
                 },
                 tooltip: {isHtml: true}
                };

  var chart = new google.visualization.ColumnChart(document.getElementById('cardChart'));
  chart.draw(graphData, options);
}

function createCustomHTMLContent(url,cardName,singlePrice,amount){
  var price = singlePrice.toFixed(2);
  return '<div style="padding:5px;font-family:sans-serif;font-size:14px">' +
    '<p style="margin:0;">' + cardName + '</p><br/>' +
    '<img src="' + url + '" style = "width: 150px;height:209px;"><br/>' +
    '<p style="margin:0;">Price: $' + price + '</p><br/>' + 
    '<p style="margin:0;">Amount in Deck: ' + amount + '</p><br/></div>';
}

function handleQueryResponsePieChart(response){
  var data = response.getDataTable();
  
  var graphData = new google.visualization.DataTable();
  graphData.addColumn('string','category');
  graphData.addColumn('number','percent');  
  
  var pieDataArray = [];
  for(var i = 0; i < data.Tf[0].c.length-1;i++){
    var category = data.Sf[i+1].label;
    var percent = parseInt(data.Tf[0].c[i+1].f);
    pieDataArray[i] = [category,percent];
  }
  
  graphData.addRows(pieDataArray);
  
  var options = {title: deck + ' Card Breakdown',
                 width:700,
                 height:500
                };
  
  var chart = new google.visualization.PieChart(document.getElementById('pieChart'));
  chart.draw(graphData, options);
}

function init(){
  document.getElementById("creatures").onclick = drawCardChart;
  document.getElementById("planeswalkers").onclick = drawCardChart;
  document.getElementById("spells").onclick = drawCardChart;
  document.getElementById("artifacts").onclick = drawCardChart;
  document.getElementById("enchantments").onclick = drawCardChart;
  document.getElementById("lands").onclick = drawCardChart;
  document.getElementById("sideboard").onclick = drawCardChart;
  
  document.getElementById("deckOptions").onchange = drawCardChart;
}

var dataArray;

function handleQueryResponseDeck(response){
		
		 if (response.isError()) {
			alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
			return;
		}

		var data = response.getDataTable();
		//var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
		//chart.draw(data, {width: 800, height: 400, is3D: true});

        dataArray = [];
        for(var i = 0; i < data.Tf.length;i++){
          dataArray[i] = [data.Tf[i].c[0].v,data.Tf[i].c[1].v];
        }
  
        drawTooltipChart();
}

function drawChart(){
  
  var graphData = new google.visualization.DataTable();
  graphData.addColumn('string', 'Deck');        
  graphData.addColumn('number', 'Total Deck Price');
  graphData.addColumn({
    type:'string',
    label: 'Tooltip Chart',
    role: 'tooltip',
    'p': {'html':true}
  });

  graphData.addRows(dataArray);
  
  //Create a dashboard.
  var dashboard = new google.visualization.Dashboard(
      document.getElementById('dashboard_div'));

  // Create a range slider, passing some options
  var rangeSliderDeck = new google.visualization.ControlWrapper({
      'controlType': 'NumberRangeFilter',
      'containerId': 'range_div',
      'options': {
          'filterColumnLabel': 'Total Deck Price'
      }
  });


  var chartDeck = new google.visualization.ChartWrapper({
      "chartType":"ColumnChart",
      "containerId":"chart_div",
      "options": {'title':'Standard Deck Prices',
                  'width':1000,
                  'height':800,
                  'tooltip': {isHtml:true}
                 }
  });      

  dashboard.bind(rangeSliderDeck,chartDeck);
  // Instantiate and draw our chart, passing in some options.

  //add the select event listener
  google.visualization.events.addListener(chartDeck,'select',
  function(){            

    var selectedItem = dashboard.getSelection()[0];

    if (selectedItem) {
      var deck = graphData.getValue(selectedItem.row,0);

      switchView("CardInfo",deck);
    }
  });

  dashboard.draw(graphData);
}

	  
function getGraphData() {		
  var url = "https://docs.google.com/spreadsheets/d/1pKY5tvh7YFk18kpQPhaKxJtcKl11U0KpAR1Dz-XXj_0/edit?usp=sharing&sheet=DeckPrices";

  var query = new google.visualization.Query(url);

  query.send(handleQueryResponseDeck);
}

function drawTooltipChart(){
  var query = new google.visualization.Query("https://docs.google.com/spreadsheets/d/1pKY5tvh7YFk18kpQPhaKxJtcKl11U0KpAR1Dz-XXj_0/gviz/tq?usp=sharing&gid=1197097986");
  query.send(handleQueryResponseTooltip);
}

function handleQueryResponseTooltip(response){
  var tooltipData = response.getDataTable();
  var tooltipOptions = {
    title:'Deck Composition',
    legend: {position: 'labeled', textStyle: 'black'},
    pieSliceText: 'none'    
  }
  
  var view = new google.visualization.DataView(tooltipData);
  
  for(var i = 0; i < 12; i++){
    view.setColumns([0,i+1]);
    
    var hiddenDiv = document.getElementById('hidden_div');  
    var tooltipChart = new google.visualization.PieChart(hiddenDiv);
    
    google.visualization.events.addListener(tooltipChart, 'ready', function(){
      var tooltipImg = '<img src="' + tooltipChart.getImageURI() + '">';
      dataArray[i][2] = tooltipImg;
    });
    
    tooltipChart.draw(view,tooltipOptions);
  }
  drawChart();
}




















