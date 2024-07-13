data = [
    {
        "keyword": "barbecue",
        "id": 100,
        "category": {
            "id": 1,
            "name": "Culinary",
            "created_at": "2024-07-03T18:16:24.606549Z"
        },
        "match": false
    },
    {
        "keyword": "steak house",
        "id": 173,
        "category": {
            "id": 1,
            "name": "Culinary",
            "created_at": "2024-07-03T18:16:24.606549Z"
        },
        "match": false
    },
    {
        "keyword": "restaurant",
        "id": 88,
        "category": null,
        "match": false
    },
    {
        "keyword": "mongolian grill",
        "id": 172,
        "category": {
            "id": 1,
            "name": "Culinary",
            "created_at": "2024-07-03T18:16:24.606549Z"
        },
        "match": false
    },
    {
        "keyword": "bar",
        "id": 96,
        "category": {
            "id": 2,
            "name": "Amenity",
            "created_at": "2024-07-03T18:16:24.606549Z"
        },
        "match": false
    },
    {
        "keyword": "outdoor%20seating",
        "id": 98,
        "category": null,
        "match": false
    },
];

const isSameText = (a, b) => a.toUpperCase() === b.toUpperCase();

//find items that have a category, and have a category name of S.
function filterNested(list, text) {
    //two ways, A. long way (many nested loops on multiple lines), or B. functional (single line)
    //A.
    // const output = [];
    // for(i=0;i<list.length;i++){
    //     const item = list[i];
    //     if(item.category != null){
    //         if(item.category.name.toUpperCase() === text.toUpperCase()){
    //             output.push(item);
    //         }
    //     }
    // }
    // return output;
    // B.
    return list.filter(item => item.category != null && isSameText(item.category.name, text));
}

const result = filterNested(data, "Culinary");
// console.log("ALL COUNT:", data.length);
// console.log("FILTERED COUNT:", result.length);

console.log(JSON.stringify(result, "", 4));

//baby step - read category name of first item (thats guranteed to have a category ane therefore name)
// console.log(data[0].category.name); // should be Culinary
