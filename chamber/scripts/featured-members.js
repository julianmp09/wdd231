// Fetch and display featured members
async function fetchFeaturedMembers() {
    try {
      const response = await fetch("data/members.json");
      if (!response.ok) throw new Error("Failed to load members");
  
      const members = await response.json();
  
      // Filter members with Silver or Gold membership
      const featured = members.filter(
        (member) => member.membership === "Silver" || member.membership === "Gold"
      );
  
      // Randomly select 2-3 members
      const randomMembers = featured
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
  
      // Update the DOM with featured members
      const container = document.querySelector("#featured-members");
      container.innerHTML = randomMembers
        .map(
          (member) => `
          <div class="member-card">
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.membership}</p>
            <p>${member.phone}</p>
            <p>URL: <a href="${member.website}" target="_blank" rel="noopener noreferrer">${member.name}</a></p>
          </div>
        `
        )
        .join("");
    } catch (error) {
      console.error("Error loading featured members:", error);
    }
  }
  
  fetchFeaturedMembers();
  