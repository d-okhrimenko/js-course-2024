const contactList = {
    render(contacts, element) {
        contacts.forEach(contact => {
            let section = document.createElement("section");
            section.classList.add("contact");
            section.insertAdjacentHTML("beforeend", `<h2>${contact.firstName} ${contact.lastName}</h2>`);
            section.insertAdjacentHTML("beforeend", `<p>Phone: ${contact.phone}</p>`);
            section.insertAdjacentHTML("beforeend", `<p>Email: ${contact.email}</p>`);
            section.insertAdjacentHTML("beforeend", `<p>${contact.description}</p>`);
            element.appendChild(section);
        });

    },

    renderWithTemplate(contacts, element, template) {
        let html = "";
        contacts.forEach(contact => {
            html += Mustache.render(template, contact);
        });
        element.innerHTML = html;
    }
}