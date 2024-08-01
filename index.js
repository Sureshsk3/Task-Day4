let resumeData = {
  Name: "Sureshkumar P",
  Age: 27,
  Gender: "Male",
  Qualification: "BA",
  Address: {
    flotNum: 20,
    street: "First Street",
    city: "Chennai",
    pincode: 6000036,
    state: "Tamilnadu",
  },
  mobileNumber: "1234567890",
  Email: "sureshguvi@gmail.com",
  LanguageKnown: ["Tamil","English"],
  Experience: "5 Years",
};


// Using For In method
for (i in resumeData){
  console.log(resumeData);
}

// Using For method

for (i=0; i < 1; i++){
  console.log(resumeData);
}

// Using For of method

for(const [key,value] of Object.entries(resumeData)){
  console.log((`${key} : ${value}`))
}

// Using ForEach method

Object.keys(resumeData).forEach(element => {
  console.log(`${element} : ${resumeData[element]}`);
});

