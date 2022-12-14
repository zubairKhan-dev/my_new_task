/*eslint-disable*/
const validators = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  password: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[$&+,:;=?@#|'<>.^*()%!-])[A-Za-z0-9$&+,:;=?@#|'<>.^*()%!-]{8,}$/,
  name: /^[A-zÀ-ÿ][A-zÀ-ÿ' -]+$/,
  phone: /^[+]{0,1}[0-9]{9,16}$/,
  postal_code: /^[0-9]{5,7}$/,
  address: /^[A-zÀ-ÿ0-9][A-zÀ-ÿ'0-9 \-,\.\/]+$/,
  url: /((http(s)?:\/\/)?(www.)?([A-z-0-9]{2,})\.([A-z-0-9]{2,})((\.([A-z-0-9]{2,}))*)?(:[0-9]*)?((\/[A-z-0-9]+)*)?(\.[A-Za-z-]+)?((\?)([;&A-z0-9%_.~+=-]*))?)/g,
  html_tags: /(<(([^><])*)>)|(\&(.)*;)/g,
  full_name: /^([a-zA-Z0-9]+|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{1,}|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{3,}\s{1}[a-zA-Z0-9]{1,})$/g,
}

export default validators
