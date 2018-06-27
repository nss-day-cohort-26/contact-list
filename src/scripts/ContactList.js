const contactCollectionModule = require("./ContactCollection")

const contactList = Object.create({}, {
  "buildContactList": {
    value: function () {
      contactCollectionModule.getContacts()
        .then((response) => {
          console.log("all contacts", response)
          const currentListRef = document.querySelector(".list-contacts-article")
          if (currentListRef) {
            currentListRef.remove()
          }
          const contactsArticle = document.createElement("article")
          contactsArticle.className = "list-contacts-article"
          const contactModule = require("./Contact")
          response.forEach(contact => {
            contactsArticle.appendChild(contactModule.createContactComponent(contact))
          });
          document.querySelector("#display-container").appendChild(contactsArticle)
        })
    }
  }
})

module.exports = contactList
