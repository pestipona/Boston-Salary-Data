# City of Boston Salary Data:

![](boston.png)

## I. Walk through Boston public salaries data:

This project is an example of a **web application**, that uses **dynamic data** which can be *manipulated* and *displayed* on a **web page**. This data is usually provided by a **web server** or a **database** comes in a specific format called **JSON**.

According to [JSON.org](https://www.json.org/json-en.html)

```text
JSON (JavaScript Object Notation) is a lightweight data-interchange format.
It is easy for humans to read and write.
And, it is easy for machines to parse and generate.
```

This web application loops through a set of **JSON data** which has been converted to an **array** representing **Boston employee salaries** to find the **top five income earners** in the city of Boston. The **data** has already been **converted to an array**. There are over 22,000 elements in the array. So, it's quite large data. This project helps a programmer build experience of handling large data.

Here is a snapshot of the different parts of the data and files that will be used.

* ```data.js```: This file contains **Boston employees' salary data**. This data is in the **JSON format**, and has already been converted to an **array**, so **array methods** can be used in the **program**. Here's an example of the data for a **single employee**:

```javascript
"data":[
   [
      1,
      "17439B12-1A55-4B6A-980E-5BAC15841AC4",
      1,
      1426008064,
      "525314",
      1426008064,
      "525314",
      "{\n}",
      "Adario,Anthony J", // employee name
      "Supvising Claims Agent (Asd)",
      "ASD Human Resources",
      "98538.32", //employee salary
      "0.00",
      "1842.87",
      "0.00",
      "0.00",
      "0.00",
      "0.00",
      "100381.19",
      "02132"
   ]
]
```

The **name of the employee** is commented on ```line 8```, and **their salary** is commented on ```line 11```. This will be useful in **comparing employee's salaries** to **each other** as well as finding the **top five earners** later on. The data has already been formatted **into an array**, so **array methods** can be used on it, like ```splice```, ```slice```, ```sort```, and ```filter```.

* ```index.html```: This in the HTML file used to display data on the web browser.

```javascript
function renderPosts(boston, container) {
  var people = boston.data;
  const len = boston.data.length;
  var html = "";
  for (let i = 0; i < len; i++) {
    html +=
      '<li class="post">' +
      "<h2>" +
      people[i][8] +
      "</h2>" +
      "<h3>" +
      people[i][11] +
      "</h3>";
  }
  container.innerHTML = '<ul id = "data">' + html + "</ul>";
}
```

* ```walkboston.js```: This is the **JavaScript file** where the **frontend code** which finds the **top five earners** in the city of Boston is written, and **rendered** then on the **webpage**.

**Programmer's Notes:**

* The **HTML element** containing the **top earners** has an ID of ```"topSalaries"```
* The **name data** of the **employee** is at ```index 8``` in the array, and the **salary data** is at ```index 11```.
* The web application **displays the name** of the **employee** and the **total salary** earned by each employee.
* The **array.sort()** method will be used to check and see if each person in the array of employees earns more or less than the previous person in the array. To find out more information, check out ```array.sort()```.
* The web application also demonstrates the ```array.filter()``` method by **filtering out** any people who make **more than 200k annually**.

## II. Filter Arrays:

The second part of the web applicaiton  will display all employees who make a minimum of 200,000 in salary on the web page.

**Programmer's Notes:**

* The **HTML element** containing the top earners has an ID of `````"topEmployees".`````

* The web application **displays the name** of the employee and the **total salary earned** by them.

* The ```array.filter()``` method will be used to **filter out employees** who make *more than 200k per year*.

## III. Gathering the Data:

To gather the salary data used for the web application it will be downloaded from the following URL using the following steps.

In the project directory do a  ```curl``` command to get the **Boston City data**, but this just prints out the data in the terminal.

```bash
curl  https://pollysnips.s3.amazonaws.com/bostonEmployeeSalaries.json
```

To **save the data**, store it into a **json file** ```data.js``` using the following command.

```bash
curl -o data.js https://pollysnips.s3.amazonaws.com/bostonEmployeeSalaries.json
```

## IV. Online Reference:

### html:
* [\<li>: The List Item element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li#:~:text=Attributes-,%3A%20The%20List%20Item%20element,usually%20displayed%20using%20bullet%20points.)
* [\<ul>: The Unordered List element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul#:~:text=The%20HTML%20element%20represents,rendered%20as%20a%20bulleted%20list.)
* [Element.innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)
* [HTML DOM Element innerText](https://www.w3schools.com/jsref/prop_node_innertext.asp)

### Sorting Arrays:
* [Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
* [JavaScript Sorting Arrays](https://www.w3schools.com/js/js_array_sort.asp)

### Filtering Arrays:
* [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
* [JavaScript Array filter()](https://www.w3schools.com/jsref/jsref_filter.asp)