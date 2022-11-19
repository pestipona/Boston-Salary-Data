// Define the function renderPosts
function renderPosts(boston, container) {
    const people = boston.data;
    const len = boston.data.length;
    let html = '';
    for (let i = 0; i < len; i++) {
        html +=
            '<li class="post">' + '<h2>' + people[i][8] + '</h2>' + '<h3>' + people[i][11] + '</h3>';
    }
    // using the container parameter's innerHTML property to insert Html tags
    container.innerHTML = '<ul id = "data">' + html +'</ul>';
}

// Define the function renderTopSalaries
function renderTopSalaries(boston, container) {
    var people = boston.data;
    var topSalaries = people.sort((a, b) => b[11] - a[11]).slice(0, 5);
    const len = topSalaries.length;
    var html = '';

    for (let i = 0; i < len; i++) {
        html +=
            '<li class = "top">' + '<h2>' + topSalaries[i][8] + '</h2>' + '<h3>' + topSalaries[i][11] + '</h3>';
    }
    container.innerHTML = '<ul id = "topSalaries">' + html + '</ul>';
}

// Define the function renderTopEmployees
function renderTopEmployees(boston, container) {
    var people = boston.data;
    var topEmployees = people.filter((a) => a[11] > 200000);
    const len = topEmployees.length;
    var html = '';

    for (let i = 0; i < len; i++) {
        html +=
            '<li class = "top">' + '<h2>' + topEmployees[i][8] + '</h2>' + '<h3>' + topEmployees[i][11] + '</h3>';
    }
    container.innerHTML = '<ul id = "topEmployees">' + html + '</ul>';
}

renderPosts(boston, document.getElementById('container'));
renderTopSalaries(boston, document.getElementById('container'));
renderTopEmployees(boston, document.getElementById('container'));