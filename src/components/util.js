export const POSITIONS = [
  'top left',
  'top center',
  'top right',
  'bottom left',
  'bottom center',
  'bottom right',
  'left center',
  'right center',
]

/**
 * Set QRCode style to dst from src
 * @param {map} dst
 * @param {map} src props
 * @param {string} caller name
 */
export function SetQRstyle(dst, src, caller) {
  dst['qrsize'] = src.qrsize > 0 ?  src.qrsize : 128;
  dst['qrvoffset'] = src.qrvoffset >= 0 ? src.qrvoffset : 20;
  dst['qrpadding'] = src.qrpadding ? src.qrpadding : '1em';
  dst['qrposition'] = POSITIONS.includes(src.qrposition) ? src.qrposition : 'bottom right';
  dst['qrtext'] = src.qrtext ? src.qrtext : caller;
}

/**
 * Make session ID randomly, the length can be changed.
 */
export function MakeSessionID() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 8; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

function isHexString(arg) {
  if (arg != undefined && typeof arg === 'string' && arg.length > 2 && arg.substring(0,2) != '0x') {
    return false;
  }
  return true;
}

/**
 * Convert to hexadecimal for value property of SendTransaction
 * @param {*} value 
 */
export function ConvertVal2Hexd(value) {
  if (! isHexString(value)) {
    return '0x' + parseInt(value,10).toString(16);
  } 
  return value;
}

/**
 * Convert to hexadecimal for data property of SendTransaction
 * @param {*} data 
 */
export function ConvertData2Hexd(data) {
  if (! isHexString(data)) {
    var hex = '';
	  for (var i=0; i < data.length; i++) {
		  hex += data.charCodeAt(i).toString(16);
    }
    return '0x' + hex;
  }
  return data;
}
