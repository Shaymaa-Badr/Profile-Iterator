const data = [
  {
    name: "Shayma",
    age: 30,
    location: "Egypt",
    gender: "Female",
    img: "https://randomuser.me/api/portraits/women/82.jpg",
  },
  {
    name: "Ahmed",
    age: 35,
    location: "Egypt",
    gender: "male",
    img: "https://randomuser.me/api/portraits/men/85.jpg",
  },
  {
    name: "Ali",
    age: 25,
    location: "Egypt",
    gender: "male",
    img: "https://randomuser.me/api/portraits/men/80.jpg",
  },
  {
    name: "Mariam",
    age: 25,
    location: "Egypt",
    gender: "Female",
    img: "https://randomuser.me/api/portraits/women/80.jpg",
  },
];

const profiles = profileIterator(data);
nextProfile();
document.getElementById("next").addEventListener("click", nextProfile);

function nextProfile() {
  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
    document.getElementById("profileDisplay").innerHTML = `
    <ul class = "list-group">
    <li class= "list-group-item">Name: ${currentProfile.name}</li>
    <li class= "list-group-item">Age: ${currentProfile.age}</li>
    <li class= "list-group-item">Location: ${currentProfile.location}</li>
    <li class= "list-group-item">Gender: ${currentProfile.gender}</li>
    </ul>`;

    document.getElementById(
      "imgDisplay"
    ).innerHTML = `<img src= ${currentProfile.img}>`;
  } else {
    window.location.reload();
  }
}

function profileIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}
