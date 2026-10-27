const portrait = document.querySelector<HTMLDivElement>("#portrait")!;
const spin = document.querySelector<HTMLButtonElement>("#spin")!;

function buildFace(portrait: HTMLDivElement) {
  // The prototype grew inline. Keep it this way until the refactoring checkpoint.
  const face = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  face.setAttribute("viewBox", "0 0 200 200");
  face.setAttribute("role", "img");
  face.setAttribute("aria-label", "A neutral face");

  const head = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "ellipse",
  );
  head.setAttribute("cx", "100");
  head.setAttribute("cy", "100");
  head.setAttribute("rx", "78");
  head.setAttribute("ry", "86");
  head.setAttribute("fill", "#f3cf87");
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

  const teethCount = 5;
  const toothWidth = 8;
  const startX = 82;

  for (let i = 0; i < teethCount; i++) {
    const tooth = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "polygon",
    );

    const x1 = startX + i * toothWidth;
    const x2 = x1 + toothWidth / 2;
    const x3 = x1 + toothWidth;

    tooth.setAttribute("points", `${x1},137 ${x2},145 ${x3},137`);
    tooth.setAttribute("fill", "#fffff");
    tooth.setAttribute("stroke", "#302c29");
    tooth.setAttribute("stroke-width", "2");
    face.append(tooth);
  }

  for (let i = 0; i < 100; i++) {
    const t = i / 99;
    const x = 60 + t * 80;

    const jawY = 140 + 45 * Math.sin(t * Math.PI);

    const hair = document.createElementNS("http://www.w3.org/2000/svg", "line");
    hair.setAttribute("x1", x.toString());
    hair.setAttribute("y1", jawY.toString());

    const angleOffset = ((i % 5) - 2) * 1.5;
    const length = 6 + (1 % 7);

    hair.setAttribute("x2", (x + angleOffset).toString());
    hair.setAttribute("y2", (jawY + length).toString());
    hair.setAttribute("stroke", "#302c29");
    hair.setAttribute("stroke-width", "2");
    hair.setAttribute("stroke-linecap", "round");
    face.append(hair);
  }

  portrait.append(face);

  return face;
}

const face = buildFace(portrait);

spin.addEventListener("click", () => {
  // Restart rather than accumulate simultaneous animations on repeated clicks.
  for (const animation of face.getAnimations()) animation.cancel();
  face.animate(
    [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
    { duration: 800, easing: "ease-in-out" },
  );
});
