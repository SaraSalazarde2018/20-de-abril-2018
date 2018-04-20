//aquí debes trabajar con datos de un arreglo o un objeto, incluido directamente en la variable data.
var data;
var w = 450;
var h = 450;
var ciudades = [
    {name:'Republica Dominicana',population:5631839},
    {name:'Estados Unidos',population:848023},
    {name:'America y Francia',population:824006},
    {name:'China',population:296253}
  ];
  //seleccionar todos los "circle" en el documento  
  d3.selectAll('circle')
    .data(ciudades)
    .attr('fill','#0B718E')
    .attr('r', function(d) {
      return d.population / 57000;
    })
  //seleccionar todos los "text" en el documento      
  d3.selectAll('text')
    .data(ciudades)
    .attr('fill','#021772')                      
    .text(function(d) {
      return ". " + d.name;
    });