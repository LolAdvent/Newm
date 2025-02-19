const h1Ref = document.getElementById("title");

    console.log("h1Ref:" , h1Ref);

    const letterGradeRefs = document.getElementsByClassName ("letter grade");

    console.log("LetterGradeRefs:", letterGradeRefs);
    
    const pRef = document.querySelector("p");

    console.log("pRef:", pRef);

    const h1AltRef = document.querySelector("#title");
    console.log("h1AltRef:", h1AltRef);

    const liRefs = document.querySelector("li");
    console.log("liRefs:", liRefs);

    const ulRefs = document.querySelector("ul");
    console.log("ul textcontent", ulRefs.textContent);

    console.log("ul textContent", ulRefs.textContent);
    console.log("ul Innertext", ulRefs.innerText);
    console.log("ul InnerHtml", ulRefs.innerHTML);

pRef.innerText = "the cozy farmer"

ulRefs.innerHTML = "<liclass='lettergrade'> C </li>";
ulRefs.innerHTML += "<liclass='lettergrade'>D </li>";
ulRefs.innerHTML += "<liclass='lettergrade' style = 'display:none'> E </li>";
ulRefs.innerHTML += "<liclass='lettergrade'> F </li>";

h1Ref.style.backgroundColor = "red";
h1AltRef.style.backgroundColor="white";