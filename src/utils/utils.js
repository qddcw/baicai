/*
 * @Description: 
 * @Version: 2.0
 * @Autor: DCW
 * @Date: 2021-02-23 09:49:19
 * @LastEditors: DCW
 * @LastEditTime: 2021-02-23 09:49:27
 */
export function on() {
  if (document.addEventListener) {
    return function(el, event, handler) {
      if (el && event && handler) {
        el.addEventListener(event, handler, false);
      }
    };
  } else {
    return function(el, event, handler) {
      if (el && event && handler) {
        el.attachEvent("on" + event, handler);
      }
    };
  }
}

export function off() {
  if (document.removeEventListener) {
    return function(el, event, handler) {
      if (el && event) {
        el.removeEventListener(event, handler, false);
      }
    };
  } else {
    return function(el, event, handler) {
      if (el && event) {
        el.detachEvent("on" + event, handler);
      }
    };
  }
}
