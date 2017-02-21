/*Following is my array to list the sources of the articles used in the last hw*/
			var Article_sources = ["News Deeply", "News Deeply", "New York Times", "News Deeply", "Room for one more"];
			/*Following is my number to show how many articles were added in the last hw*/
			var tot_articles = 4;
			/*Following is my string, which is the name of the NYTimes article I used in the last hw*/
			var NYTimes_Title = "For Stranded Somali Refugees, Friend of America’ Is a Deadly Label";
			/*Following is my object variable, which includes an array, string, and an object, and number*/
			var Articles = {
				"About_NYTimes_Article" : "This is a profile on Ismail Ali Ibrahim to depict the effects of a Trump ban on Somali refugees.",
				"Title_NYTimes_Article" : "For Stranded Somali Refugees, Friend of America’ Is a Deadly Label",
				"Other_Article_Titles" : ["Peer Pressure Drives Somalis to Risk Europe Odyssey", "Somali Refugees Decry Empty Promises on Return From Dadaab", "An Intimate Look at the Global Refugee Crisis"],
				"My_fav_News_Deeply_article" : {
					"title" : "Peer Pressure Drives Somalis to Risk Europe Odyssey"
				}
			};
			/*Following is my boolean variable about the articles used in my first research*/
			var my_boolean_for_articles = true;
			/*Following is a list of objects about the articles I used in my first research*/
			var my_research_project_articles = [{

				"title" : "Peer Pressure Drives Somalis to Risk Europe Odyssey",

				"source" : "News Deeply",

				"url" : "https://www.newsdeeply.com/refugees/articles/2016/11/11/peer-pressure-drives-somalis-to-risk-europe-odyssey",

				"image" : "https://newsdeeply.imgix.net/20161111125236/Fishermen-in-Berbera-Somaliland.jpg?w=640&fit=max&q=60",

				"summary" : "Peer pressure is put on Somali youth to migrate to Western regions. Tahriib is the popular word used from Arabic by Somalis to mean the journey to the West. And, social media puts even more pressure on youth as migrant friends post pictures and videos of success in making the journey. Those social media footprints lead other Somali youths to follow optimistically thinking there is a guarantee to a better life in the West."

			}, {

				"title" : "Somali Refugees Decry Empty Promises on Return From Dadaab",

				"source" : "News Deeply",

				"url" : "https://www.newsdeeply.com/refugees/articles/2016/10/11/somali-refugees-decry-empty-promises-on-return-from-dabaab",

				"image" : "https://newsdeeply.imgix.net/20161011063028/IMG_3932.jpg?w=640&fit=max&q=60",

				"summary" : "Somalis who were displaced to Kenya are returning to Somalia under voluntary repatriation, but are disappointed with what they find. Apparently, Somalia suffers from limited access to supplies and food making repatriation is a difficult road ahead despite promises of peace from UNHCR. Kenya also announced that it would be closing Dadaab camp by the end of 2016 and sending Somalis back home, which has complicated matters further."

			}, {

				"title" : "For Stranded Somali Refugees, 'Friend of America' Is a Deadly Label",

				"source" : "NYTimes",

				"url" : "https://www.nytimes.com/2017/02/02/world/africa/trump-refugee-ban-somalia.html?_r=0",

				"image" : "https://static01.nyt.com/images/2017/02/02/world/03Somalis-sub/02Somalis-sub-master768.jpg",

				"summary" : "This is a profile on Ismail Ali Ibrahim to depict the effects of a Trump ban on Somali refugees. With optimism and hope of finding a better life in the West, Somali refugees will leave almost everything behind to make the journey. And, the ban has left refugees who were prepared to make Tahriib vulnerable to extremist groups suspicious of their motives for migrating to the U.S. Al Shabab, which has an influence around camps suspects migrants of providing intelligence information to authorities in the West. This puts lives at risk, which has amplified after the Trump ban leaving many Somalis grounded and surrounded by danger."

			}, {

				"title" : "An Intimate Look at the Global Refugee Crisis",

				"source" : "News Deeply",

				"url" : "https://www.newsdeeply.com/refugees/community/2016/06/20/an-intimate-look-at-the-global-refugee-crisis",

				"image" : "https://newsdeeply.imgix.net/20160620103724/04_19DAYS.jpg?w=640&fit=max&q=60",

				"summary" : "This piece looks at the resettlement that takes place in Canada when refugees first arrive. It opens with a scene that takes place in a resettlement center, which is usually the starting point for migrants from Somalia coming to Canada. And, the scene carries through to explain the significance of resettlement centers to the refugees who arrive, and is seen as their first home in a region that they will soon learn to call home whether temporarily or permanently. The resettlement centers serve at a learning facility on how to assimilate into a Canadian way of life for people coming for the first time."

			}];

			/*Goal: go through my list of articles and console.log only the ones that came from the new york times.
			 * If it's not from NYTimes, console.log "Not NYTimes"
			 *
			 *Replicating the steps taken above in creating a list of objects and a for loop for hw
			 *Including a conditional statement too.
			 *To go through the list of articles looking for ones published by NYTimes, I'll create a loop*/

			function IDNYTimes(listOfArticles) {

				for (var counter = 0; counter < listOfArticles.length; counter++) {
					/*everything that I want to do to each item, must be between these brackets.
					 * Following, I'll form a variable called currentArticle that will play the role of a counter in my for loop*/

					var currentArticle = listOfArticles[counter];
					/*creating the 'if statement' that is meant to use the loop for specifically searching for NYTimes articles*/

					if (currentArticle.source == "NYTimes") {
						/*printing the results of currentArticle in the console*/
						console.log(currentArticle);
						/*printing the statement*/
						//this is another way of commenting, separate type
					} else {
						console.log("Not NYTimes")
					}
				}
			}

			IDNYTimes(my_research_project_articles)

			IDNYTimes(Article_sources)
			
			/*Following is the using the console.log function to print one element from my array and one attribute in my object.*/
			console.log(Article_sources[1]);
			/*Printing the summary of the NYTime Article*/
			console.log(Articles["About_NYTimes_Article"]);
			
			console.log("loop's done!")