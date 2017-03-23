

var baseUrl = "data/december2016/";


    var width = $("#chart1").width(),
        height = width * 0.7;

    console.log(width);

    $("#chart1").height(height);
    $("#chart2").height(height);
    $("#chart3").height(height);
    $("#chart4").height(height);


    // CHART 1 - TOTAL CALLS

//    var svg1 = d3.select("#chart1")
//        .append("svg")
//        .attr("width", width)
//        .attr("height", height)

d3.csv(baseUrl + "total_calls.csv", function (data) {

  console.log(data);
  d3.select(".total-call-count")
    .text(data[0].calls);
})






    // CHART 2 - CALLS BY DAY


    var margin = { top: 30, right: 30, bottom: 60, left: 30 }

    var width = width - margin.left - margin.right,
        height = height - margin.top - margin.bottom;

    var x1 = d3.scaleBand().rangeRound([0, width]).padding(0.1),
        y1 = d3.scaleLinear().rangeRound([height, 0]);


    var svg2 = d3.select("#chart2")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

    d3.csv(baseUrl + "calls_by_day.csv", function (data) {
        data.forEach( function (d) {
            d.calls = +d.calls;
        })

        data = data.filter( function (d) { return d.week_day !== "Total"; })

        x1.domain(data.map( function (d) { return d.week_day; }))
        y1.domain([0, d3.max(data, function (d) { return d.calls; })])


        svg2.append("g")
            .attr("class", "axis axis-x")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x1))

        svg2.append("g")
            .attr("class", "axis axis-y")
            .call(d3.axisLeft(y1))

        var value = svg2.append("text")
            .text("value")
            .attr("class", "value")
            .attr("x", 10)
            .attr("y", 10)

        svg2.append("g")
            .selectAll(".topbars")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", function (d) { return x1(d.week_day); })
            .attr("y", function (d) { return y1(d.calls); })
            .attr("width", x1.bandwidth)
            .attr("height", function (d) { return height - y1(d.calls); })
            .attr("class", "topbars")

        svg2.append("g")
            .selectAll(".labels2")
            .data(data)
            .enter()
            .append("text")
                .text( function (d) { return d.calls; })
                .attr("x", function (d) { var bandwidth = (x1.bandwidth()); return x1(d.week_day) + bandwidth/2; })
                .attr("y", function (d) { return y1(d.calls) - 5; })
                .style("text-anchor", "middle")
                .attr("class", "labels2")




        console.log(data);

    })






    // CHART 3 - CALLS BY TIME PERIOD

    console.log(height);
    console.log(width);

    var radius = Math.min(width, height) / 2;

    console.log(radius);

    var color = d3.scaleOrdinal()
    .range(["dodgerblue",
"crimson",
"lime",
"aqua"]);

    var arc = d3.arc()
    .outerRadius(radius - 10)
    .innerRadius(radius/2);

    var labelArc = d3.arc()
    .outerRadius(radius + 5)
    .innerRadius(radius + 5);

    var pie = d3.pie()
    .sort(null)
    .value(function(d) { return d.calls; });


    var svg3 = d3.select("#chart3")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)

    var piechart = svg3.append("g")
            .attr("transform", "translate(" + (width /1.6) + "," + (height/2) + ")")

    d3.csv(baseUrl + "calls_by_time.csv", function (data) {

        data.forEach(function (d) {
            d.calls = +d.calls;
        })

        data = data.filter( function (d) { return d.time_period !== "Total"; });

        console.log(data);

        var g = piechart.selectAll(".arc")
            .data(pie(data))
            .enter().append("g")
            .attr("class", "arc");

      g.append("path")
            .attr("d", arc)
            .style("fill", function(d) { return color(d.data.time_period); });


//    g.append("text")
//      .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
//      .attr("dy", ".35em")
//      .text(function(d) { return d.data.time_period; });

        svg3.selectAll(".labels3")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", 20)
            .attr("y", function (d, i) {
                 return (height / 2 + radius) + (15 * i);

            })
            .attr("width", 15)
            .attr("height", 10)
            .style("fill", function(d) { return color(d.time_period); });







         svg3.selectAll(".text3")
            .data(data)
            .enter()
            .append("text")
            .text( function (d) { return d.time_label; })
            .attr("x", 40)
            .attr("y", function (d, i) {
                return (height / 2 + radius) + (15 * i) + 10;

            })
            .attr("width", 10)
            .attr("height", 10)
            .style("text-anchor", "top")
            .attr("class", "text3")








         })





    // CHART 4 - TTYPE OF HELP NEEDED


     var y4 = d3.scaleBand().rangeRound([height, 0]).padding(0.6),
        x4 = d3.scaleLinear().rangeRound([0, width]);




    var svg4 = d3.select("#chart4")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")


    d3.csv(baseUrl + "help_needed.csv", function (data) {
        data.forEach( function (d) {
            d.calls = +d.calls;
        })

//        data = data.filter( function (d) { return d.week_day !== "Total"; })

        y4.domain(data.map( function (d) { return d.help_needed; }))
        x4.domain([0, d3.max(data, function (d) { return d.calls; })])


        svg4.append("g")
            .attr("class", "axis axis-x axis-no-line")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x4))

