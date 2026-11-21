import { l as s } from "./c-7Q4J33FN.js";
s();
self.onmessage = (M) => {
  let { id: L, blob: q } = M.data || {};
  createImageBitmap(q).then(
    (J) =>
      self.postMessage(
        {
          id: L,
          bm: J,
        },
        [J],
      ),
    (J) =>
      self.postMessage({
        id: L,
        err: String((J && J.message) || J),
      }),
  );
};
