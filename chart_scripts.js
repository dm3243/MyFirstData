/**
 * @author Danish Mehboob
 */
			// Here I am trying out a new commenting style
			// And, I am loading the Visualization API and the corechart package from it.
			google.charts.load('current', {
				'packages' : ['corechart']
			});

			/*When google calls back with the contents of the "corechart" package execute the "drawChart" function
			 * Keeping the comment above the way it is b/c it is easy to understand ^^ for reference
			 */
			google.charts.setOnLoadCallback(DrawMyCharts);

			/*This is the drawChart function
			 * It draws a chart on the page
			 */
			function DrawMyCharts() {
				DrawFirstChart();
				DrawSecondChart();
			}

			function DrawFirstChart() {
				// Call on the DataTable (is it a package?) to  to make a new DataTable type
				var HolderOfCharts = new google.visualization.DataTable();
				/*Add a column of type string, labeled "People Origin"*/
				HolderOfCharts.addColumn('string', 'People Origin');
				/*Add a column of type number, labeled "Refugees"*/
				HolderOfCharts.addColumn('number', 'Refugees');
				/*My rows must be an array of arrays, or in other words: a list of lists, where each item in the list has the same number of elements as I have columns
				 * Also, the data types should match those that I were declared in my "addColumn" function calls.
				 */
				
				HolderOfCharts.addRows(chart1Data);

				/*The customization variable is an object, which includes some customization applied to the graphic;
				 * We will need to add to this extensively to make visualizations we actually want to publish.
				 * We can add or subtract from here depending on how we want the chart to be rendered, e.g. width, height
				 */
				var customization = {
					'title' : 'Largest Refugee Populations in Minnesota Represented by Country of Origin',
					'width' : 550,
					'height' : 300
				};

				/*Creating a variable: "StoreChartResults", in which I am storing the results of calling the bar chart.
				 * I must apply the 'HolderOfCharts' variable as a unique ID in order to get the chart when called in the id of a DIV later.
				 */
				var StoreChartResults = new google.visualization.ColumnChart(document.getElementById('HolderOfCharts'));

				/*setting the parameters on the StoreChartResults.draw, taking from the HolderOfCharts variable and the customization varible too.*/
				StoreChartResults.draw(HolderOfCharts, customization);
			}

			/*Introduce second draw chart function.*/

			function DrawSecondChart() {

				// Call on the DataTable (is it a package?) to  to make a new DataTable type
				var SecondHolderOfCharts = new google.visualization.DataTable();
				/*Add a column of type string, labeled "People Origin"*/
				SecondHolderOfCharts.addColumn('string', 'People Origin');
				/*Add a column of type number, labeled "People"*/
				SecondHolderOfCharts.addColumn('number', 'Refugees');
				/*My rows must be an array of arrays, or in other words: a list of lists, where each item in the list has the same number of elements as I have columns
				 * Also, the data types should match those that I were declared in my "addColumn" function (I can't change funciton names, can I?) calls.
				 */
				
				/*Need to use the format from Google bar charts annotation (https://developers.google.com/chart/interactive/docs/gallery/columnchart) to describe another data type to be added to the elements in Chart2Data variable*/
				SecondHolderOfCharts.addColumn({type:'string', role:'annotation'})
				
				SecondHolderOfCharts.addRows(Chart2Data);

				/*The customization variable is an object, which includes some customization applied to the graphic;
				 * We will need to add to this extensively to make visualizations we actually want to publish.
				 * We can add or subtract from here depending on how we want the chart to be rendered, e.g. width, height
				 */
				var customization = {
					'title' : 'Countries on the Muslim Ban Represented in Minnesota Population Breakdown of Refugees',
					'width' : 500,
					'height' : 600,
					'bar': {
						'groupWidth': 5
					}
				};

				/*Creating a variable: "StoreChartResults2", in which I am storing the results of calling the bar chart.
				 * I must apply the 'SecondHolderOfCharts' variable as a unique ID in order to get the chart when called in the id of a DIV later.
				 */
				var StoreChartResults2 = new google.visualization.BarChart(document.getElementById('SecondHolderOfCharts1'));

				/*setting the parameters on the StoreChartResults2.draw, taking from the SecondHolderOfCharts variable and the customization varible too.*/
				StoreChartResults2.draw(SecondHolderOfCharts, customization);
			}