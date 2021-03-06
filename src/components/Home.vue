<template>
<div>


        <p>webview</p><button @click="goBack">go back</button>
        <webview id="view" src="https://www.github.com/" style="display:inline-flex; width:100%; height:900px"></webview>
        <!--<webview ref="frame" class="frame" :preload="injectScript" />-->
        <!--<BrowserWindow />-->

</div>
</template>

<script>

export default {
  name: "Home",

  data: () => ({
      view: null,
  }),
  methods: {
    mySiteLoaderScript(url) {
      const frame = this.$refs.frame;

      // Initialize event listeners on the Webview
      addListeners();

      // Set the URL, start loading
      frame.setAttribute("src", url);

      // Bind events
      function addListeners() {
        frame.addEventListener("dom-ready", contentloaded);
        frame.addEventListener("ipc-message", receiveHandshake);
      }

      // Remove all event listeners
      function removeListeners() {
        frame.removeEventListener("dom-ready", contentloaded);
        frame.removeEventListener("ipc-message", receiveHandshake);
      }

      // Once webview content is loaded, request its data
      function contentloaded() {
        frame.send("requestData");
      }

      // Triggered when we receive a response from the Webview
      // This is the `ipc-message` event
      function receiveHandshake(event) {
        // Only listen to replyData messages
        if (event.channel !== "replyData") return false;

        //const data = event.args[0];
        //const title = data.title;
        //const favicon = data.favicon;

        // Remove listeners once data has been received
        removeListeners();
      }
    },

    goBack(){
        this.view.goBack()
    }
  },
  mounted() {
    this.mySiteLoaderScript("https://stackoverflow.com");
    this.view = document.getElementById('view')
    this.view.canGoBack()
  },
  components:{},
  computed: {
    injectScript() {
      //const appPath = require("electron").remote.app.getAppPath();
      return null/*`file://${require("path").resolve(
        __dirname,
        "../mixins/injectWebPageScript.js"
      )}`;*/
    },
  },
};
</script>