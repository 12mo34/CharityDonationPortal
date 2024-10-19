document.addEventListener("DOMContentLoaded", function () {
    const createCampaignForm = document.getElementById("create-campaign-form");
    const campaignsContainer = document.getElementById("campaigns-container");

    createCampaignForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const campaignTitle = document.getElementById("campaign-title").value;
        const campaignDescription = document.getElementById("campaign-description").value;
        const campaignGoal = parseFloat(document.getElementById("campaign-goal").value);

        if (!campaignTitle || !campaignDescription || isNaN(campaignGoal)) {
            alert("Please fill in all campaign details.");
            return;
        }

        const campaign = {
            title: campaignTitle,
            description: campaignDescription,
            goal: campaignGoal,
        };

        addCampaignToCampaignList(campaign);
        createCampaignForm.reset();
        alert("Campaign created successfully!");

        storeCampaign(campaign);
    });

    function addCampaignToCampaignList(campaign) {
        const campaignElement = document.createElement("div");
        campaignElement.classList.add("campaign");
        campaignElement.innerHTML = `
            <h3>${campaign.title}</h3>
            <p>${campaign.description}</p>
            <p>Goal Amount: Rs.${campaign.goal}</p>
            <button class="donate-button" data-campaign-id="${generateCampaignId()}">Donate</button>
        `;

        campaignsContainer.appendChild(campaignElement);
    }

    function storeCampaign(campaign) {
        const storedCampaigns = JSON.parse(localStorage.getItem("campaigns")) || [];

        storedCampaigns.push(campaign);
        localStorage.setItem("campaigns", JSON.stringify(storedCampaigns));
    }

    function generateCampaignId() {

        return Math.floor(Math.random() * 1000000);
    }
});
