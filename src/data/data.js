const appData = {
  step: 0
};
const userData = {
  monthly: true,
  addOns: [],
  plan: [],
  user: null,
  subConfirmed: false
};
const pageData = [
  {
    page: "",
    info: "",
    data: {
      header: {
        title: "Welcome",
        content: "This is Gamify, the place of ultimate gaming Experience."
      },
      content: {
        title: "Welcome to lorem gaming",
        details: "A place for unfathomable and exiting gaming experience."
      },
      footer: {
        next: "/info",
        prev: null
      }
    }
  },
  {
    page: "info",
    info: "your info",
    data: {
      header: {
        title: "Personal info",
        content: "Please provide your name, email address and phone number."
      },
      content: false,
      footer: {
        next: "/plans",
        prev: "/"
      }
    }
  },
  {
    page: "plans",
    info: "Select plan",
    data: {
      header: {
        title: "Select your plan",
        content: "You have the option of monthly or yearly billing"
      },

      footer: {
        next: "/add-ons",
        prev: "/info"
      },
      content: [
        {
          iconUrl: "icon-arcade.svg",
          type: "Arcade",
          rate: 9,
          discount: 2,
          isActive: true
        },
        {
          iconUrl: "icon-arcade.svg",
          type: "advanced",
          rate: 12,
          discount: 2,
          isActive: false
        },
        {
          iconUrl: "icon-arcade.svg",
          type: "Pro",
          rate: 15,
          discount: 2,
          isActive: false
        }
      ]
    }
  },
  {
    page: "add-ons",
    info: "add-ons",
    data: {
      header: {
        title: "Pick add-ons",
        content: "Add-ons help enhance your gaming experience"
      },

      footer: {
        next: "/summary",
        prev: "/plans"
      },
      content: [
        {
          title: "Online services",
          content: "Access to multiplayer games",
          price: 1
        },
        {
          title: "Larger storage",
          content: "Extra 1TB of cloud save",
          price: 2
        },
        {
          title: "Customizable profile",
          content: "Custom theme on your profile",
          price: 2
        }
      ]
    }
  },
  {
    page: "summary",
    info: "summary",
    data: {
      header: {
        title: "Finishing up",
        content: "Double check if everything looks OK before confirming."
      },

      footer: {
        next: "/thanks",
        prev: "/add-ons"
      }
    }
  },
  {
    page: "thanks",
    info: "",
    data: {
      header: {
        title: "Thank you for gaming with us",
        content: "Stay alert for new updates on our gaming services."
      },

      footer: {
        next: null,
        prev: "/summary"
      },
      content: {
        title: "Thank you!",
        details:
          "Thanks for confirming your subscription! We hope you have fun using our platform. if you ever need support, please feel free to email us at support@loremgaming.com"
      }
    }
  },
  {
    page: "*",
    info: "",
    data: {
      header: {
        title: "",
        content: ""
      },
      content: {
        title: "Error 404! : Page not found.",
        details:
          "Please contact us at support@loremgaming.com to log complains."
      }
    }
  }
];
export { appData, pageData, userData };
