document.addEventListener("DOMContentLoaded", () => {
    const membersContainer = document.getElementById("members-container");
    const gridViewButton = document.getElementById("grid-view");
    const listViewButton = document.getElementById("list-view");

    // Load members from JSON file
    fetch("data/members.json")
        .then((response) => response.json())
        .then((members) => {
            displayMembers(members, "grid");
        })
        .catch((error) => console.error("Error loading members:", error));

    // Display members based on the selected view
    function displayMembers(members, view) {
        membersContainer.className = view === "grid" ? "grid-view" : "list-view";
        membersContainer.innerHTML = "";

        members.forEach((member) => {
            const memberElement = document.createElement("div");
            memberElement.className = "member";

            if (view === "grid") {
                memberElement.innerHTML = `
                    <img src="${member.image}" alt="${member.name}">
                    <h3>${member.name}</h3>
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <a href="${member.website}" target="_blank">Visit Website</a>
                    <span class="membership">${member.membership}</span>
                `;
            } else {
                memberElement.innerHTML = `
                    <h3>${member.name}</h3>
                    <p>${member.address} | ${member.phone}</p>
                    <a href="${member.website}" target="_blank">Visit Website</a>
                    <span class="membership">${member.membership}</span>
                `;
            }

            membersContainer.appendChild(memberElement);
        });
    }

    // Toggle between grid and list views
    gridViewButton.addEventListener("click", () => {
        fetch("data/members.json")
            .then((response) => response.json())
            .then((members) => displayMembers(members, "grid"));
    });

    listViewButton.addEventListener("click", () => {
        fetch("data/members.json")
            .then((response) => response.json())
            .then((members) => displayMembers(members, "list"));
    });
});
