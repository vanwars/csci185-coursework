function getRandomColor() {
    const colors = ["red", "orange", "yellow", "teal", "hotpink", "violet"];
    const randInt = Math.floor(Math.random() * colors.length);
    return colors[randInt];
}

const studentList = [
    {
        name: "Atlas",
        image_url: "https://i.pravatar.cc/150?id=1",
        favorite_color: "aquamarine",
    },
    {
        name: "Avery",
        image_url: "https://i.pravatar.cc/150?id=2",
        favorite_color: getRandomColor(),
    },
    {
        name: "Cali",
        image_url: "https://i.pravatar.cc/150?id=3",
        favorite_color: "yellow",
    },
    {
        name: "Cameron",
        image_url: "https://i.pravatar.cc/150?id=4",
        favorite_color: getRandomColor(),
    },
    {
        name: "Carol",
        image_url: "https://i.pravatar.cc/150?id=5",
        favorite_color: getRandomColor(),
    },
    {
        name: "Dean",
        image_url: "https://i.pravatar.cc/150?id=6",
        favorite_color: getRandomColor(),
    },
    {
        name: "Destiny",
        image_url: "https://i.pravatar.cc/150?id=7",
        favorite_color: getRandomColor(),
    },
    {
        name: "Dylan",
        image_url: "https://i.pravatar.cc/150?id=8",
        favorite_color: getRandomColor(),
    },
    {
        name: "Heather",
        image_url: "https://i.pravatar.cc/150?id=9",
        favorite_color: getRandomColor(),
    },
    {
        name: "Jack",
        image_url: "https://i.pravatar.cc/150?id=10",
        favorite_color: getRandomColor(),
    },
    {
        name: "Joe",
        image_url: "https://i.pravatar.cc/150?id=11",
        favorite_color: getRandomColor(),
    },
    {
        name: "Keiran",
        image_url: "https://i.pravatar.cc/150?id=12",
        favorite_color: getRandomColor(),
    },
    {
        name: "Kelly",
        image_url: "https://i.pravatar.cc/150?id=13",
        favorite_color: getRandomColor(),
    },
    {
        name: "Maria",
        image_url: "https://i.pravatar.cc/150?id=14",
        favorite_color: getRandomColor(),
    },
    {
        name: "Merlin",
        image_url: "https://i.pravatar.cc/150?id=15",
        favorite_color: getRandomColor(),
    },
    {
        name: "Natasha",
        image_url: "https://i.pravatar.cc/150?id=16",
        favorite_color: getRandomColor(),
    },
    {
        name: "Nicholas",
        image_url: "https://i.pravatar.cc/150?id=17",
        favorite_color: getRandomColor(),
    },
    {
        name: "Olivia",
        image_url: "https://i.pravatar.cc/150?id=18",
        favorite_color: getRandomColor(),
    },
    {
        name: "Rinta",
        image_url: "https://i.pravatar.cc/150?id=19",
        favorite_color: getRandomColor(),
    },
    {
        name: "Trey",
        image_url: "https://i.pravatar.cc/150?id=20",
        favorite_color: getRandomColor(),
    },
];

// Your code goes here....
const containerEl = document.querySelector("#output_container");

function showStudents() {
    for (let i = 0; i < studentList.length; i++) {
        console.log(i, studentList[i]);
        console.log(i, studentList[i].favorite_color);
        const myTemplate = `
            <section class="card">
                <img src="${studentList[i].image_url}" />
                <p>Name: <strong>${studentList[i].name}</strong></p>
                <p>Favorite Color: <strong>${studentList[i].favorite_color}</strong></p>
            </section>
        `;
        containerEl.insertAdjacentHTML("afterbegin", myTemplate);
    }
}

function clearContainer() {
    containerEl.innerHTML = "";
}
