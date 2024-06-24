document.addEventListener("DOMContentLoaded", function() {
    const itemsContainer = document.getElementById("items");

    // Sample data for items (you can replace this with dynamic data from a backend)
    const items = [
        {
            image: "wallet.jpg",
            image: "wallet.jpg",
            price: "$50",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            contact: "Owner's Number: 123-456-7890"
        },
        {
            image: "item2.jpg",
            price: "$100",
            description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            contact: "Owner's Number: 987-654-3210"
        }
    ];

    // Function to display items
    function displayItems() {
        itemsContainer.innerHTML = "";
        items.forEach((item, index) => {
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("item");

            const image = document.createElement("img");
            image.src = item.image;
            image.alt = "Item Image";
            image.addEventListener("click", function() {
                displayModal(item.image);
            });

            const price = document.createElement("p");
            price.innerHTML = `<strong>${item.price}</strong>`;

            const description = document.createElement("p");
            description.textContent = item.description;

            const contact = document.createElement("p");
            contact.innerHTML = `<strong>${item.contact}</strong>`;

            itemDiv.appendChild(image);
            itemDiv.appendChild(price);
            itemDiv.appendChild(description);
            itemDiv.appendChild(contact);

            itemsContainer.appendChild(itemDiv);
        });
    }

    // Function to display modal with full image
    function displayModal(imageSrc) {
        const modal = document.getElementById("myModal");
        const modalImg = document.getElementById("img01");

        modal.style.display = "block";
        modalImg.src = imageSrc;

        const span = document.getElementsByClassName("close")[0];
        span.onclick = function() {
            modal.style.display = "none";
        };
    }

    displayItems();
});
