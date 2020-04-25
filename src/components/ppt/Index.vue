<template>
  <div class="reveal">
    <Content />
  </div>
</template>

<script>
import Content from "@/components/ppt/base/Content.vue";
import Reveal from "reveal.js/js/reveal";
import { zoom } from "../../assets/plugin/zoom-js/zoom";
export default {
  data() {
    return {};
  },
  mounted() {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = window.location.search.match(/print-pdf/gi)
      ? "/static/css/print/pdf.css"
      : "/static/css/print/paper.css";
    document.getElementsByTagName("head")[0].appendChild(link);
    Reveal.initialize({
      hash: true,
      controls: true,
      progress: true,
      center: true,
      transition: "slide" // none/fade/slide/convex/concave/zoom
    });
    var RevealZoom = this.RevealZoom();
    Reveal.registerPlugin("zoom", RevealZoom);
  },
  components: {
    Content
  },
  methods: {
    RevealZoom: function() {
      return {
        init: function() {
          Reveal.getRevealElement().addEventListener("mousedown", function(
            event
          ) {
            var defaultModifier = /Linux/.test(window.navigator.platform)
              ? "ctrl"
              : "alt";

            var modifier =
              (Reveal.getConfig().zoomKey
                ? Reveal.getConfig().zoomKey
                : defaultModifier) + "Key";
            var zoomLevel = Reveal.getConfig().zoomLevel
              ? Reveal.getConfig().zoomLevel
              : 2;

            if (event[modifier] && !Reveal.isOverview()) {
              event.preventDefault();
              zoom.to({
                x: event.clientX,
                y: event.clientY,
                scale: zoomLevel,
                pan: false
              });
            }
          });
        }
      };
    }
  }
};
</script>