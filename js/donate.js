document.addEventListener("DOMContentLoaded", function () {
    const donationCampaignsContainer = document.getElementById("donation-campaigns-container");

    const message = getURLParameter("message");
    const title = getURLParameter("title");
    const description = getURLParameter("description");
    const goal = parseFloat(getURLParameter("goal"));

    if (message === "added" && title && description && !isNaN(goal)) {

        displayMessage("Campaign added to donations!");


        const campaignElement = document.createElement("div");
        campaignElement.classList.add("campaign");
        campaignElement.innerHTML = `
            <h3>${decodeURIComponent(title)}</h3>
            <p>${decodeURIComponent(description)}</p>
            <p>Goal Amount: Rs.${goal}</p>
            <button class="donate-button" data-campaign-id="${generateCampaignId()}">Donate</button>
        `;

        donationCampaignsContainer.appendChild(campaignElement);
    }



    function displayMessage(message) {

        const messageElement = document.createElement("p");
        messageElement.textContent = message;
        messageElement.classList.add("added-message");

        donationCampaignsContainer.appendChild(messageElement);
    }
});
