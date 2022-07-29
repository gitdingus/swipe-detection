export default function detectSwipe(element, callback) {
  let swipeCoordinates = {};

  const getDirection = function getSwipeDirection({ enter, out }) {
    const xDiff = Math.abs(enter.x - out.x);
    const yDiff = Math.abs(enter.y - out.y);
    let swipeDirection;

    if (xDiff > yDiff) {
      swipeDirection = enter.x > out.x ? 'left' : 'right';
    } else {
      swipeDirection = enter.y > out.y ? 'up' : 'down';
    }

    return swipeDirection;
  };

  const pointerEnter = function pointerEnterListener(e) {
    swipeCoordinates = {};
    Object.assign(swipeCoordinates, { enter: { x: e.x, y: e.y } });
  };

  const pointerOut = function pointerOutListener(e) {
    Object.assign(swipeCoordinates, { out: { x: e.x, y: e.y } });

    const direction = getDirection(swipeCoordinates);
    callback(direction);
  };

  element.addEventListener('pointerenter', pointerEnter);
  element.addEventListener('pointerout', pointerOut);
}
