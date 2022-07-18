(() => {
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // widget-src/code.tsx
  var { widget } = figma;
  var { AutoLayout, Ellipse, Frame, Image, Rectangle, SVG, Text } = widget;
  function Widget() {
    return /* @__PURE__ */ figma.widget.h(AutoLayout, {
      direction: "horizontal",
      horizontalAlignItems: "center",
      verticalAlignItems: "center",
      height: "hug-contents",
      padding: 8,
      fill: "#FFFFFF",
      cornerRadius: 8,
      spacing: 12,
      onClick: () => __async(this, null, function* () {
        yield new Promise((resolve) => {
          figma.showUI(__html__);
          figma.ui.on("message", (msg) => {
            if (msg === "hello") {
              figma.notify("Hello Widgets");
            }
            if (msg === "close") {
              figma.closePlugin();
            }
          });
        });
      })
    }, /* @__PURE__ */ figma.widget.h(Text, {
      fontSize: 32,
      horizontalAlignText: "center"
    }, "Click Me"));
  }
  widget.register(Widget);
})();