//        svg4.append("g")
//            .attr("class", "axis axis-y")
//            .call(d3.axisLeft(y4))


        svg4.append("g")
            .selectAll(".bars")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", 0)
            .attr("y", function (d) { return y4(d.help_needed); })
            .attr("height", y4.bandwidth)
            .attr("width", function (d) { return x4(d.calls); })
            .attr("class", "bars")

        svg4.selectAll(".text4")
            .data(data)
            .enter()
            .append("text")
            .text( function (d) { return d.help_needed; })
            .attr("x", 0)
            .attr("y", function (d) { return y4(d.help_needed) - 8; })
            .attr("class", "text4")

          svg4.selectAll("text5")
            .data(data)
            .enter()
            .append("text")
            .text( function (d) { return d.calls; })
            .style("fill", "#000")
            .attr("x", function (d) { return x4(d.calls) + 5; })
            .attr("y", function (d) { return y4(d.help_needed) + 15; })
            .attr("class", "text5")


   console.log(data);


    });

// MOnth switcher

    d3.select("#monthselect").on("change", change)
    function change() {
        var selection = this.options[this.selectedIndex].value;
        if(selection === "dec2016") {
          changeData("december2016");

        }
        else if(selection === "jan2017") {
          changeData("january2017");

          }
          else if(selection === "feb2017") {
            changeData("february2017");

            }

      }

      function changeData(month) {
        console.log(month);
        baseUrl = "data/" + month + "/";
        //update total calls
        d3.csv(baseUrl + "total_calls.csv", function (data) {
          d3.select(".total-call-count").text(data[0].calls);
        })
        //update calls by day
        d3.csv(baseUrl + "calls_by_day.csv", function (data) {
          // y1 = d3.scaleLinear().rangeRound([height, 0]);
          // data = data.filter( function (d) { return d.week_day !== "Total"; })
          // y1.domain([0, d3.max(data, function (d) { return d.calls; })])

            d3.selectAll(".topbars")
              .data(data)
              .transition()
              .duration(2000)
              .attr("y", function (d) { return y1(d.calls); })
              .attr("height", function (d) { return height - y1(d.calls); })

            d3.selectAll(".labels2")
              .data(data)
              .transition()
              .duration(2000)
              .text( function (d) { return d.calls; })
              // .attr("x", function (d) { var bandwidth = (x1.bandwidth()); return x1(d.week_day) + bandwidth/2; })
              .attr("y", function (d) { return y1(d.calls) - 5; })
              .style("text-anchor", "middle")

        })

        //update calls by time PERIOD


  d3.selectAll("#chart3").select("svg").remove();

  var svg3 = d3.select("#chart3")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)

  var piechart = svg3.append("g")
          .attr("transform", "translate(" + (width /1.6) + "," + (height/2) + ")")

  d3.csv(baseUrl + "calls_by_time.csv", function (data) {

      data.forEach(function (d) {
          d.calls = +d.calls;
      })

      data = data.filter( function (d) { return d.time_period !== "Total"; });

      console.log(data);

      var g = piechart.selectAll(".arc")
          .data(pie(data))
          .enter().append("g")
          .attr("class", "arc");

    g.append("path")
          .attr("d", arc)
          .style("fill", function(d) { return color(d.data.time_period); });


          svg3.selectAll(".labels3")
              .data(data)
              .enter()
              .append("rect")
              .attr("x", 20)
              .attr("y", function (d, i) {
                   return (height / 2 + radius) + (15 * i);

              })
              .attr("width", 15)
              .attr("height", 10)
              .style("fill", function(d) { return color(d.time_period); });







           svg3.selectAll(".text3")
              .data(data)
              .enter()
              .append("text")
              .text( function (d) { return d.time_label; })
              .attr("x", 40)
              .attr("y", function (d, i) {
                  return (height / 2 + radius) + (15 * i) + 10;

              })
              .attr("width", 10)
              .attr("height", 10)
              .style("text-anchor", "top")
              .attr("class", "text3")



})


        //update help needed

        d3.csv(baseUrl + "help_needed.csv", function (data) {
          d3.selectAll(".bars")
            .data(data)
            .transition()
            .duration(2000)
            .attr("width", function (d) { return x4(d.calls); })

          d3.selectAll(".text5")
            .data(data)
            .text( function (d) { return d.calls; })
            .transition()
            .duration(2000)

            .attr("x", function (d) { return x4(d.calls) + 5; })
        })

      }
