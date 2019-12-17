import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({

    el: "#app",

    data: {
        allCountries: [{population: 0}]

    },

    computed: {
      totalPopulation: function(){
        return this.allCountries.reduce((total, country) => {
          return total + country.population
        }, 0);
      }
    },

    mounted(){
      this.fetchCountries()
    },

    methods: {
      fetchCountries: function(){
        const request = fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then(data => this.allCountries = data)
      }


    }



  })

});
