export function isIsoDate(str: string) {
  // this exp is taken von https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json
  if (!/^([1-2][0-9]{3}-[0-1][0-9]-[0-3][0-9]|[1-2][0-9]{3}-[0-1][0-9]|[1-2][0-9]{3})$/.test(str)) {
    return false;
  } else {
    return true;
  }
}
