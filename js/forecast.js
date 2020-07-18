

// geo_api = "https://geolocation-db.com/json/697de680-a737-11ea-9820-af05f4014d91";


// ======================================================================================
// const forecast_api = {
//   key: "c517c0c3ad2e0dcd0f59a7e134decd6a",
//   base: "https://api.openweathermap.org/data/2.5/"
// }

// const forecast_searchbox = document.querySelector('#search_box');
// forecast_searchbox.addEventListener('keypress', setQuerys);

// function setQuerys(e) {
// 	if (e.keyCode == 13) {
// 		get_Results(forecast_searchbox.value);
// 		// console.log(searchbox.value);
// 	}
// }

// get_Results("Dhaka");

// function get_Results(query) {
//   fetch(`${forecast_api.base}forecast?q=${query}&units=metric&APPID=${forecast_api.key}`)
//   .then(forecast => {
// 		return forecast.json();
// 		// console.log(query);
//     }).then(display_Results);
// }


// function display_Results(forecast) {
// 			let forecast_city = document.querySelector('.forecast_city');
// 		// forecast_city.innerText = `${forecast.city.name}`;

// 		let now = new Date();
// 		let date = document.querySelector('.forecast_date');
// 		// date.innerText = dateBuilder(now);
// 		// date.innerText = `${forecast.list[i].dt_txt}`;

// 		let forecast_day = document.querySelector('.forecast_day');
// 		// forecast_day.innerText = days(now);
// 		// forecast_day.innerText = unixTime(forecast.list[i].dt);

// 		let forecast_temp = document.querySelector('.forecast_current_temp');
// 		// forecast_temp.innerHTML = `${Math.round(forecast.list[i].main.temp)}<span>°c</span>`;

// 		let weather_el = document.querySelector('.forecast_Weather');
// 		// weather_el.innerText = forecast.list[i].weather[0].main;

// 		let forecast_low_temp = document.querySelector('.forecast_low_temp');
// 		// forecast_low_temp.innerText = `${Math.round(forecast.list[i].main.temp_min)}°c`;

// 		let forecast_high_temp = document.querySelector('.forecast_high_temp');
// 		// forecast_high_temp.innerText = `${Math.round(forecast.list[i].main.temp_max)}°c`;

// 		let forecast_Icon = document.querySelector('.forecast_Icon');
// 		// forecast_Icon.innerHTML = `<img src="http://openweathermap.org/img/w/${forecast.list[i].weather[0].icon}.png">`;

// 		let forecast_wind_speed = document.querySelector('.forecast_wind_speed');
// 		// forecast_wind_speed.innerText = `${forecast.list[i].wind.speed} mph`;

// 	for(var i = 0; i < forecast.list.length; i++){



// 		var row = '<tr>'+
//  			'<td class="forecast_date">'+ forecast.list[i].dt_txt +'</td>'+
// 			'<td class="forecast_day">'+ unixTime(forecast.list[i].dt) +'</td>'+
// 			'<td class="forecast_current_temp">'+ Math.round(forecast.list[i].main.temp) +'</td>'+
//  			'<td class="forecast_low_temp">'+ Math.round(forecast.list[i].main.temp_min) +'</td>'+
//  			'<td class="forecast_high_temp">'+ Math.round(forecast.list[i].main.temp_max) +'</td>'+
//  			'<td class="forecast_Weather">'+ forecast.list[i].weather[0].main +'</td>'+
// 			'<td class="forecast_Icon"><img src="http://openweathermap.org/img/w/'+forecast.list[i].weather[0].icon+'.png"></td>'+
// 			'<td class="forecast_wind_speed">'+ forecast.list[i].wind.speed +'</td>'+
// 			'<td class="forecast_city">'+ forecast.city.name +'</td>'+
// 		'</tr>';

// 	}


















// =========================================================================


$(document).ready(function(){

	$(window).on("load", function(){
		get_Results("Dhaka");
	});

	const forecast_api = {
	  key: "c517c0c3ad2e0dcd0f59a7e134decd6a",
	  base: "https://api.openweathermap.org/data/2.5/"
	}

	const forecast_searchbox = document.querySelector('#search_box');
	forecast_searchbox.addEventListener('keypress', setQuerys);


	function setQuerys(e) {
		if (e.keyCode == 13) {
			$('.weather_status').empty();
			get_Results(forecast_searchbox.value);
			// console.log(searchbox.value);
		}
	}

	// get_Results("Dhaka");


	// api data fetching
	function get_Results(query) {
	  fetch(`${forecast_api.base}forecast?q=${query}&units=metric&APPID=${forecast_api.key}`)
	  .then(forecast => {

			return forecast.json();
			// console.log(query);
	    }).then(display_Results);
	}



	function display_Results(forecast) {
		let now = new Date();
		let cityname = `${forecast.city.name}, ${forecast.city.country}`;
		var img = '<img src="http://openweathermap.org/img/w/' +forecast.list[0].weather[0].icon+'.png">';

		$('.location .city').text(cityname);
		$('.location .date').text(dateBuilder(now));
		$('.current .temp').text(Math.round(forecast.list[0].main.temp));
		$('.current .weather').text(forecast.list[0].weather[0].main);
		$('.low').text(forecast.list[0].main.temp_min);
		$('.high').text(forecast.list[0].main.temp_max);
		$('.icon').html(img);
		$('.humidity').text(forecast.list[0].main.humidity);
		$('.wind_speed').text(forecast.list[0].wind.speed);
		$('.wind_deg').text(forecast.list[0].wind.deg);
		$('.sunrise').text(unixTime(forecast.city.sunrise));
		$('.sunset').text(unixTime(forecast.city.sunset));

		// $('.weather_status').append(row);
		

		// Loop for next 7 days weather update

		for(var i = 0; i < forecast.list.length; i++){

			var row = '<tr>'+
				'<td class="forecast_date">'+ (i+1) +'</td>'+
	 			'<td class="forecast_date">'+ forecast.list[i].dt_txt +'</td>'+
				'<td class="forecast_day">'+ unixTime(forecast.list[i].dt) +'</td>'+
				'<td class="forecast_current_temp">'+ Math.round(forecast.list[i].main.temp) +'</td>'+
	 			'<td class="forecast_low_temp">'+ Math.round(forecast.list[i].main.temp_min) +'</td>'+
	 			'<td class="forecast_high_temp">'+ Math.round(forecast.list[i].main.temp_max) +'</td>'+
	 			'<td class="forecast_Weather">'+ forecast.list[i].weather[0].main +'</td>'+
				'<td class="forecast_Icon"><img src="http://openweathermap.org/img/w/'+forecast.list[i].weather[0].icon+'.png"></td>'+
				'<td class="forecast_wind_speed">'+ forecast.list[i].wind.speed +'</td>'+
				'<td class="forecast_city">'+ cityname +'</td>'+
			'</tr>';

			 $('.weather_status').append(row);

		}

	}


	function unixTime(unixTime){
		var unix_date = new Date(unixTime * 1000);

		var hours = unix_date.getHours();
		var minutes = "0" + unix_date.getMinutes();
		var seconds = "0" + unix_date.getSeconds();

		return `${hours}:${minutes.substr(-2)}:${seconds.substr(-2)}`;
	}

	function dateBuilder(d) {

		let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

		let day = days[d.getDay()];
		let date = d.getDate();
		let month = months[d.getMonth()];
		let year = d.getFullYear();

		return `${day} ${date} ${month} ${year}`;
	}

	function days(d) {
		// let date = new Date(d);
		let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

		let day = days[d.getDay()];

		return day;
	}


});
