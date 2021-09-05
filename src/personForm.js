export default {
  pages: {
    start: {
      view: [
        {
          type: "text",
          key: "firstname",
          label: "Firstname",
          validation: {required: true}
        },
        {
          type: "buttonGroup",
          buttons: [
            {
              label: "Next",
              position: "right",
              action: {transition: "page2"}
            }
          ]
        }
      ]
    },
    page2: {
      view: [
        {
          type: "text",
          key: "address.zip",
          label: "Zip",
          validation: {
            schema: {
              type: "string",
              pattern: "^[0-9]+$"
            },
            required: true,
            message: "Must only contain numbers"
          }
        },
        {
          type: "date",
          key: "birthday",
          label: "Birthday"
        },
        {
          type: "buttonGroup",
          buttons: [
            {
              label: "Back",
              position: "left",
              action: {
                transition: "page2"
              }
            },
            {
              label: "Finish",
              position: "right",
              action: {
                rel: "save-reload",
                href: "http://localhost:5000/api"
              }
            }
          ]
        }
      ]
    }
  },
  start: "start"
}
