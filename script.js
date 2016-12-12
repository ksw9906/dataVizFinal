google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawCardChart);
		google.charts.setOnLoadCallback(drawChart);

var category = "Creatures";
var deck = "B/G Delirium";
var view = "Deck";

//function to switch views
function switchView(){
  
  //get the divs and the stuff in them
  var cardInfo = document.getElementById('decks');
  var cate = document.getElementById('categories');
  var deckInfo = document.getElementById('dashboard_div');

  //check if it is is original view
  if(view=="Deck"){
    //clear the deck info
    deckInfo.html('');
    
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
    pArtifacts.setAttribute("id","Artifacts");
    pArtifacts.setAttribute("class","filterButton");
    cate.appendChild(pArtifacts);

    var pEnchantments = document.createElement('p');
    pEnchantments.appendChild(document.createTextNode("Enchantments"));
    pEnchantments.setAttribute("id","Enchantments");
    pEnchantments.setAttribute("class","filterButton");
    cate.appendChild(pEnchantments);    

    var pLands = document.createElement('p');
    pLands.appendChild(document.createTextNode("Lands"));
    pLands.setAttribute("id","lands");
    pLands.setAttribute("class","filterButton");
    cate.appendChild(pLands);    
    
    init();
  }
  else{
    
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
  query.send(handleQueryResponseDeck);
}

function handleQueryResponseDeck(response){
  if(response.isError()) {
    console.log('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }        
  var data = response.getDataTable();
  
  var graphData = new google.visualization.DataTable();
  graphData.addColumn('string','Card');
  graphData.addColumn('number','Price');
  graphData.addColumn({'type':'string', 'role': 'tooltip', 'p':{'html':true}});
         
  var dataArray = [];
  for(var i = 0; i < data.Tf.length;i++){
    var cardName = data.Tf[i].c[0].v;
    var imgUrl = "assets/" + cardName + ".jpg"
    dataArray[i] = [cardName,data.Tf[i].c[2].v,createCustomHTMLContent(imgUrl,cardName,data.Tf[i].c[2].v,data.Tf[i].c[1].v)]
  }
  
  graphData.addRows(dataArray);
  
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

function init(){
  document.getElementById("creatures").onclick = drawCardChart;
  document.getElementById("planeswalkers").onclick = drawCardChart;
  document.getElementById("spells").onclick = drawCardChart;
  document.getElementById("artifacts").onclick = drawCardChart;
  document.getElementById("enchantments").onclick = drawCardChart;
  document.getElementById("lands").onclick = drawCardChart;
  
  document.getElementById("deckOptions").onchange = drawCardChart;
}

function handleQueryResponse(response){
		
		 if (response.isError()) {
			alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
			return;
		}

		var data = response.getDataTable();
		
		console.log(data);
		//var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
		//chart.draw(data, {width: 800, height: 400, is3D: true});
		
			//Create the data table.
		var graphData = new google.visualization.arrayToDataTable([
			[data.Sf[0].label,data.Sf[1].label, {role: 'style'}],
			[data.Tf[0].c[0].v, data.Tf[0].c[1].v, 'black'],
			[data.Tf[1].c[0].v, data.Tf[1].c[1].v, 'blue'],
			[data.Tf[2].c[0].v, data.Tf[2].c[1].v, 'red'],
			[data.Tf[3].c[0].v, data.Tf[3].c[1].v, 'red'],
			[data.Tf[4].c[0].v, data.Tf[4].c[1].v, 'black'],
			[data.Tf[5].c[0].v, data.Tf[5].c[1].v, 'black'],
			[data.Tf[6].c[0].v, data.Tf[6].c[1].v, 'green'],
			[data.Tf[7].c[0].v, data.Tf[7].c[1].v, 'blue'],
			[data.Tf[8].c[0].v, data.Tf[8].c[1].v, 'green'],
			[data.Tf[9].c[0].v, data.Tf[9].c[1].v, 'blue'],
			[data.Tf[10].c[0].v, data.Tf[10].c[1].v, 'black'],
			[data.Tf[11].c[0].v, data.Tf[11].c[1].v, 'black']
	  ]);
	
			//Create a dashboard.
			var dashboard = new google.visualization.Dashboard(
				document.getElementById('dashboard_div'));
	
			// Create a range slider, passing some options
			var rangeSlider = new google.visualization.ControlWrapper({
				'controlType': 'NumberRangeFilter',
				'containerId': 'range_div',
				'options': {
					'filterColumnLabel': 'Total Deck Price'
				}
			});
			
			
			var chart = new google.visualization.ChartWrapper({
				"chartType":"ColumnChart",
				"containerId":"chart_div",
				"options": {'title':'Standard Deck Prices',
												'width':1000,
												'height':800}
			});	
			
			dashboard.bind(rangeSlider,chart);
			// Instantiate and draw our chart, passing in some options.
			
			dashboard.draw(graphData);
	  }
	  
	function drawChart() {
		
		var url = "https://docs.google.com/spreadsheets/d/1pKY5tvh7YFk18kpQPhaKxJtcKl11U0KpAR1Dz-XXj_0/edit?usp=sharing&sheet=DeckPrices";
		
		var query = new google.visualization.Query(url);
		
		query.send(handleQueryResponse);
	}

window.onload = init;