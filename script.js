const giftCard = document.getElementById("giftCard");
const claimedCard = document.getElementById("claimedCard");

const claimButton = document.getElementById("claimButton");
const backButton = document.getElementById("backButton");

claimButton.addEventListener("click", () => {
    claimButton.textContent = "Checking gift...";
    claimButton.disabled = true;

    setTimeout(() => {
        giftCard.classList.add("hidden");
        claimedCard.classList.remove("hidden");
    }, 1000);
});

backButton.addEventListener("click", () => {
    claimedCard.classList.add("hidden");
    giftCard.classList.remove("hidden");

    claimButton.textContent = "Accept Gift";
    claimButton.disabled = false;
});
