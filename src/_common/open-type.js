const mapOpenType = function() {
  return {
    properties: {
      openType: {
        type: String,
        value: ""
      },
      id: String,
      lang: {
        type: String,
        value: "en"
      },
      businessId: Number,
      sessionFrom: String,
      sendMessageTitle: String,
      sendMessagePath: String,
      sendMessageImg: String,
      showMessageCard: Boolean,
      appParameter: String,
      ariaLabel: String
    },
    methods: {
      bindGetUserInfo(event) {
        this.$emit("getuserinfo", event.detail)
      },
      bindContact(event) {
        this.$emit("contact", event.detail)
      },
      bindGetPhoneNumber(event) {
        this.$emit("getphonenumber", event.detail)
      },
      bindError(event) {
        this.$emit("error", event.detail)
      },
      bindLaunchApp(event) {
        this.$emit("launchapp", event.detail)
      },
      bindOpenSetting(event) {
        this.$emit("opensetting", event.detail)
      }
    }
  }
}

module.exports = mapOpenType
