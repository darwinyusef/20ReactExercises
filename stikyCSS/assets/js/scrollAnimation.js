const { animate, scroll, inView } = Motion

scroll(
    (progress) => {
        if (progress == 0 || progress == 1) {
            animate(document.getElementById('sticky4'), { top: 0, position: "relative", background: "#ff0000" }, { once: false });
        } else {
            animate(document.getElementById('sticky4'), { top: 0, position: "sticky", background: "#ff0000" }, { once: false });
        }
    },
    { target: document.getElementById("frame4"), offset: ["start end", "end start"] }
)

scroll(
    (progress) => {
        if (progress == 0 || progress == 1) {
            animate(document.getElementById('sticky20'), { top: 0, position: "relative", background: "#ff0000" }, { once: false });
        } else {
            animate(document.getElementById('sticky20'), { top: 0, position: "sticky", background: "#ff0000" }, { once: false });
        }
    },
    { target: document.getElementById("frame2"), offset: ["start end", "end start"] }
)



/* Prueba realizada a las animaciones con INVIEW

const { animate, scroll, inView } = Motion
 
  scroll((progress) => {
      console.log(`Scroll horizontal: ${progress}`);
  }, { axis: "x" });
 
  inView("#sticky4", (info) => {
      animate(info.target, { top: 0, position: "sticky", background: "#ff0000" }, { once: false });
  })
 
  inView("#sticky8", (info) => {
      animate(document.getElementById('sticky4'), { top: 0, position: "relative", background: "#ff0000" }, { duration: 2 }, { once: false });
  })
*/