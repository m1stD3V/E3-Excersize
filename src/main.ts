const portrait = document.querySelector<HTMLDivElement>("#portrait")!;
const spin = document.querySelector<HTMLButtonElement>("#spin")!;

// The prototype grew inline. Keep it this way until the refactoring checkpoint.
const face = document.createElementNS("http://www.w3.org/2000/svg", "svg");
face.setAttribute("viewBox", "0 0 200 200");
face.setAttribute("role", "img");
face.setAttribute("aria-label", "A neutral face");

const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");

const linearGradient = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "linearGradient",
);
linearGradient.setAttribute("id", "mono-face-gradient");
linearGradient.setAttribute("x1", "0%");
linearGradient.setAttribute("y1", "0%");
linearGradient.setAttribute("x2", "100%");
linearGradient.setAttribute("y2", "100%");

const stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
stop1.setAttribute("offset", "0%");
stop1.setAttribute("stop-color", "#ffffff"); // White
linearGradient.append(stop1);

const stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
stop2.setAttribute("offset", "33%");
stop2.setAttribute("stop-color", "#aaaaaa"); // Grey
linearGradient.append(stop2);

const stop3 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
stop3.setAttribute("offset", "66%");
stop3.setAttribute("stop-color", "#555555"); // Dark grey
linearGradient.append(stop3);

const stop4 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
stop4.setAttribute("offset", "100%");
stop4.setAttribute("stop-color", "#000000"); // Black
linearGradient.append(stop4);

defs.append(linearGradient);
face.append(defs);

const head = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
head.setAttribute("cx", "100");
head.setAttribute("cy", "100");
head.setAttribute("rx", "78");
head.setAttribute("ry", "86");
head.setAttribute("fill", "url(#mono-face-gradient)");
head.setAttribute("stroke", "#302c29");
head.setAttribute("stroke-width", "4");
face.append(head);

const leftEye = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "ellipse",
);
leftEye.setAttribute("cx", "72");
leftEye.setAttribute("cy", "82");
leftEye.setAttribute("rx", "6");
leftEye.setAttribute("ry", "9");
leftEye.setAttribute("fill", "#302c29");
face.append(leftEye);

const rightEye = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "ellipse",
);
rightEye.setAttribute("cx", "128");
rightEye.setAttribute("cy", "82");
rightEye.setAttribute("rx", "6");
rightEye.setAttribute("ry", "9");
rightEye.setAttribute("fill", "#302c29");
face.append(rightEye);

const nose = document.createElementNS("http://www.w3.org/2000/svg", "line");
nose.setAttribute("x1", "100");
nose.setAttribute("y1", "96");
nose.setAttribute("x2", "96");
nose.setAttribute("y2", "112");
nose.setAttribute("stroke", "#302c29");
nose.setAttribute("stroke-width", "4");
nose.setAttribute("stroke-linecap", "round");
face.append(nose);

const mouth = document.createElementNS("http://www.w3.org/2000/svg", "line");
mouth.setAttribute("x1", "75");
mouth.setAttribute("y1", "137");
mouth.setAttribute("x2", "125");
mouth.setAttribute("y2", "137");
mouth.setAttribute("stroke", "#302c29");
mouth.setAttribute("stroke-width", "4");
mouth.setAttribute("stroke-linecap", "round");
face.append(mouth);

portrait.append(face);

spin.addEventListener("click", () => {
  // Restart rather than accumulate simultaneous animations on repeated clicks.
  for (const animation of face.getAnimations()) animation.cancel();
  face.animate(
    [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
    { duration: 800, easing: "ease-in-out" },
  );
});
